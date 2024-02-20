import { Link } from "react-router-dom"
import "./App.css"
const Error = () => {
    return (
        <>
            <div className="items-container container-color">
                <div><Link to={"/"} className="anchor_decoration">⬅️ go back</Link> 404 Error | Page does not exist</div>
            </div>
        </>
    )
}

export default Error