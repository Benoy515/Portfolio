import React, { useState, useEffect, useRef } from 'react';

import Navbar from '../components/Navbar.jsx'
import ClearAnimation from '../components/ClearAnimation.jsx'
import Home from '../pages/Home.jsx'
import Experience from '../pages/Experience.jsx'
import Skills from '../pages/Skills.jsx'
import Projects from '../pages/Projects.jsx'
import Contact from '../pages/Contact.jsx'

export default function DesktopView() {
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
  }

  const myRef = useRef(null);

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