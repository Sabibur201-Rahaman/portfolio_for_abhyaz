import React, { useEffect } from 'react'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import styled,{css} from 'styled-components'
import SectionIntro from '../section/SectionIntro';
import {motion,useAnimation} from 'framer-motion'
import {useInView}from "react-intersection-observer"
const Wrapper=styled(SectionIntro)`
p{
  font-family: 'Roboto', sans-serif;
}
`
const parentVariants={
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{
      when:'beforeChildren',
      staggerChildren:0.5,
    }
  },
}
  const childvariants={
    hidden:{
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        duration:1,
      }
    }
  }
function Services() {
  const controls=useAnimation();
const[ref,InView]=useInView()
useEffect(()=>{
  if(InView){
controls.start('visible')
  }
console.log(InView)
},[controls,InView])
  return (
    <Wrapper id="section-part">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="service-head text-center">
            <h2>EXPERTISE</h2>
            <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
          </div>
        </div>
      </div>
      <motion.div  ref={ref}variants ={parentVariants}initial='hidden'animate={controls} className="row">
        <motion.div className="col-lg-4">
          <div className="service-text text-center">
            <img src="img/icon1.png" alt="icon" className="img-fluid" />
            <h5>WEB DESIGN & DEVELOPMENT</h5>
            <p>
              
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
              vel velit auctor aliquet Aenean.
            </p>
          </div>
        </motion.div>
        <motion.div variants={childvariants} className="col-lg-4">
          <div className="service-text text-center">
            <img src="img/icon2.png" alt="icon" className="img-fluid" />
            <h5>BRANDING IDENTITY</h5>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
              vel velit auctor aliquet Aenean.
            </p>
          </div>
        </motion.div>
        <motion.div  variants={childvariants}className="col-lg-4">
          <div className="service-text text-center">
            <img src="img/icon3.png" alt="icon" className="img-fluid" />
            <h5>MOBILE APP</h5>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
              vel velit auctor aliquet Aenean.
            </p>
          </div>
        </motion.div>
        <motion.div  variants={childvariants}className="col-lg-4">
          <div className="service-text text-center">
          <img src="img/icon4.png" alt="icon" className="img-fluid" />
            <h5>SEARCH ENGINE OPTIMIZATION</h5>
            <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
              vel velit auctor aliquet Aenean.
            </p>
          </div>
        </motion.div>
        <motion.div variants={childvariants} className="col-lg-4">
          <div className="service-text text-center">
            <img src="img/icon5.png" alt="icon" className="img-fluid" />
            <h5>GAME DEVELOPMENT</h5>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
              vel velit auctor aliquet Aenean.
            </p>
          </div>
        </motion.div>
        <motion.div  variants={childvariants}className="col-lg-4">
          <div className="service-text text-center">
            <img src="img/icon6.png" alt="icon" className="img-fluid" />
            <h5>MADE WITH LOVE</h5>
            <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
              vel velit auctor aliquet Aenean.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </Wrapper>
  )
}

export default Services
