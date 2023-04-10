const { createSlice } = require('@reduxjs/toolkit');
const { singUp } = require('service/userApi');

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const handleIfPending = state => {
  state.isLoading = true;
};

const handleIfReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(singUp);
  },
});

export const authReducer = authSlice.reducer;
