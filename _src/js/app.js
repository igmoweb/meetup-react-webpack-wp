import { getTodos } from './helpers';
import styles from '../scss/style.scss';
import Fetcher from './Fetcher';
import React from 'react';
import ReactDOM from 'react-dom';

import TodoItem from './components/TodoItem';
import NewTodoForm from './components/NewTodoForm';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodoTitle: '',
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

    updateNewTodoTitle( e ) {
        this.setState( { newTodoTitle: e.target.value } );
    }

    addNewTodo( e ) {
        e.preventDefault();
        if ( this.state.newTodoTitle.length ) {
            Fetcher.addNewTodo( this.state.newTodoTitle )
                .then( () => {
                    this.loadTodos();
                });
        }
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
            return <TodoItem
                title={ todo.title }
                key={ todo.id }
                onDeleteTodo={ this.deleteTodo.bind( this, todo.id ) }
            />
        });

        return <div>
            <NewTodoForm
                text={ this.state.newTodoTitle }
                onKeyUp={ this.updateNewTodoTitle.bind( this ) }
                onSubmit={ this.addNewTodo.bind( this ) }
            />

            <ul className="todos">
                { todos }
            </ul>
        </div>

    }
}


ReactDOM.render( <App />, document.getElementById( 'app' ) );