import { FidgetSpinner } from 'react-loader-spinner'
import { useState } from "react"
import "./App.css"
import Address from "./Address"
const GetUserLocation = () => {

    let [loader, setLoader] = useState(false)
    const [getLatitude, setLatitude] = useState()
    const [getLongitude, setLongitude] = useState()
    const [address, setAddress] = useState()

    const geo = navigator.geolocation
    geo.getCurrentPosition(userCoords)

    function userCoords(position) {
        let userLatitude = position.coords.latitude
        let userLongitude = position.coords.longitude
        setLatitude(userLatitude)
        setLongitude(userLongitude);
    }

    async function fetchData() {
        const API_KEY = "ec5c7167aba04c4c92d87e7172940bdc"
        const url = `https://api.opencagedata.com/geocode/v1/json?key=${API_KEY}&q=${getLatitude}%2C+${getLongitude}&pretty=1&no_annotations=1`
        let res = await fetch(url)
        let locData = await res.json()
        setAddress(locData.results[0])
        setLoader(false)
    }

    function loadLocationHandle() {
        setLoader(true)
        fetchData()
    }

    console.log("GetUserLocation");

    return (
        <>
                <div className="_link_class" onClick={loadLocationHandle}>
                    {address ? <Address address={address} /> : "Load User Data"}
                    {loader &&
                        <div>
                          <FidgetSpinner visible={true} height="80" width="80" ariaLabel="fidget-spinner-loading" wrapperStyle={{}} wrapperClass="fidget-spinner-wrapper" />
                        </div>
                    }
                </div>
        </>
    )
}

export default GetUserLocation
