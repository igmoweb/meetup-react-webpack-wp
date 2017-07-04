import React, {PropTypes} from 'react';

export default class TodoItem extends React.Component {
    render() {
        return <li className="todo-item">
            { this.props.title }
            <span className="todo-delete" onClick={ this.props.onDeleteTodo }>Delete</span>
        </li>;
    }
}