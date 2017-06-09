import { getTodos } from './helpers';
import styles from '../scss/style.scss';
import Fetcher from './Fetcher';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            loading: false
        };
    }

    loadTodos() {
        this.setState( { loading: true } );
        Fetcher.getTodos()
            .then( ( todos ) => {
                todos = todos.map( ( todo ) => {
                    return {
                        id: todo.id,
                        title: todo.title.rendered
                    }
                });
                this.setState( { todos, loading: false } );
            });
    }

    deleteTodo( todoId ) {
        const todos = this.state.todos.filter( ( todo ) => {
            if ( todo.id === todoId ) {
                Fetcher.deleteTodo( todo.id );
                return false;
            }
            return true;
        });

        this.setState( { todos } );
    }

    componentDidMount() {
        this.loadTodos();
    }

    render() {
        if ( this.state.loading ) {
            return <div>Loading...</div>
        }


        const todos = this.state.todos.map( ( todo ) => {
            return <li key={ todo.id } className="todo-item">
                { todo.title }
                <span className="todo-delete" onClick={ this.deleteTodo.bind( this, todo.id ) }>Delete</span>
            </li>
        });

        return <ul className="todos">
            { todos }
        </ul>;

    }
}


ReactDOM.render( <App />, document.getElementById( 'app' ) );