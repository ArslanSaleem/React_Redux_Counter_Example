import { createSlice } from '@reduxjs/toolkit';


export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

export const counterReducer = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(incrementAsync, (state, action) => {
            return action.payload
        })
    },
});



// Selectors 
export const selectCount = state => state.counter.value;

// Actions
export const { increment, decrement, incrementByAmount } = counterReducer.actions

export default counterReducer.reducer
