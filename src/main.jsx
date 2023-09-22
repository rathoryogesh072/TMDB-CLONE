import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import appStore from './utils/appStore.jsx'
import { Provider } from 'react-redux'

const router=createBrowserRouter([
  {
    pth:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
    <RouterProvider router={router}/>
    </Provider>
)
