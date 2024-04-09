import React from 'react'
import video1 from '../../src/Assets/video1.mp4'
import image1 from '../../src/Assets/image1.png'
import image2 from '../../src/Assets/image2.png'
import image3 from '../../src/Assets/image3.png'
import './Background.css'

function Background({HeroCount, PlayStatus}) {
  if(PlayStatus){
    return(
        <video className='background fade-in' autoPlay muted loop>
            <source src={video1} type='video/mp4' />
        </video>
    )
  }
  else if(HeroCount===0){
    return <img src={image1} className='background fade-in' alt='' />
  }
  else if(HeroCount===1){
    return <img src={image2} className='background fade-in' alt='' />
  }
  else if(HeroCount===2){
    return <img src={image3} className='background fade-in' alt='' />
  }
}

export default Background
