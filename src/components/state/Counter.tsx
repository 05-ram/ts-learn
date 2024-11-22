import React, { useReducer } from 'react'

const initialState = {
    count: 0
}

type CounterState = {
    count: number
}

type updateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type resetAction = {
    type: 'reset'
}

type CounterProps = updateAction | resetAction

function reducer(state: CounterState, action: CounterProps) {
    console.log('running...', state)
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count + action.payload }
        case 'reset':
            return initialState;
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '12px' }}>
            Count:{state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default Counter