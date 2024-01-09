import React from 'react'
import Spin from 'react-reveal/Spin';
import Wobble from 'react-reveal/Wobble';
import Typed from 'react-typed'
function Home() {
  const typedStrings=[
    "Complete Ghraphics Design.",
  "Creative Designer.",
  "Complete Front End development.",
  "Complete back End development",
]
  return (
    <>
      <section id="banner-part">
      <div className="container">
        <div className="row banner-slider">
          <div className="col-lg-10 m-auto">
            <div className="banner-text text-center">
              <h2>We Are <span className="typed">
               <Typed strings={typedStrings}/> 
                </span></h2>
              <p>
              <Wobble>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit.
                </Wobble>
              </p>
              <a href="#">LEARN MORE</a>
            </div>
          </div>
          <div className="col-lg-10 m-auto">
            <div className="banner-text text-center">
              <h2>Complete Front End development</h2>
              <p>
              <Wobble>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit.
                </Wobble>
              </p>
              <a href="#">LEARN MORE</a>
            </div>
          </div>
          <div className="col-lg-10 m-auto">
            <div className="banner-text text-center">
              <h2>Complete back End development</h2>
              <p>
              <Wobble>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit.
                </Wobble>
              </p>
              <a href="#">LEARN MORE</a>
            </div>
          </div>
          <div className="col-lg-10 m-auto">
            <div className="banner-text text-center">
              <h2>Complete Ghraphics Design</h2>
              <p>
              <Wobble>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit.
                </Wobble>
              </p>
              <a href="#">LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
