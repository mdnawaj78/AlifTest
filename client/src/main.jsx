import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' in React 18
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './redux/store';

// Create a root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the new createRoot API
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
