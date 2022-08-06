import { createSlice } from '@reduxjs/toolkit';
import { contactsApi } from './services';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggenIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      contactsApi.endpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggenIn = true;
      }
    );
    builder.addMatcher(
      contactsApi.endpoints.logIn.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggenIn = true;
      }
    );
    builder.addMatcher(
      contactsApi.endpoints.logOut.matchFulfilled,
      (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggenIn = false;
      }
    );
    builder.addMatcher(
      contactsApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.isLoggenIn = true;
      }
    );
  },
});

export default authSlice.reducer;
