import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
function ScrollBottom() {
  return (
    <div>
      <img className='scrollTopIcon'onClick={()=>scroll.scrollToTop()} src="img/scroll.png" />
    </div>
  )
}

export default ScrollBottom
