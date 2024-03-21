import Store from "./Store/ReactStore"
import { useContext } from "react"
import { useEffect } from "react"
import selected_product_image from "../images/productImg/image1-fromdatabase.webp"
import "./Bag.css"

const Cart = () => {

    const { addPrds, setPrds } = useContext(Store)


    useEffect(() => {
        let prds = JSON.parse(localStorage.getItem("products"))
        if (prds) {
            setPrds(prds)
        }
    }, [])

    return (
        <>
            <main id="bag-main-container">
                <div className="bag-page-container">
                    <div id="div-one">
                        <div className="added-bag-details">
                            <img src={selected_product_image} alt="item-image" id="added-item-image" />
                            <div className="item-details">
                                <div className="brandname-text">ADIDAS</div>
                                <div className="bag-item-name">Pure cotton oversized t-shirt</div>
                                <div className="all-price-container">
                                    <div className="bagitem-current-price">₹ 1599</div>
                                    <div className="bagitem-original-price">₹ 2499</div>
                                    <div className="bagitem-discount-price">32% OFF</div>
                                </div>
                                <div className="return-period-container">
                                    <div id="return-icon-box">
                                        <i className="fa-solid fa-rotate-left" id="return-icon" />
                                    </div>
                                    <div><strong id="return-day">14 days </strong>return available</div>
                                </div>
                            </div>
                            <div id="delete-items">X</div>
                        </div>
                    </div>
                    <div className="item-pricingCal-container">
                        <div id="calculate-item-no">PRICE DETAILS 1 item</div>
                        <div id="mrp-box">
                            <div>Total MRP</div>
                            <div>₹ 1899</div>
                        </div>
                        <div id="discount-box">
                            <div>Discount on MRP</div>
                            <div id="total-discount">-₹ 55%</div>
                        </div>
                        <div id="convenience-fee-box">
                            <div>Convenience Fee <span id="span-know-more">Know More</span></div>
                            <div>₹ 99</div>
                        </div>
                        <div id="total-amount-box">
                            <div>Total Amount</div>
                            <div className="total-price">₹ 999</div>
                        </div>
                        <button id="placeorder-btn">PLACE ORDER</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Cart