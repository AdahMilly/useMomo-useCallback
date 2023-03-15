
import React, { useState, useMemo } from 'react';
import './style.css';
//useMemo() is a React Hook. With useMemo(), we can return memoized values and avoid re-rendering if the dependencies to a function have not changed.

//Memoization is an optimization technique that passes a complex function to be memoized. In memoization, the result is “remembered” when the same parameters are passed-in subsequently.

// use useMemo when you want to cache the result of invoked function
//use useCallback when you want too cache the function it self
export default function App() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // const isEven = (() => {
  //   console.log('isEven called'); // this console print when counterTwo value also get changed
  //   return counterOne % 2 === 0;
  // })();

  const isEven = useMemo(() => {
    console.log('isEven called'); // this console print only when counterOne value gets changed
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>First Counter - {counterOne}</button>
        <span>{isEven ? 'Even ' : 'Odd '}</span>
        <button onClick={incrementTwo}>Second counter - {counterTwo}</button>
      </div>
    </div>
  );
}

// the major differences between React.memo() and useMemo():

// 1) React.memo() is a higher-order component that we can use to wrap components that we do not want to re-render unless props within them change

// 2) useMemo() is a React Hook that we can use to wrap functions within a component. We can use this to ensure that the values within that function are re-computed only when one of its dependencies change

