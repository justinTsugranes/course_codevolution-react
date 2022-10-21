import React, { Component } from 'react'

// setState
// Always make use of setState and never modify the state directly
// If the code has to be executed after the state has been updated, place that code in the cal back function which is the second argument to the setState method.
// When you have to update state based on the previous state value, pass a function as an argument instead of the regular object

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  increment() {
    //   this.setState(
    //     {
    //       count: this.state.count + 1,
    //     },
    //     () => {
    //       console.log('Callback value', this.state.count)
    //     }
    //   )
    //   console.log(this.state.count)
    // }

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
    console.log(this.state.count)
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <>
        <div>Count = {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </>
    )
  }
}

export default Counter
