import { useState } from 'react'
import './App.css'
import FirstColumn from './firstColumn'
import SecondColumn from './secondColumn'
import ThirdColumn from './thirdColumn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex">
      <FirstColumn></FirstColumn>
      <SecondColumn></SecondColumn>
      <ThirdColumn></ThirdColumn>
    </div>
  )
}

export default App
