import logo from "../images/logo.svg"
import { useState } from "react";

export default function Header() {
  const [isOpen,setisOpen]=useState(false);
  return (
  <>
   <header className='header'>
    <div className="flex">
       <img id="headerImg" src={logo} alt=""></img>
       {isOpen&& 
       <div>
       <nav>
        <ul>
            <li><button>Features</button></li>
            <li><button>Pricing</button></li>
            <li><button>Resources</button></li>
        </ul>
       </nav>
    <ul>
        <li><button>Login</button> </li>
        <li><button className="btn-cta">Sign Up</button> </li>
       
    </ul>
       </div>
       }
       <button onClick={()=>setisOpen(!isOpen)}>{isOpen?"Close":"Menu"}</button>
    </div>
   </header>

  </>
  )}
