import './App.css'
import ClassClick from './components/ClassClick'
import Counter from './components/Counter'
import EventBind from './components/EventBind'
import FunctionClick from './components/FunctionClick'
import { Greet } from './components/Greet'
import Hello from './components/Hello'
import Message from './components/Message'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className='App'>
      {/* <Greet name='Bruce' heroName='Batman'> */}
      {/* <p>This is Children Props</p> */}
      {/* </Greet> */}
      {/* <Greet name='Clark' heroName='Superman' /> */}
      {/* <button>Action</button> */}
      {/* <Greet name='Diana' heroName='Wonder Woman' /> */}
      {/* <Welcome name='Bruce' heroName='Batman' /> */}
      {/* <Welcome name='Clark' heroName='Superman' /> */}
      {/* <Welcome name='Diana' heroName='Wonder Woman' /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      <EventBind />
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <Counter /> */}
    </div>
  )
}

export default App
