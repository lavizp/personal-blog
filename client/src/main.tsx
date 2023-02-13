import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'
import AuthProvided from './contexts/AuthProvided';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvided>
        <App />
      </AuthProvided>
    </BrowserRouter>
  </React.StrictMode>,
)
