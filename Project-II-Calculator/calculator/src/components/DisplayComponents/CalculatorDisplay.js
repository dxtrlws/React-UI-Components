import React from 'react';
import './Display.css';
import NumberButton from './../ButtonComponents/NumberButton'
import ActionButtons from './../ButtonComponents/ActionButton'

function CalculatorDisplay (){
    let numbers = ['clear', 7,8,9,4,5,6,1,2,3, 0];
    const actions = ['/', 'X', '-', '+', '='];

   const calcNums = numbers.map(num => <NumberButton digits={num} />)
   const operators = actions.map(action => <ActionButtons operator = {action} />) 
    return (
        <div>
            <div className="display">
                <p>0</p>
            </div>
            <div className="calcPad">
                <div className="numPad">
                    {calcNums}
                    
                </div>
                <div className="action-pad">
                    {operators}
                    
                </div>
            </div>
        </div>
    )
}

export default CalculatorDisplay
