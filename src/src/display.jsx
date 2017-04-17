import React from 'react';
import { AddTodo } from './add';
import { List } from './list';
// import * as _  from 'lodash';
const _ = require('lodash');

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.list = {
      name: '',
      marked: false,
      key: 0,
    };
    this.state = {
      todoList: [
        { name: 'birthday', marked: true, key: 1 },
        { name: 'abc', marked: false, key: 2 }],
      currList: _.clone(this.list),
      modeEdit: false,
      editList: _.clone(this.list),
      name: '',
    };
    this.getName = this.getName.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.save = this.save.bind(this);
    this.renderNormal = this.renderNormal.bind(this);
  }
  getName(newName) {
    const data = this.state.currList;
    data.name = newName;
    let keyValue = 1;
    let id = this.state.todoList;
    id = _.map(id, (index) => { keyValue += 1; });
    data.key = keyValue;
    const todoList = this.state.todoList.slice();
    todoList.push(data);
    this.setState({    todoList,      currList: _.clone(this.list),    });
  }
  updateTodo(list) {
    let todos = this.state.todoList;
    todos = _.map(todos, (todo) => {
    if (todo.key === list.key) {        todo.marked = !todo.marked;      }
      return todo;
    });    this.setState({ todoList: todos });
  }
  editTodo(list) {
    const data = this.state.editList;
    data.name = list.name;
    data.marked = list.marked;
    data.key = list.key;
    const inputName = list.name;
    this.setState({    modeEdit: true,    editList: data,    name: inputName,   });
    // this.renderEdit(list);
  }
  save() {
    const updateData = this.state.editList;
    updateData.name = this.state.name;
    let list = this.state.todoList;
    list = _.map(list, (index) => {
      if (index.key === updateData.key) {        index.name = updateData.name;      }
      return index;
    });
    this.setState({
      modeEdit: false,
      todoList: list,
      editList: _.clone(this.list),
      name: '',
    });
  }
  renderEdit(list) {
    return (
      <div className="col-md-5">
        <label>Update/Edit Todo List</label>
        <ul className="list-group">
          <li className="list-group-item" key={list.key} >
            <input type="text" className="form-control" value={this.state.name}
              onChange={(event) => { this.setState({ name: event.target.value, });
              }}
              placeholder="Update text....."
            />
          </li>
        </ul>
        <button className="btn btn-success" onClick={this.save}>Save</button>
      </div>
    );
  }
  renderNormal() {
    return (
      <div className="col-md-5" >
        <List name={this.state.todoList} updateTodo={this.updateTodo} editTodo={this.editTodo} />
        <AddTodo onChange={this.getName} />
      </div>
    );
  }
  render() {
    if (this.state.modeEdit) {
      return this.renderEdit(this.state.editList);
    }
    return this.renderNormal();
  }
}
