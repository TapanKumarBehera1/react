import Store from './Store/ReactStore'
import { useContext } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { FidgetSpinner } from 'react-loader-spinner'
import { useState, useEffect } from "react"
import "./App.css"
const Github = () => {
    const {village,pincode}=useContext(Store)
    const { name, age } = useOutletContext()
    const gitData = useLoaderData()

    let [loader, setLoader] = useState(false)

    return (
        <>
            <div className="items-container container-color">
                {!gitData ?
                    <FidgetSpinner visible={true} height="80" width="80" ariaLabel="fidget-spinner-loading" wrapperStyle={{}} wrapperClass="fidget-spinner-wrapper" /> :
                    <div id="github-container">
                        <div>{gitData.name} Github Credentials Using "useLoaderData"</div>
                        <img src={gitData.avatar_url} alt="Git Profile Picture" id="git_image" />
                        <div>Email {gitData.email ? gitData.email : "Not Available"}</div>
                        <div>Public Repo {gitData.public_repos}</div>
                        <div>Followers {gitData.followers}</div>
                        <div>Following {gitData.following}</div>
                        <div>{name} || {age} Using "useOutletContext"</div>
                        <div>{village} || {pincode} Using React "useContext"</div>
                    </div>
                }
            </div>
        </>
    )
}

export default Github

export async function fetchGithubData() {
    // let res = await fetch("https://api.github.com/users/hiteshchoudhary")
    let res = await fetch("https://api.github.com/users/TapanKumarBehera1")
    return res.json()
}




//===========//======////////////////===//////////////////////===///////////////////////
//===========//======////////////////===//////////////////////===///////////////////////
// // useLoaderData provides onclicking time data fetching functionality without showing user that data is fetching or something,user have to click that functionlity and fetching started before react useEffect run.so that you can imagine how powerful is it.
// // useOutletContext provides and works the same as contextAPI function.what we provide to the Outlet context obj that will runs inside all childrens   

//===========//======////////////////===//////////////////////===///////////////////////
//===========//======////////////////===//////////////////////===///////////////////////
//===========//======////////////////===//////////////////////===///////////////////////
// import { FidgetSpinner } from 'react-loader-spinner'
// import { useEffect, useState } from "react"
// import "./App.css"
// const Github = () => {

//     let [gitData, setGitData] = useState("")
//     let [loader, setLoader] = useState(false)

//     async function fetchGithubData() {
//         let res = await fetch("https://api.github.com/users/TapanKumarBehera1")
//         let data = await res.json()
//         console.log(data);
//         setGitData(data)
//         setLoader(false)
//     }

//     useEffect(() => {
//         setLoader(true)
//         fetchGithubData()
//     }, [])

//     return (
//         <>
//             <div className="items-container container-color">
//                 {!gitData ?
//                     <FidgetSpinner visible={true} height="80" width="80" ariaLabel="fidget-spinner-loading" wrapperStyle={{}} wrapperClass="fidget-spinner-wrapper" /> :
//                     <div id="github-container">

//                         <div>{gitData.name} Github Credentials</div>
//                         <img src={gitData.avatar_url} alt="Git Profile Picture" id="git_image" />
//                         <div>Email {gitData.email ? gitData.email : "Not Available"}</div>
//                         <div>Public Repo {gitData.public_repos}</div>
//                         <div>Followers {gitData.followers}</div>
//                         <div>Following {gitData.following}</div>
//                     </div>
//                 }
//             </div>
//         </>
//     )
// }

// export default Github
