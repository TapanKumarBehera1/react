import { useParams, Link } from "react-router-dom"
import "./App.css"
const IdAccess = () => {
    const { id } = useParams()
    return (
        <>
            <div className="items-container container-color">
                <div>You have Entered {id}</div>
                <div id="routingById">Go to <Link to="/">Home</Link></div>
            </div>
        </>
    )
}

export default IdAccess