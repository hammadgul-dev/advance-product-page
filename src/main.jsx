import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Pages Style/App.css"
import { Provider } from 'react-redux'
import productStore from './Redux/Store.js'
import { RouterProvider } from 'react-router-dom'
import routes from './AllRouting.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={productStore}>
    <StrictMode>
      <RouterProvider router={routes} />
    </StrictMode>
  </Provider>
);

