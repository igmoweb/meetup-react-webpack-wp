import { getTodos } from './helpers';
import styles from '../scss/style.scss';
import Fetcher from './Fetcher';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <ul className="todos">
            <li className="todo-item">One todo</li>
            <li className="todo-item">Another todo</li>
        </ul>;
    }
}


ReactDOM.render( <App />, document.getElementById( 'app' ) );