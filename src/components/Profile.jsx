import GetUserLocation from "./GetUserLocation";
import { Link } from "react-router-dom"
import "./App.css"
const Profile = () => {
    console.log("profile");
    return (
        <>
            <div className="items-container container-color">
                <div>Profile</div>
                <br />
                <Link to={"/admin/profile/github"} className="anchor_decoration _link_class">Github</Link>
                <GetUserLocation />
            </div>
        </>
    )
}

export default Profile




//======//=======//============//================//=======================///========================//
//======//=======//============//================//=======================///========================//



// import { Link } from "react-router-dom"
// import "./App.css"
// const Profile = () => {
//     console.log("profile");
//     return (
//         <>
//             <div className="items-container container-color">
//                 <div>Profile</div>
//                 <br />
//                 <Link to={"/admin/profile/github"} className="anchor_decoration _link_class">Github</Link>
//                 <Link to={"/admin/profile/location"} className="anchor_decoration _link_class">Get Your Location</Link>
//             </div>
//         </>
//     )
// }

// export default Profile