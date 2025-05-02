import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
<section id='skills'>
    <span className='SkillTitle'>What I Do</span>
    <span className='SkillDesc'>I am Skilled and Passionate Web Designer with hands on experience in making website. I work dynamically according to use case and excel in learning new technology at the moment for any use case. I always try to approach a problem positively while thinking it proctically.</span>
    <div className='SkillBars'>
    <div className='SkillBar'>
        <img className='SkillBarImg' src={UIDesign} alt='UIDesign'></img>
        <div className='SkillBarText'>
            <h2>UIDesign</h2>
            <p>Experince in making Ui Ux design more creative</p>
        </div>
    </div>
    <div className='SkillBar'>
    <img className='SkillBarImg' src={WebDesign} alt='WebDesign'></img>
    <div className='SkillBarText'> 
            <h2>WebDesign</h2>
            <p>Experience in making websites</p>
        </div>
    </div>
    <div className='SkillBar'>
    <img className='SkillBarImg' src={AppDesign}alt='AppDesign'></img>
    <div className='SkillBarText'>
            <h2>Problem Solving</h2>
            <p>Ready to solve your problems around AI and Tech</p>
        </div>
    </div>
    </div>
</section>
  )
}

export default Skills