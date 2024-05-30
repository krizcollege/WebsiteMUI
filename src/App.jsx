import { useState } from 'react'
import './App.css'
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'

function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      {isShow && <ClassComponent />}
      <button onClick={() => setIsShow(!isShow)}>Toggle Class Component</button>
      <FunctionalComponent />
    </>
  )
}

export default App
