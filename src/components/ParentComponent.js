import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  // constructor snippet: rconst
  constructor(props) {
    super(props)

    this.state = {
      parentName: 'Parent',
    }

    // bind the method
    this.greetParent = this.greetParent.bind(this)
  }

  // define the Method
  // template literal syntax
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render() {
    return (
      <div>
        {/* pass the method as a prop */}
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
