import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {cards} from "../assets/projects.jsx"

function IconWrapper({children}) {
  return (
    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mx-2">
      {children}
    </div>
  )
}

export default function LayoutCards() {
  const [selectedId, setSelectedId] = useState(-1);

  let openedCard = "bg-white rounded-xl py-5 h-auto min-h-[50vh] w-[40rem] absolute bottom-48 right-0 left-0 m-auto z-20 flex justify-center flex-wrap flex-col"// transition-all duration-500";
  let firstCard = "bg-black border border-white rounded-2xl min-h-[27vh] w-full cursor-pointer col-span-3 col-start-1"//transition-all duration-500";
  let secondCard = "bg-black border border-white rounded-2xl min-h-[27vh] cursor-pointer col-span-2 col-start-4"// transition-all duration-200";
  let thirdCard = "bg-black border border-white rounded-2xl min-h-[27vh] cursor-pointer col-span-2 col-start-1 row-start-2"// transition-all duration-500";
  let fourthCard = "bg-black border border-white rounded-2xl min-h-[27vh] cursor-pointer col-span-3 col-start-3 row-start-2"// transition-all duration-500";
  let cardStyles = [firstCard, secondCard, thirdCard, fourthCard];
  // let clearLayer = "absolute h-full w-full left-0 top-0 bg-black bg-opacity-0";
  let dimLayer = "absolute h-full w-full left-0 top-0 bg-black pointer-events-none";
  let clickLayerBehind = "absolute h-full w-full left-0 top-0 bg-black bg-opacity-0 -z-10"
  let clickLayerFront = "absolute h-full w-full left-0 top-0 bg-black bg-opacity-0 z-10"


  return (
    <div className="w-full pt-12 px-12 grid grid-cols-5 grid-rows-2 gap-6">
      {cards.map((card, i) => (
        <motion.div 
          layout
          className={selectedId === i ? openedCard : cardStyles[i]}
          // animate={{ width: selectedId === card ? "40rem" : "100%"}}
          transition={{ duration: .3}}
          key={i}
          onClick={() => setSelectedId(i)}
          // drag={selectedId === card ? 'x' : false}
          // dragConstraints={{ left: canDrag ? -850 : 0, right: 0 }}
          // dragElastic={.2}
          // onPanEnd={(e, info) => handlePanEnd(e, info, card)}
          // ref={el => containerRefs.current[card] = el}
        >
          {selectedId === i ? (
            <>
              <motion.div 
                className="flex flex-col items-center w-full p-3"
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{duration: .5, delay: .3}}
                // exit={{ opacity: 0}}
                >
                <h1 className='text-4xl text-center mb-5 italic'>{card.title}</h1>
                {card.content}
              </motion.div>
            </>
          ): (
            <>
              <AnimatePresence>
              <motion.div 
                className="flex flex-col w-full h-full justify-center items-center"
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                // exit={{ opacity: 0}}
                transition={{duration: .5, delay: .3}}
              
              >
                <h1 className='text-xl md:text-xl lg:text-2xl xl:text-3xl text-white text-center mx-4 mb-5 italic'>{card.title}</h1>
                <div className="flex">
                {card.stack.map((icon, i) => (<IconWrapper>{icon}</IconWrapper>))}
                </div>
                <ul>
                  {/* <li className='text-2xl text-center'> - Wrote a basic neural network in Rust to recognize handwritten digits from the MNIST dataset</li> */}
                </ul>
              </motion.div>
              </AnimatePresence>
            </>
          )}
        </motion.div>
      ))}
      <motion.div 
        className={dimLayer} 
        animate={{ opacity: selectedId >= 0 ? .6 : 0 }}
        transition={{ duration: .3}}
        // onClick={() => setSelectedId(-1)}
      />
      <div 
        className={selectedId >= 0 ? clickLayerFront : clickLayerBehind}
        onClick={() => setSelectedId(-1)}
      ></div>
    </div>
  )
}