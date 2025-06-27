// main.tsx
// Entry point for the React application. Renders the App component into the root DOM node.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Render the main App component inside React's StrictMode for highlighting potential problems */}
    <App />
  </React.StrictMode>,
)
