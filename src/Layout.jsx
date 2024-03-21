import Store from "./components/Store/ReactStore"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { useState } from "react"

const Layout = () => {
    const name = "Creater Tapan Kumar Behera"
    const age = 99
    const village = "xyz"
    const pincode = 999999

    let [addPrds, setPrds] = useState([])

    return (
        <>
            <Store.Provider value={{ village, pincode,addPrds, setPrds  }}>
                <Header />
                <Outlet context={{ name, age}} />
                <Footer />
            </Store.Provider>
        </>
    )
}

export default Layout