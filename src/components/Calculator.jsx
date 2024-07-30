import { useState } from 'react'
import React from 'react';
import './Calculator.css';


function Calculator() { 
     const [value, setValue] = useState('');
     
        function val(e){
         let b = e.target.name       
         let c = b+value;
         setValue(value+b)
         }
        function equa(){
             let b=eval(value);
             setValue(b);
        }
        
        function clea(){
            setValue(" ");
        }
        
        function del(e){
            let b=value;
            b=b.slice(0,-1);
            setValue(b);
        }
    
  return (
    <>
      <div className="Calculator">
        <div className="display">
            <input type='text' value={value} className="result" id="a"></input>
        </div>
        <div className="keys">
            <div className="symbols">
                <button className='but' onClick={clea} >AC</button>
                <button className='but' onClick={val} name={'%'} >%</button>
                <button className='but' onClick={del} >--</button>
                <button className='but' onClick={val} name={'/'} >/</button>
            </div>
            <div className="symbols">
                <button className='but' onClick={val} name={7} >7</button>
                <button className='but' onClick={val} name={8} >8</button>
                <button className='but' onClick={val} name={9} >9</button>
                <button className='but' onClick={val} name={'*'} >*</button>
            </div>
            <div className="symbols">
                <button className='but' onClick={val} name={4} >4</button>
                <button className='but' onClick={val} name={5} >5</button>
                <button className='but' onClick={val} name={6} >6</button>
                <button className='but' onClick={val} name={'-'} >-</button>
            </div>
            <div className="symbols">
                <button className='but' onClick={val} name={1} >1</button>
                <button className='but' onClick={val} name={2} >2</button>
                <button className='but' onClick={val} name={3} >3</button>
                <button className='but' onClick={val} name={'+'} >+</button>
            </div>
            <div className="symbols">
                <button className='but' onClick={val} name={'00'} >00</button>
                <button className='but' onClick={val} name={0} >0</button>
                <button className='but' onClick={val} name={'.'} >.</button>
                <button className='but' onClick={equa}  >=</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Calculator
