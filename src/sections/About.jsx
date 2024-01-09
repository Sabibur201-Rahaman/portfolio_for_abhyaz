import React from 'react'
import Zoom from 'react-reveal/Zoom'
import SectionIntro from '../section/SectionIntro';
import styled  from 'styled-components';
// import css from 'styled-components'
import { motion} from 'framer-motion'
const Wrapper=styled(SectionIntro)`
a{
  border: 1px solid #00e0d0;
  color: green;
  font-family: 'Playfair Display', serif;
  padding: 16px 30px;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;
  &:hover{
    background: #00e0d0;
    color: #6c757d;;
  }
}
p{
  font-family: 'Roboto', sans-serif;
}
@media screen and(max-width:992px){
  img{
    display:none;
  }
}
`
function About() {
  return (
    <Wrapper id="about-part">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="about-img text-center">
           <Zoom> <img
              src="img/big-logo.png"
              alt="image not found"
              className="img-fluid"
            />
            </Zoom>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="about-text">
            <Zoom bottom>
            <motion.h2 
            initial={{
              x:100,
              y:100,
            }}
            animate={{
              x:0,
              y:0,
            }}
            transition={{
              duration:2,
              easing:'easeInOut'
            }}
            >OUR STORY</motion.h2>
            </Zoom>
            <p>
            <Zoom bottom>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
              vel velit auctor aliquet. Aenean sollicitudin, lorem quis
              bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
              nibh id elit. Duis sed odio sit amet nibh vulputate cursus
              </Zoom>
              </p>
            <p>
              <Zoom bottom>
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
              auctor a ornare odio. Sed non mauris vitae erat consequat auctor
              eu in elit. className aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
              </Zoom>
            </p>
            <a href="#">LEARN MORE</a>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
  )
}

export default About
