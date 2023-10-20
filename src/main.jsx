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
import AuthContext from './Components/AuthContext/AuthContext.jsx'
import Login from './Components/Layout/Login.jsx'
import SignUp from './Components/Layout/SignUp.jsx'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <BrandCards></BrandCards>
      },
      {
        path: "/detail/:brand",
        element: <Detail></Detail>,
        loader: ({ params }) => fetch(`https://assignment-10-server-8egwkdvkz-riad-sarkars-projects.vercel.app/products/${params.brand}`)
      },
      {
        path: "add-product",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://assignment-10-server-8egwkdvkz-riad-sarkars-projects.vercel.app/products/prod/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-8egwkdvkz-riad-sarkars-projects.vercel.app/products/prod/${params.id}`),
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch(`https://assignment-10-server-8egwkdvkz-riad-sarkars-projects.vercel.app/cart`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  </React.StrictMode>,
)
