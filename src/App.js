import { useEffect, useState } from 'react';
import Background from './Components/Background';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

function App() {

let heroData = [
  {text1:"Dive into", text2:"what you love"},
  {text1:"Indulge", text2:"your passions"},
  {text1:"Give in to", text2:"your passions"},
]
const [heroCount, setHeroCount]=useState(2)
const [playStatus, setPlayStatus]=useState(false)

useEffect(()=>{
  setInterval(() => {
    setHeroCount((count)=>{return count===2?0:count+1})
  }, 3000);
},[])

  return (
    <div className="App">
      <Background HeroCount={heroCount} PlayStatus={playStatus}/>
      <Navbar />
      <Hero 
          SetPlayStatus={setPlayStatus}
          PlayStatus={playStatus}
          HeroCount={heroCount}
          SetHeroCount={setHeroCount}
          HeroData={heroData[heroCount]}
        
      />
    </div>
  );
}

export default App;
