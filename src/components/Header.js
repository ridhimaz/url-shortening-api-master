import { useState } from "react"
import logo from "../images/logo.svg";
import menu from "../images/menu.png";

export default function Header() {
 
 const [open, setOpen] = useState(false); 
  return (
    <>
      <header >

        <div className="header">

          <div className="left-navbar">
            <img id="logo" src={logo} alt=""></img>
            <ul className="first" style={{ listStyleType: "none" }}>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </div>
        <div className="right-navbar">
          <ul className="second" style={{ listStyleType: "none" }}>
            <li>Login</li>
            <li><button className="btn cyan-btn">Sign Up</button></li>
          </ul>
          </div>
        </div>
        

        <div className="small-header">
          <div className="logo">
          <img id="logo" src={logo} alt="" ></img>
            <label id="toggle-icon" >
              <button style={{border:"none"}} onClick={()=>{setOpen(!open)}}><img width="50px" id="menu" src={menu} alt="menu"/></button>
            </label>
          </div>
          {open&&
          <div className="nav-links">
          <ul className="first" style={{ listStyleType: "none" }}>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          <hr/>
            <ul className="second" style={{ listStyleType: "none" }}>
            <li>Login</li>
            <li><button className="btn cyan-btn">Sign Up</button></li>
          </ul>
          </div>
        }
        </div>
      </header>

    </>
  )
}
