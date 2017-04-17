import React from 'react';
const _ = require('lodash');
//import { EditValues } from './EditValues';
import { ListDisplay } from './ListDisplay';

export default class InputText extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: [ { name: 'Birthday', marked: true, key: '1' },
              { name: 'Party', marked: false, key: '2' },
              { name: 'Birthday', marked: true, key: '3' }, ],
      editMode: false,
   };
  }
  handleChecked(index){
    const data = this.state.list;
    const change = _.map(data, (list) => {
      if(index.key === list.key){
          list.marked = !list.marked;
        }
    });
    this.setState({ list: data});
  }
  handleUpdate(index){
    this.setState({ editMode: true});

  }
  render(){
    if(this.state.editMode){
       return( <h1  onKeyPress={this.onKeyPress} >heiii</h1>    );
    }
    else {
      return(
        <ListDisplay arrays={ this.state.list }
          handleChecked={ this.handleChecked.bind(this) }
          handleUpdate={ this.handleUpdate.bind(this) }
        />
        //<AddToDo arrays={this.state.list} handleSubmit={ this.handleSubmit.bind(this) }/>
      );
    }
  }
}
