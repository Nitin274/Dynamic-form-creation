import { formDataReducer } from "./reducer"
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer =  combineReducers({formDataReducer})

export const store = configureStore({reducer: rootReducer})