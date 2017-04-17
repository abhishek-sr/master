import React from 'react';

const _ = require('lodash');

export class List extends React.Component {
  updateTodo(todo) {
    this.props.updateTodo(todo);
  }
  editTodo(todo) {
    this.props.editTodo(todo);
  }
  render() {
    const output = this.props.name;
    const showData = _.map(output, (todo) => {
      let Badge = <span className="badge">Completed</span>;
      if (todo.marked !== true) {
        Badge = '';
      }
      return (
        <li className="list-group-item" key={todo.key}>
          <input
            type="checkbox"
            onClick={() => this.updateTodo(todo)}
            checked={todo.marked}
            className="form-check-input"
          />
          {todo.name} {Badge}
          <button className="btn" onClick={() => this.editTodo(todo)}> Edit </button>
        </li>
      );
    });
    return (
      <div>
        <label>TODO App</label>
        <br />
        <ul className="list-group">
          {showData}
        </ul>
      </div>
    );
  }
}
List.propTypes = {
  name: React.PropTypes.isRequired,
  updateTodo: React.PropTypes.func.isRequired,
  editTodo: React.PropTypes.func.isRequired,
};
