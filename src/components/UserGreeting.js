import React, { Component } from 'react'

// create class component using react snippet: rce
// create a constructor using react snippet: rconst

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true,
    }
  }

  // using if/else statement method
  /* render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Justin</div>
    } else {
      return <div>Welcome Guest</div>
    }
  } */

  // element variable method
  /* render() {
    let message
    if (this.state.isLoggedIn) {
      message = <div>Welcome Justin</div>
    } else {
      message = <div>Welcome Guest</div>
    }
    return <div>{message}</div>
  } */

  // ternary conditional operator method
  // if isLoggedIn is true, the second operator is returned
  // if isLoggedIn is false, the third operator is returned
  /* render() {
    return this.state.isLoggedIn ? (
      <div>Welcome Justin</div>
    ) : (
      <div>Welcome Guest</div>
    )
  } */

  // short circuit operator method
  // if the left side of the ampersand is true, then the right side is evaluated, otherwise the right side is never evaluated
  render() {
    return this.state.isLoggedIn && <div>Welcome Justin</div>
  }
}

export default UserGreeting
