import React from 'react';

const classNames = require('classnames');

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
      validation: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    const name = this.state.val;
    if (name.length > 0) {
      this.props.onChange(name);
      this.setState({
        val: '',
        validation: 1,
      });
    } else {
      this.setState({ validation: 0 });
    }
  }
  render() {
    const validate = classNames({
      'form-group': true,
      'has-error': this.state.validation !== 1,
    });
    return (
      <form>
        <div className={validate}>
          <input
            type="text"
            className="form-control" name="newName"
            onChange={(event) => {
              this.setState({ val: event.target.value });
            }}
            placeholder="Enter your Todo List...."
            value={this.state.val}
          />
        </div>
        <button
          type="submit"
          className="btn btn-default"
          onClick={this.handleClick}
        >
        Submit</button>
      </form>
    );
  }
}
AddTodo.propTypes = { onChange: React.PropTypes.func.isRequired };
