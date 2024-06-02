import { createBrowserRouter } from "react-router-dom"

import Layout from "./Layout.jsx"
import About from "./components/About.jsx"
import Product from "./components/Product.jsx"
import Home from "./components/Home.jsx"
import Men from "./components/Men.jsx"
import Women from "./components/Women.jsx"
import Kids from "./components/Kids.jsx"
import Beauty from "./components/Beauty.jsx"
import Studio from "./components/Studio.jsx"
import HomeANDLiving from "./components/HomeANDLiving.jsx"
import Profile from "./components/Profile.jsx"
import Wishlist from "./components/Wishlist.jsx"
import Cart from "./components/Cart.jsx"
import Error from "./components/Error.jsx"
import IdAccess from "./components/IdAccess.jsx"
import Github, { fetchGithubData } from "./components/Github.jsx"
import GetUserLocation from "./components/GetUserLocation.jsx"
import Address from "./components/Address.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement:<Error /> ,  //error page handle 
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop-men", element: <Men /> },
      { path: "/shop-women", element: <Women /> },
      { path: "/shop-kids", element: <Kids /> },
      { path: "/shop-home-living", element: <HomeANDLiving /> },
      { path: "/shop-beauty", element: <Beauty /> },
      { path: "/studio", element: <Studio /> },
      { path: "/product-wishlist", element: <Wishlist /> },
      { path: "/view-cart", element: <Cart /> },
      { path: "/shop-product", element: <Product /> },
      { path: "/about", element: <About /> },
      { path: "/user/profile", element: <Profile /> },
      // {path: "/user/profile/github", element: <Github />, loader: async () => {
      //     let res = await fetch("https://api.github.com/users/TapanKumarBehera1")
      //     return res.json()
      //   }},

      { path: "/user/profile/github", element: <Github />, loader: fetchGithubData },
      { path: "/user/profile/location", element: <GetUserLocation /> },
      { path: "/user/profile/location/data", element: <Address /> },
    ],
  },
  { path: "*", element: <Error /> },    // //error page handle
  { path: "/men/:id", element: <IdAccess /> }
])

export default router