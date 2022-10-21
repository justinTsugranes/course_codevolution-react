import React, { Component } from 'react'

class EventBind extends Component {
  // add a constructor using 'rconst' in snippets
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello',
    }

    // binding in the class constructor
    // this.clickHandler = this.clickHandler.bind(this)
  }

  /* clickHandler() {
    this.setState({
      message: 'Goodbye',
    })
    console.log(this)
  } */

  // class property as arrow function
  clickHandler = () => {
    this.setState({
      message: 'Goodbye!',
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* First approach - binding in the render method*/}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Second approach - arrow function in render*/}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* Third / BETTER approach suggested by React documentation*/}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
