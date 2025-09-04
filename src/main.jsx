import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from './App.jsx'
import Example from './components/pages/Example.jsx'
import Form from './components/pages/Form.jsx'
import LoginForm from './components/pages/loginform.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
     {/* <Form/> */}
     {/* <LoginForm/> */}
  </StrictMode>,
)
