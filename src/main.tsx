import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app'

import './index.css'
import '@mantine/core/styles.css'
import '@mantine/dropzone/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
