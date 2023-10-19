import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root.jsx'
import BrandCards from './Components/Layout/BrandCards.jsx'
import Detail from './Components/Layout/Detail.jsx'
import AddProduct from './Components/Layout/AddProduct.jsx'
import Update from './Components/Layout/Update.jsx'
import Details from './Components/Layout/Details.jsx'
import Cart from './Components/Layout/Cart.jsx'

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
        path:"/detail/:brand",
        element: <Detail></Detail>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
      },
      {
        path: "add-product",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/products/prod/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/products/prod/${params.id}`),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
        loader: () => fetch(`http://localhost:5000/cart`),
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
