import Store from "./Store/ReactStore"
import { useContext } from "react"
import logo from "../images/logo/myntra-logo.png"
import "./App.css"
import { Link, NavLink } from "react-router-dom"
const Header = () => {
    const { addPrds, setPrds } = useContext(Store)
    return (
        <>
            <nav>
                <div id="navbar">
                    <Link href="/">
                        <div id="logo-container">
                            <img src={logo} id="logo" width="130px" />
                        </div>
                    </Link>
                    <div id="list-items-container">
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black"
                            }
                        }} to="/shop-men">MEN</NavLink>
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black"
                            }
                        }} to="/shop-women">WOMEN</NavLink>
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black"
                            }
                        }} to="/shop-kids">KIDS</NavLink>
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black"
                            }
                        }} to="shop-home-living">HOME &amp; LIVING</NavLink>
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black"
                            }
                        }} to="/shop-beauty">BEAUTY</NavLink>
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "black"
                            }
                        }} to="/studio">STUDIO<sup id="span-new-red">NEW</sup></NavLink>
                    </div>
                    <div id="searchbar">
                        <i className="fa-solid fa-magnifying-glass search-icon" />
                        <input type="text" placeholder="Search for products, brands and more" />
                    </div>
                    <div id="profi-wish-bag-container">
                        <NavLink to="/user/profile" className="p-w-b-container">
                            <i className="fa-regular fa-user nav-icons" />
                            <div className="icons-text">Profile</div>
                        </NavLink>
                        <NavLink to="/product-wishlist" className="p-w-b-container">
                            <i className="fa-regular fa-heart nav-icons" />
                            <div className="icons-text">Wishlist</div>
                        </NavLink>
                        <NavLink to="/view-cart" className="p-w-b-container" id="bag-icon-container">
                            <div>
                                <i className="fa-solid fa-bag-shopping nav-icons" />
                                <div className="icons-text" id="bag-box">Bag</div>
                            </div>
                            <div id="bag-items-counter">{addPrds.length}</div>
                        </NavLink>
                    </div>
                </div>
            </nav >

        </>
    )
}

export default Header