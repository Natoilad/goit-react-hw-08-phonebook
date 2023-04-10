import { createAsyncThunk } from '@reduxjs/toolkit';
import { currentUser, loginUser, singUpUser, token } from 'service/userApi';

export const singUpThunk = createAsyncThunk(
  'auth/singUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await singUpUser(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await loginUser(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await loginUser();
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const sessionToken = getState().auth.token;
      if (!sessionToken) {
        return rejectWithValue('Please Login');
      }
      token.set(sessionToken);
      const { data } = await currentUser();
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
