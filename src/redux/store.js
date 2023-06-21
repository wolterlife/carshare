import {combineReducers, configureStore} from '@reduxjs/toolkit';
import registrationSlice from './registrationSlice';

const rootReducer = combineReducers({
  registration: registrationSlice,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
  }
)

export default rootReducer;
