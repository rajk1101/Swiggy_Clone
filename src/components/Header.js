import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
const[btnName,setBtnName]=useState('Login')
const onlineStatus=useOnlineStatus();

  // let btnName="Login";

    return (
      <div className="header">
        <div className="logo">
          <img id="img1" 
            src={LOGO_URL}
          alt="company_Logo" />
        </div>
        <div className="nav-items">
          <ul className="nav">
            <li>OnlineStatus:{onlineStatus ? "✅" :"🔴" }</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">AboutUs</Link></li>
            <li><Link to="/contact">ContactUs</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <button  onClick={()=>{
              btnName ==='Login'?
              setBtnName('Logout'):
              setBtnName('Login')
              console.log(btnName);
            }} className="login">{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;