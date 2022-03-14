import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css';
import App from './App'

// needed for DEV
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  // wrapping to apply some settings
  // JSX syntax
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// needed for DEV
reportWebVitals()
