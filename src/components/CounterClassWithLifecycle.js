import React, { Component } from 'react'

export default class CounterClassWithLifecycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increase = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  setTitle = () => {
    document.title = `You clicked ${this.state.count} times`
  }
  componentDidMount = () => {
    this.setTitle();
  }
  componentDidUpdate = () => {
    this.setTitle();
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
