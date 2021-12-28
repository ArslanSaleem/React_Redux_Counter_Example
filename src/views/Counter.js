import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    decrement,
    increment,
    incrementAsync,
    incrementByAmount,
    selectCount
} from '../application/CounterReducer';


export function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')
    const [incrementalValue, setIncrementalValue] = useState('0')
    const [error, setError] = useState(false)

    const handleIncrementByValue = (e) => {
        if (isNaN(parseInt(incrementalValue))) {
            setError(true);
        } else {
            dispatch(incrementAsync(parseInt(incrementalValue)))
            setError(false);
        }

    }

    return (
        <div>
            <div >
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span >{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>

            <div >
                <input
                    aria-label="Updated Value"
                    onChange={(e) => setIncrementalValue(e.target.value)}
                >
                </input>
                <button
                    aria-label="Update Button"
                    onClick={handleIncrementByValue}
                >
                    Increment By Value
                </button>
                {error ? "Enter Integer Number" : ""}
            </div>


        </div>
    )
}