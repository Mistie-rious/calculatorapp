import { useState } from 'react'
import './App.css'
import { create, all } from 'mathjs'


function App() {
  const [count, setCount] = useState([])
  const [operand, setOperand] = useState("")


  const math = create(all)

  const handleOperand = (value) =>{
    setOperand(value)
    setCount([...count, value])
    
  }

  const  handleClick = (value) => {
    if (value === 'DEL') {
      setCount(count.slice(0, -1)); // Remove the last element
    } else {
      setCount([...count, value]);
    }
  };

  const  resetClick = () => {
    setCount([])
   
  }

  const calculateExpression = () =>{
    let expression = count.join('')
    let result = math.evaluate(expression)
    setCount([result.toString()])
  }


  console.log(count)
  return (
    <>
      <div>
        <div className="container">
       <div className="heading">
        <span className='left'>calc</span>
        <span className='right'>theme</span>
        
       <label className='switch'>
       <input type='checkbox' />
       <input type='checkbox' />
       <input type='checkbox' />
        <span className='slider'/>
       </label>
     
        </div>
       <div className="answer">
        {count}</div>
       <div className="numbers">
       <button className="number" onClick={() =>  handleClick('7')}>7</button>
        <button className="number" onClick={() =>  handleClick('8')} >8</button>
        <button className="number" onClick={() =>  handleClick('9')} >9</button>
        <button className="command1" onClick={() =>  handleClick('DEL')}  >DEL</button>
        <button className="number" onClick={() =>  handleClick('4')} >4</button>
        <button className="number" onClick={() =>  handleClick('5')}>5</button>
        <button className="number" onClick={() =>  handleClick('6')} >6</button>
        <button className="number" onClick={() =>  handleOperand('+')} >+</button>
        <button className="number" onClick={() =>  handleClick('1')} >1</button>
        <button className="number" onClick={() =>  handleClick('2')} >2</button>
        <button className="number" onClick={() =>  handleClick('3')} >3</button>
        <button className="number" onClick={() =>  handleOperand('-')}  >-</button>
        <button className="number"  onClick={() =>  handleClick('.')} >.</button>
        <button className="number" onClick={() =>  handleClick('0')} >0</button>
        <button className="number" onClick={() =>  handleOperand('/')}>/</button>
        <button className="number" onClick={() =>  handleOperand('*')}>x </button>
        <button className="command" onClick={resetClick}  >RESET</button>
        <button className="equal" onClick={calculateExpression}  >=</button>
        </div>
       
       </div>
      </div>
 
    </>
  )
}

export default App
