import "./App.css"

function App() {
  
  const firstNumPressed = (event) => {
    console.log(event.target.innerText);
  }

  const signButtonPressed = (event) => {
    console.log(event.target.innerText);
  }

  const secondNumPressed = (event) => {
    console.log(event.target.innerText);
  }

  const equalButtonPressed = (event) => {
    console.log(event.target.innerText)
  }

  return (
    <div className="calculator">
        <div className="panel">
          <p>0</p>
          <div className="numbers">
            <button onClick={firstNumPressed}>1</button>
            <button onClick={firstNumPressed}>2</button>
            <button onClick={firstNumPressed}>3</button>
            <button onClick={firstNumPressed}>4</button>
            <button onClick={firstNumPressed}>5</button>
            <button onClick={firstNumPressed}>6</button>
            <button onClick={firstNumPressed}>7</button>
            <button onClick={firstNumPressed}>8</button>
            <button onClick={firstNumPressed}>9</button>
            <button onClick={firstNumPressed}>0</button>
            <button onClick={firstNumPressed}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>+</p>
          <div className="numbers">
            <button onClick={signButtonPressed}>+</button>
            <button onClick={signButtonPressed}>-</button>
            <button onClick={signButtonPressed}>*</button>
            <button onClick={signButtonPressed}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>0</p>
          <div className="numbers">
            <button onClick={secondNumPressed}>1</button>
            <button onClick={secondNumPressed}>2</button>
            <button onClick={secondNumPressed}>3</button>
            <button onClick={secondNumPressed}>4</button>
            <button onClick={secondNumPressed}>5</button>
            <button onClick={secondNumPressed}>6</button>
            <button onClick={secondNumPressed}>7</button>
            <button onClick={secondNumPressed}>8</button>
            <button onClick={secondNumPressed}>9</button>
            <button onClick={secondNumPressed}>0</button>
            <button onClick={secondNumPressed}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>0</p>
          <div>
            <button onClick={equalButtonPressed}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
