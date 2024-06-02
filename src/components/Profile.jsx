import GetUserLocation from "./GetUserLocation";
import { Link } from "react-router-dom"
import "./App.css"
const Profile = () => {
    return (
        <>
            <div className="items-container container-color">
                <div>Profile</div>
                <br />
                <Link to={"/user/profile/github"} className="anchor_decoration _link_class">Github</Link>
                <GetUserLocation />
            </div>
        </>
    )
}

export default Profile
