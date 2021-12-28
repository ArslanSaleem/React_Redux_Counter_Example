import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterReducer';

export const counterStore = configureStore({
    reducer: {
        counter: counterReducer
    }
})