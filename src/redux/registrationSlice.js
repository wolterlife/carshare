import {createSlice} from '@reduxjs/toolkit';

const registrationSlice = createSlice({
  name: 'toolkit',
  initialState: {
    accounts: [],
    isAuth: false,
    currentAccount: {}
  },
  reducers: {
    addAccount(state, action) {
      state.accounts.push(action.payload);
      state.isAuth = true;
      delete action.payload.password;
      state.currentAccount = action.payload
    },
    exitAccount(state) {
      state.isAuth = false;
      state.currentAccount = {};
    }
  }
})

export default registrationSlice.reducer
export const {addAccount, exitAccount} = registrationSlice.actions;
