import React from 'react'
import './works.css'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (

    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='workDesc'>I take pride in paying attention to small details. I will keep adding on projects as I make some new intresting websites.</span>
        <div className='workImgs'>
          <img className='workImg' alt='' src={portfolio1}></img>  
          <img className='workImg' alt='' src={portfolio2}></img>  
          <img className='workImg' alt='' src={portfolio3}></img>  
          <img className='workImg' alt='' src={portfolio4}></img>  
          <img className='workImg' alt='' src={portfolio5}></img>  
          <img className='workImg' alt='' src={portfolio6}></img>  
        </div>
    </section>
  )
}

export default Works