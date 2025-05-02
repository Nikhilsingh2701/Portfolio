import React from "react";
import "../Intro/intro.css"
import bg from "../../assets/image.png"
import {Link}from 'react-scroll';
import hireMe from '../../assets/hireme.png'

const intro = () => {
  return <section id = "intro">
    <div className="introContent">
      <span className="hello">Hello,</span>
      <span className="introLine">I'm <span className="introName">Nikhil</span><br></br>Website Designer and Developer</span>
      <p className="introPara">I am skilled and a Passionate Website Designer<br></br> experineced in making websites. </p>
      <Link><button className="btn" onClick={()=>{
      document.getElementById('myForm').scrollIntoView({behavior:'smooth'});
    }}><img className="hireMe" src={hireMe} alt="HireMe"></img>Hire Me</button></Link>
    </div>
    <img src={bg} alt="Intro" className="bg"/>
  </section> ;
};

export default intro;
