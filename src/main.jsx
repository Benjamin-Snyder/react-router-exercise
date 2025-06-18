import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BoardDetails from './BoardDetails.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router' //added

const routes = createBrowserRouter([ //added
  {
    path: '/',
    element: <App />
  },
  {
    path: '/board-details/:id',
    element: <BoardDetails />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
