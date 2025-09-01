import { userNameContext } from "../context/context.js";
import ProfileIcon from "./ProfileIcon.jsx";
import { useContext } from 'react';

const Button = () => {
    const {userName , setuserName} = useContext(userNameContext)
  return (
    <button onClick={()=>{ setuserName("") }}>
        <ProfileIcon/>
        Visit my profile
    </button>
  )
}

export default Button
