import React from 'react'
import Fade from 'react-reveal/Fade';
function Promo() {
  
  return (
    <Fade left>
    <section id="video-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 m-auto">
            <div className="video-icon text-center">
              <a
                className="venobox"
                data-vbtype="video"
                href="https://youtu.be/9KqUlIY2Aew"
              >
                <i className="fab fa-youtube video-i"></i>
              </a>

              <h3>WATCH OUR STORY</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fade>
  )
}

export default Promo
