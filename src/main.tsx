import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.tsx'
import React from 'react'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
)
