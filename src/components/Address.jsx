import "./App.css"
const Address = ({ address }) => {
        
    return (
        <>
                {address &&
                    <div id="address-container">
                        <div>{address.components.continent}</div>
                        <div className="address-box">
                            <div>{address.components.country_code}</div>
                            <div>{address.components.country}</div>
                        </div>
                        <div className="address-box">
                            <div>{address.components.state_code}</div>
                            <div>{address.components.state}</div>
                        </div>
                        <div>{address.components._normalized_city}</div>
                    </div>
                }
        </>
    )
}

export default Address