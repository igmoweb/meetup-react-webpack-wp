import { getTodos } from './helpers';
import styles from '../scss/style.scss';
import Fetcher from './Fetcher';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    title: 'One todo',
                    id: 1
                },
                {
                    title: 'Another todo',
                    id: 2
                }
            ]
        }
    }

    render() {
        const todos = this.state.todos.map( ( todo ) => {
            return <li key={ todo.id } className="todo-item">{ todo.title }</li>
        });

        return <ul className="todos">
            { todos }
        </ul>;
    }
}


ReactDOM.render( <App />, document.getElementById( 'app' ) );