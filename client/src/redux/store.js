import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage by default
import authReducer from './features/authslice'; // Import the auth slice

// Redux Persist configuration for the 'auth' slice
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'], // Only persist the 'user' state in auth
};

// Create a persisted reducer for auth
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Configure the store with the persisted auth reducer
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Add other slices here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable warnings about non-serializable data
    }),
});

// Create a persistor to persist the store
const persistor = persistStore(store);

export { store, persistor };
