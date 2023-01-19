import {createRoot} from 'react-dom/client'

//* Components *// 
import App from './App'

//* Style *// 
import './index.css'


const root = createRoot(document.getElementById('root'))

root.render(
  <App />
)