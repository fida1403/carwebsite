import React from 'react'
import './Hero.css'
import arrow_btn from '../../src/Assets/arrow_btn.png'
import pause_icon from '../../src/Assets/pause_icon.png'
import play_icon from '../../src/Assets/play_icon.png'

function Hero({SetPlayStatus,PlayStatus,HeroCount,SetHeroCount,HeroData}) {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <p>{HeroData.text1}</p>
            <p>{HeroData.text2}</p>
        </div>
        <div className='hero-explore'>
            <p>Explore the Features</p>
            <img src={arrow_btn} alt='' />
        </div>
        <div className='hero-dot-play'>
            <ul className='hero-dots'>
                <li onClick={()=>SetHeroCount(0)} className={HeroCount===0 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick={()=>SetHeroCount(1)} className={HeroCount===1 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick={()=>SetHeroCount(2)} className={HeroCount===2 ? "hero-dot orange" : "hero-dot"}></li>
            </ul>
            <div className='hero-play'>
                <img onClick={()=>SetPlayStatus(!PlayStatus)} src={PlayStatus ? pause_icon : play_icon} alt='' />
                <p>See the video</p>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
