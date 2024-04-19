import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import store from "./Redux/store"
import ShopContextProvider from './Context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <RouterProvider store={store}>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  // </RouterProvider>
);
