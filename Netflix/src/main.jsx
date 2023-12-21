import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import {Provider} from "react-redux"
import { store } from './utils/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)


