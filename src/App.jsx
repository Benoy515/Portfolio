// import { useState } from 'react'
import { motion } from "framer-motion"
import React, { useState, useEffect, useRef } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import DOTS from 'vanta/dist/vanta.dots.min';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';


import Navbar from './components/Navbar.jsx'
import ClearAnimation from './components/ClearAnimation.jsx'
import Home from './pages/Home.jsx'
import Experience from './pages/Experience.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'


function App() {
  const [page, setPage] = useState(0)
  const [animationActive, setAnimationActive] = useState(false)

  const handlePageChange = (keyVal) => {
    setAnimationActive(true)
    
    setTimeout(() => {
      setPage(keyVal)
    }, 500)

    setTimeout(() => {
      setAnimationActive(false)
    }, 1200)
    // clearTimeout(timer)
  }

  // const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       // NET({
  //       //   el: myRef.current, // element selector string or DOM object reference
  //       //   THREE: THREE, // extended THREE
  //       //   mouseControls: true,
  //       //   touchControls: true,
  //       //   gyroControls: false,
  //       //   minHeight: 200.00,
  //       //   minWidth: 200.00,
  //       //   scale: 1.00,
  //       //   scaleMobile: 1.00,
  //       //   color: 0xffffff,
  //       //   backgroundColor: 0x0
  //       // })
  //       WAVES({
  //         el: myRef.current, // element selector string or DOM object reference
  //         THREE: THREE, // extended THREE
  //         color: 0x000000,
  //         waveHeight: 50,
  //         shininess: 50,
  //         waveSpeed: 0.5,
  //         zoom: 0.7,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    <>
    <div className='grid grid-cols-5'>
      

      <div className='col-span-4 relative' ref={myRef}>
        {animationActive && <ClearAnimation />}

        {(() => {
          switch (page) {
          case 0:
            return <Home />
          case 1:
            return <Experience />
          case 2:
            return <Skills />
          case 3:
            return <Projects />
          case 4:
            return <Contact />
        }})()}
      </div>
      {/* <div className="" > */}
      <Navbar page={page} handleClick={handlePageChange}/>
      {/* </div> */}
    </div>
    
    </>
  )
}

export default App
