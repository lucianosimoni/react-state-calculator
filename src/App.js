import { useState } from "react";
import "./App.css"

function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [operation, setOperation] = useState('+');
  const [secondNum, setSecondNum] = useState(0);
  const [result, setResult] = useState(0);
  const [storedNum, setStoredNum] = useState(5.9);
  const [separators, setSeparators] = useState([false, false]) //First and Second pad

  const firstNumPressed = (event) => {
    const value = event.target.innerText;

    if (value === 'Clear') {
      setFirstNum(0);
      setResult(0);
      setSeparators([false, separators[1]]) // Not used
      return
    }
    // If recall, set First Num to be the Stored value
    else if (value === 'Recall') {
      setFirstNum(storedNum);

      // Check if there is a separator already
      if (String(storedNum).includes('.')) {
        setSeparators([true, separators[1]]);
      } else {
        setSeparators([false, separators[1]]);
      }

      return
    }
    // Adds Dot to the number. If first separator doesn't exist as well!.
    // Return nothing if separator already used.
    else if (value === 'Dot') {
      if (separators[0] === false) {
        setSeparators([true, separators[1]]) // used
        setFirstNum(firstNum + '.');
        return
      }
      else return
    }

    // If is Zero, update Zero to the new value
    if (firstNum == '0') {
      setFirstNum(value);
      return // Don't continue
    }

    // If not zero, append the digit to the end.
    setFirstNum(firstNum + value);
  }

  const signButtonPressed = (event) => {
    const value = event.target.innerText;

    setOperation(value);
  }

  const secondNumPressed = (event) => {
    const value = event.target.innerText;

    if (value === 'Clear') {
      setSecondNum(0);
      setResult(0);
      setSeparators([separators[0], false]); // Not used
      return
    }
    // If recall, set Second Num to be the Stored value
    else if (value === 'Recall') {
      setSecondNum(storedNum);

      // Check if there is a separator already
      if (String(storedNum).includes('.')) {
        setSeparators([separators[0], true]);
      } else {
        setSeparators([separators[0], false]);
      }

      return
    }
    // Adds Dot to the number. If second separator doesn't exist as well!.
    // Return nothing if separator already used.
    else if (value === 'Dot') {
      if (separators[1] === false) {
        setSeparators([separators[0], true]) // Used
        setSecondNum(secondNum + '.');
        return
      }
      else return
    }

    // If is Zero, update Zero to the new value
    if (secondNum == '0') {
      setSecondNum(value);
      return // Don't continue
    }

    // If not zero, append the digit to the end.
    setSecondNum(secondNum + value);
  }

  const equalButtonPressed = () => {
    // If division, change it to the char the computer understands (/)
    if (operation === '÷') {
      const finalValue = eval(`${firstNum} / ${secondNum}`);
      setResult(finalValue);

      return
    }

    // If not division, just use EVAL.
    const finalValue = eval(`${firstNum} ${operation} ${secondNum}`);
    
    setResult(finalValue);
  }

  const storeButtonPressed = () => {
    // Store the RESULT variable on the StoredNum
    console.log(`Stored value ${result}`)

    setStoredNum(result);
  }

  return (
    <div className="calculator">
        <div className="panel">
          <p>{firstNum}</p>
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
            <button onClick={firstNumPressed}>Dot</button>
            <button onClick={firstNumPressed}>Clear</button>
            <button onClick={firstNumPressed}>Recall</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operation}</p>
          <div className="numbers">
            <button onClick={signButtonPressed}>+</button>
            <button onClick={signButtonPressed}>-</button>
            <button onClick={signButtonPressed}>*</button>
            <button onClick={signButtonPressed}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{secondNum}</p>
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
            <button onClick={secondNumPressed}>Dot</button>
            <button onClick={secondNumPressed}>Clear</button>
            <button onClick={secondNumPressed}>Recall</button>
          </div>
        </div>

        <div className="panel answer">
          <p>{result}</p>
          <div className="buttons">
            <button onClick={equalButtonPressed}>=</button>
            <button onClick={storeButtonPressed}>Store</button>
          </div>
        </div>
    </div>
  )
}

export default App
