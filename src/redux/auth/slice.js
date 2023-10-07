import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

const initialState = {
  userName: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.userName = action.payload.user.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userName = action.payload.user.name;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.userName = null;
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.userName = action.payload.name;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
  //     {[register.fulfilled](state, action) {
  //       state.userName = action.payload.user.name;
  //       state.token = action.payload.token;
  //       state.isLoggedIn = true;
  //     },
  //     [login.fulfilled](state, action) {
  //       state.userName = action.payload.user.name;
  //       state.token = action.payload.token;
  //       state.isLoggedIn = true;
  //     },
  //     [logout.fulfilled](state) {
  //       state.userName = null;
  //       state.token = null;
  //       state.isLoggedIn = false;
  //     },

  //     [refreshUser.pending](state) {
  //       state.isRefreshing = true;
  //     },
  //     [refreshUser.fulfilled](state, action) {
  //       state.userName = action.payload.name;
  //       //   console.log(action.payload);
  //       state.isLoggedIn = true;
  //       state.isRefreshing = false;
  //     },
  //     [refreshUser.rejected](state) {
  //       state.isRefreshing = false;
  //     },
  //   },
});

export const authReducer = authSlice.reducer;
