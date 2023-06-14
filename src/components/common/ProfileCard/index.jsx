import React  from "react";
import "./index.scss";


export default function ProfileCard({  currentUser , onEdit}) {
   
    return (
        <>
        <div className="profile-card">
          <div className="edit-btn">
            <button onClick={onEdit}>Edit</button>
          </div>
        <div>
         <div className="profile-info">
          <h3 className="userName">{currentUser.name}</h3>
          <p className="heading">{currentUser.headline}</p>
          <p>{currentUser.location}</p>
         </div>
         <div className="right-info">
          <p>{currentUser.college}</p>
          <p>{currentUser.company}</p>
         </div>
        </div>
        </div>
        
        </>
        );
       

}