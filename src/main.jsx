import router from "./AppRouting"
import { RouterProvider } from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)






//==========//==//////////////////////=================///////////
//==========//==//////////////////////=================///////////
// via loader obj you can send a callback req that will render also load before useEffect.and also that will render that page on mouse hover also stores in cache memory. and good part is page will display users very fact because of cache memory store   