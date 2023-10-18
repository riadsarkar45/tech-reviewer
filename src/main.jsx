import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root.jsx'
import BrandCards from './Components/Layout/BrandCards.jsx'
import Detail from './Components/Layout/Detail.jsx'
import AddProduct from './Components/Layout/AddProduct.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <BrandCards></BrandCards>
      },
      {
        path:"/detail",
        element: <Detail></Detail>
      },
      {
        path: "add-product",
        element: <AddProduct></AddProduct>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
