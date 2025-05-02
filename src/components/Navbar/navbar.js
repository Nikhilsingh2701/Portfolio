import React,{useState} from 'react'
import '../../components/Navbar/navbar.css';
import logo from "../../assets/logo.png"
import {Link}from 'react-scroll';
import contactImage from "../../assets/contact.png"
import Menu from "../../assets/menu.png"

const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return <nav className="navbar">
    <img src={logo}alt="logo" className="logo"/>
    <div className="dekstopMenu">
    <Link activeClass="active" to='intro' spy={true}  smooth={true} offset={-100} duration="300" className="desktopMenuListItem">Home</Link>
    <Link activeClass="active" to='skills' spy={true}   smooth={true} offset={-50} duration="300"className="desktopMenuListItem">About</Link>
    <Link activeClass="active" to='works' spy={true}  smooth={true}  offset={-50} duration="300"className="desktopMenuListItem">Portfolio</Link>
    <Link activeClass="active" to='contactPage' spy={true}  smooth={true}offset={-50} duration="300"className="desktopMenuListItem">Photos</Link>
    </div>
    <button className="desktopMenubtn" onClick={()=>{
      document.getElementById('myForm').scrollIntoView({behavior:'smooth'});
    }}>
        <img src={contactImage} alt="" className="desktopMenuImg"/>Contact Me</button>
  
        <img src={Menu}alt="Menu" className="mobMenu"  onClick={()=>setShowMenu(!showMenu)}/>
    <div className="navMenu" style={{display: showMenu?'flex':'none'}}>
    <Link activeClass="active" to='intro' spy={true}  smooth={true} offset={-100} duration="300" className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
    <Link activeClass="active" to='skills' spy={true}   smooth={true} offset={-50} duration="300"className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
    <Link activeClass="active" to='works' spy={true}  smooth={true}  offset={-50} duration="300"className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
    <Link activeClass="active" to='contactPage' spy={true}  smooth={true}offset={-50} duration="300"className="ListItem" onClick={()=>setShowMenu(false)}>Photos</Link>
    <Link activeClass="active" to='' spy={true}  smooth={true}offset={-50} duration="300"className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>

    </div>
  </nav>

}

export default Navbar