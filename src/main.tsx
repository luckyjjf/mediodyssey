import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Debug: Log when script starts
console.log('Main.tsx starting...')

try {
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    console.error('Root element not found!')
    document.body.innerHTML = '<div style="padding: 20px; color: red;">Error: Root element not found</div>'
  } else {
    console.log('Root element found, creating React root...')
    
    const root = createRoot(rootElement)
    
    root.render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
    
    console.log('React app rendered successfully')
  }
} catch (error) {
  console.error('Failed to render React app:', error)
  document.body.innerHTML = `<div style="padding: 20px; color: red;">
    <h1>Error Loading Application</h1>
    <pre>${error instanceof Error ? error.message : String(error)}</pre>
  </div>`
}
