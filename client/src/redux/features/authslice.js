import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signin, signup } from '../api/authService';

// Thunk for signing in a user
export const signInUser = createAsyncThunk(
  'auth/signin',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signin(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error properly
    }
  }
);

// Thunk for signing up a user
export const signUpUser = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await signup(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error properly
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
    success: false,  // Add success state for signup process
  },
  reducers: {
    signOut: (state) => {
      state.user = null; // Clear user data on sign out
    },
    resetAuthState: (state) => {
      state.success = false; // Reset success state after navigation
      state.error = null; // Clear error after handling
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle SignIn
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload; // Store user data when signed in
        state.loading = false;
        state.error = null;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.loading = false;
      })

      // Handle SignUp
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload; // Store user data when signed up
        state.loading = false;
        state.success = true; // Set success to true on signup success
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.loading = false;
        state.success = false;
      });
  },
});

export const { signOut, resetAuthState } = authSlice.actions;
export default authSlice.reducer;
