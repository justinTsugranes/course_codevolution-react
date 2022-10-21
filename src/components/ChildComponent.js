import React from 'react'

// react snippet to create a functional component: rfce
// using the simpler function component because we don't use state here

// access the method from the parent component using the props object
// arrow function syntax is the simplest way to pass parameters from the child component to the parent component

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('the Child Component')}>
        Greet Parent
      </button>
    </div>
  )
}

export default ChildComponent
