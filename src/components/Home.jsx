import items from "./Data"
import "./App.css"
import { useState } from "react"
const Home = () => {
    const [products, setProducts] = useState(items)
    return (
        <>
            <main>
                <div className="items-container">
                    {
                        products.map((product) => {
                            return (
                                <div className="item-container" key={product.id}>
                                    <img src={product.item_image} alt="item image" className="item-image" />
                                    <div className="rating">
                                        {product.rating.stars} <span id="rating-star">★</span> | {product.rating.noOfReviews}
                                    </div>
                                    <div className="div-in-item-container">
                                        <div className="company-name">{product.company_name}</div>
                                        <div className="item-name">{product.item_name}</div>
                                        <div className="price">
                                            <span className="current-price">Rs {product.current_price}</span>
                                            <span className="original-price">Rs {product.original_price}</span>
                                            <span className="discount">{product.discount_percentage}% OFF</span>
                                        </div>
                                        <button className="btn-add-bag">Add to Bag</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </main>
        </>
    )
}

export default Home