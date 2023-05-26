import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Layout/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/Providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import Error404 from './Components/Error404/Error404';
import Blogs from './Components/Blogs/Blogs';
import Main from './Components/Main/Main';
import AddToy from './Components/AddToy/AddToy';
import Detailstoy from './Components/Detailstoy/Detailstoy';
import Errorpage from './Components/Layout/Errorpage';
import MyToys from './Components/MyToys/MyToys';
import Update from './Components/Update/Update';
import AllToys from './Components/AllToys/AllToys';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Main></Main>,
        loader:()=>fetch(`https://sportzcar-server.vercel.app/alltoys`)
      },
      {
        path:'/all-toys',
        element:<AllToys></AllToys>,
        //loader:()=>fetch(`https://sportzcar-server.vercel.app/alltoys`)
      },
      {
        path:'/toy/:id',
        element:<PrivateRoute><Detailstoy></Detailstoy></PrivateRoute>,
        loader:({params})=>fetch(`https://sportzcar-server.vercel.app/toy/${params.id}`)
      },
      {
        path:'/my-toys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://sportzcar-server.vercel.app/update/${params.id}`)
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/add-toy',
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },

    ]
  },
  {
  path: "/*",
    element: <Errorpage></Errorpage>,
    children:[
      {
        path:'/*',
        element:<Error404></Error404>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
