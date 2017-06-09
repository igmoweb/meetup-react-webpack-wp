import React, {PropTypes} from 'react';

export default class NewTodoForm extends React.Component {
    render() {
        return <form onSubmit={ this.props.onSubmit }>
            <input type="text" defaultValue={ this.props.text } onKeyUp={ this.props.onKeyUp } />
        </form>;
    }
}


