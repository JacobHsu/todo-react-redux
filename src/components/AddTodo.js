import React, { Component } from 'react';

class AddTodo extends Component {
  // props 獲取 redux state  props.text props.setTodoText
  render() {
    return (
      <div>
        <input value={this.props.text} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }

  handleChange = (e) => {
    this.props.setTodoText(e.target.value)
  } 

  handleClick = () => {
    this.props.addTodo(this.props.text);
  }
}

export default AddTodo;