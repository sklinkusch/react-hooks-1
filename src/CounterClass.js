import React, { Component } from 'react'

export default class CounterClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increase = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.increase}>Click to increase</button>
      </div>
    )
  }
}
