import React from 'react';
const _ = require('lodash');
export class ListDisplay extends React.Component{
  handleChecked(index)
  {
    this.props.handleChecked(index);
  }
  handleUpdate(index)
  {
    this.props.handleUpdate(index);
  }
  render(){
    var Obj = this.props.arrays;
    const displayData = _.map(Obj, (index) => {
      let Badge = ' ';
      if(index.marked){ Badge = <span className="badge" style={{ margin: '10px' }}>Completed</span>; }
        return (
          <li className="list-group-item">
             <span style={{ position: 'relative', width: '30%', float: 'left', padding: '5px'  }}>
               <input type="checkbox" checked={ index.marked } value={index.key} onChange={()=> this.handleChecked(index)}/>
               {' '} { index.name }
             </span>
               <button type="button" className="btn btn-success" onClick={ () => this.handleUpdate(index) }>EDIT</button>
            { Badge }
         </li>);
    });
    return(
      <div>
        <h3>To Do App</h3>
        <ul className="list-group">
          { displayData }
        </ul>
      </div>
    );
  }
}
ListDisplay.propTypes = {
  arrays: React.PropTypes.isRequired,
  key: React.PropTypes.isRequired,
  handleChecked: React.PropTypes.func.isRequired,
  handleUpdate: React.PropTypes.func.isRequired,
};
