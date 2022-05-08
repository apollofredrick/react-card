import React from "react";
import profile from "./images/profile.jpg"

const Info = () =>{
    return(
        <div className="info">
            <img src={profile} alt="profile" className="profile"></img>
            <h1>Fredrick Apollo</h1>
            <h2>Frontend Developer</h2>
            <p>The future in Web</p>
            <button className="button">Email</button>
            <button className="button">LinkedIn</button>
        </div>
    )
}

export default Info