import Store from "./components/Store/ReactStore"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

const Layout = () => {
    const name = "Creater Tapan Kumar Behera"
    const age = 21
    const village = "Kamarpal"
    const pincode = 756047
    return (
        <>
            <Store.Provider value={{ village, pincode }}>
                <Header />
                <Outlet context={{ name, age }} />
                <Footer />
            </Store.Provider>
        </>
    )
}

export default Layout