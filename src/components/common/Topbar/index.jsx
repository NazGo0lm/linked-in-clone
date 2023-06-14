import React from 'react';
import LinkedinLogo from "../../../assets/linkedinLogo.png";
import {AiOutlineHome,AiOutlineUserSwitch
  ,AiOutlineSearch,AiOutlineMessage,AiFillBell} from 'react-icons/ai';
import user from "../../../assets/user.png";
import {BsFillBriefcaseFill} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import "./index.scss";

export default function Topbar() {
  let navigate= useNavigate();
  const goToRoute = (route) =>{
    navigate(route);
  };
  return (
    <div className='topbar-main'>
      <img className="linkedin-logo" src={LinkedinLogo} alt="LinkedinLogo"/>
      <div className="react-icons" >
      <AiOutlineSearch size={30} className="react-icon"/>
        <AiOutlineHome size={30} className="react-icon" 
        onClick={()=> goToRoute('/home')}/>
        <AiOutlineUserSwitch size={30} className="react-icon" 
        onClick={()=> goToRoute('/profile')}/>
        <BsFillBriefcaseFill size={30} className="react-icon"/>
        <AiOutlineMessage size={30} className="react-icon"/>
        <AiFillBell size={30} className="react-icon"/>
        
      </div>
      <img className="user-logo" src={user} alt="user"/>
    </div>
  )
}
