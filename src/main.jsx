import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from './App.jsx'
import Example from './components/pages/Example.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
     {/* <Form/> */}
     {/* <LoginForm/> */}
  </StrictMode>,
)
