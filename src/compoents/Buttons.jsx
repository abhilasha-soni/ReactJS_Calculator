import React from "react";
import { useState } from "react";

import "./calculator.css"

export default function Buttons() {

const [calculation, setCalculation]= useState("");
const [result, setResult] = useState("");

const operators = ["+", "-", "/", "*", "."];

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(<button onClick={() => updatecalculation(i.toString())} key={i}>{i}</button>);
    }

    return digits;
  };

const updatecalculation = (value)=>{
if (operators.includes(value) && calculation === "" || 
  operators.includes(value) && operators.includes (calculation.slice(-1))
)
{return;}
setCalculation (calculation + value);

if (!operators.includes(value)){
  setResult(eval(calculation+value).toString());
}

}

const calculate = () => {
		setCalculation(eval(calculation).toString());
	}

	const deleteLast = () => {
		if (calculation == '') {

		}
		const value = calculation.slice(0, -1);
 
	
		setCalculation(value);

		// setResult(eval(value).toString());
		
	}


  return (
    <div className="container">

         <div className="calculator">
      <div className="screen">
        <span>{result ? '(' + result + ')' : ''}</span> {calculation||0}
      </div>
      <div className="operators">
        <button onClick={() => updatecalculation('+')}>+</button>
        <button onClick={() => updatecalculation('-')}>-</button>
        <button onClick={() => updatecalculation('*')}>*</button>
        <button onClick={() => updatecalculation('/')}>/</button>

        <button onClick={deleteLast}>DEL</button>
      </div>

      <div className="digits">
        {createDigits()}
        <button onClick={() => updatecalculation('0')}>0</button>
        <button onClick={() => updatecalculation('.')}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>

    </div>
   
  );
}
