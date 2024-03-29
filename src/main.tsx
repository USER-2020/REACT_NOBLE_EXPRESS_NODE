import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UserRoleProvider } from './services/defaultValues.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserRoleProvider>
      <App />
    </UserRoleProvider>
  </React.StrictMode>,
)
