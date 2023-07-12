import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {FaRust, FaBootstrap, FaReact, FaHtml5, FaCss3Alt} from 'react-icons/fa';
import {IoLogoPython} from 'react-icons/io';
import {SiPandas, SiJavascript, SiTailwindcss, SiScikitlearn} from 'react-icons/si';
import {BsArrowUpRight} from 'react-icons/bs';
import {VscGraph} from 'react-icons/vsc';
// import {BiLogoJavascript} from 'react-icons/bi';

const cards = [1, 2, 3, 4];
const cards1 = [
  {
    title: "Technical Indicators/Investment Algo",
    stack: [
      (<IoLogoPython className="text-8xl text-white mx-2" />),
      (<SiPandas className="text-8xl text-white mx-2" />),
      (<SiScikitlearn className="text-8xl text-white mx-2" />),
      (<VscGraph className="text-8xl text-white mx-2" />),
    ],
    content:
    (
      <>
      <ul className='px-10'>
        <li className='text-xl text-center my-2'> - Created a Python script to analyze stock data and generate technical indicators</li>
        <li className='text-xl text-center'> - Utilized Pandas dataframes to organize price data and MatPlotLib to visualize analysis</li>
        <li className='text-xl text-center my-2'> - Used logistic regression on technical data with SKlearn to predict short term stock movements</li>
      </ul>
      <a className="group text-black text-2xl cursor-pointer transition-all duration-500 mt-3" href="https://github.com/Benoy515/Financial-Indicators/tree/main">Github<BsArrowUpRight className='inline'/><span className='block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black'></span></a>
      </>
    )
  },
  {
    title: "Neural Network in Rust",
    stack: [
      (<FaRust className="text-8xl text-white" />),
    ],
    content:
    (
      <>
      <ul className='px-10'>
        <li className='text-xl text-center my-2'> - Wrote a basic neural network in Rust to recognize handwritten digits from the MNIST dataset</li>
        <li className='text-xl text-center my-2'> - Implemented using only a linear algebra crate (ndarray) and supports custom size and number of hidden layers</li>
        <li className='text-xl text-center my-2'> - Wrote a math cheat sheet along with the project to explain gradient descent in a simple, digestible way</li>
      </ul>
      <a className="group text-black text-2xl cursor-pointer transition-all duration-500 mt-3" href="https://github.com/Benoy515/Rust-Neural-Network">Github<BsArrowUpRight className='inline'/><span className='block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black'></span></a>
      </>
    )
  },
  {
    title: "Quant @ Illinois Website",
    stack: [
      (<FaReact className="text-8xl text-white mx-2" />),
      (<SiTailwindcss className="text-8xl text-white mx-2" />),
    ],
    content:
    (
      <>
      <ul className='px-10'>
        <li className='text-2xl text-center my-2'> - Built out using React and styled in TailwindCSS</li>
        <li className='text-2xl text-center my-2'> - Animations and keyframes done with Framer Motion library</li>
        {/* <li className='text-xl text-center my-2'> - Wrote a math cheat sheet along with the project to explain gradient descent in a simple, digestible way</li> */}
      </ul>
      <a className="group text-black text-2xl cursor-pointer transition-all duration-500 mt-3" href="https://www.quantillinois.com">Link<BsArrowUpRight className='inline'/><span className='block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black'></span></a>
      </>
    )
  },
  {
    title: "Rubi - Hackathon Project",
    stack: [
      (<FaHtml5 className="text-8xl text-white mx-2" />),
      (<FaCss3Alt className="text-8xl text-white mx-2" />),
      (<SiJavascript className="text-8xl text-white mx-2" />),
      (<FaBootstrap className="text-8xl text-white mx-2" />),
    ],
    content:
    (
      <>
      <ul className='px-10'>
        <li className='text-xl text-center my-2'> - Designed a website to connect charitable organizations to restaurants to claim extra food at the end of the day</li>
        <li className='text-xl text-center my-2'> - Built using HTML/CSS/JS in conjunction with Bootstrap and JQuery and won third overall at MontyHacks V</li>
        {/* <li className='text-xl text-center my-2'> - Wrote a math cheat sheet along with the project to explain gradient descent in a simple, digestible way</li> */}
      </ul>
      <a className="group text-black text-2xl cursor-pointer transition-all duration-500 mt-3" href="https://github.com/Benoy515/Rubi">Github<BsArrowUpRight className='inline'/><span className='block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black'></span></a>
      </>
    )
  },
  
]

export default function LayoutCards() {
  const [selectedId, setSelectedId] = useState(-1);
  // const [canDrag, setCanDrag] = useState(false);
  // const containerRefs = useRef(new Array());
  // const handlePanEnd = (e, info, card) => {
  //   if (selectedId) {
  //     if (Math.abs(info.offset.x) < 5) {
  //       const styles = getComputedStyle(containerRefs.current[card]);
  //       const timeout = styles.transform.split(',')[4] * -.6;
  //       setCanDrag(false);
  //       setTimeout(() => {
  //         setSelectedId(null);
  //       }, timeout);
  //     }
  //   } else {
  //     setCanDrag(true);
  //     setSelectedId(card);
  //   }
  // }
  let openedCard = "bg-white rounded-xl h-[50vh] w-[40rem] absolute bottom-48 right-0 left-0 m-auto z-20 flex justify-center flex-wrap flex-col"// transition-all duration-500";
  let firstCard = "bg-black border border-white rounded-2xl h-[30vh] w-full cursor-pointer col-span-3 col-start-1"//transition-all duration-500";
  let secondCard = "bg-black border border-white rounded-2xl h-[30vh] cursor-pointer col-span-2 col-start-4"// transition-all duration-200";
  let thirdCard = "bg-black border border-white rounded-2xl h-[30vh] cursor-pointer col-span-2 col-start-1 row-start-2"// transition-all duration-500";
  let fourthCard = "bg-black border border-white rounded-2xl h-[30vh] cursor-pointer col-span-3 col-start-3 row-start-2"// transition-all duration-500";
  let cardStyles = [firstCard, secondCard, thirdCard, fourthCard];
  // let clearLayer = "absolute h-full w-full left-0 top-0 bg-black bg-opacity-0";
  let dimLayer = "absolute h-full w-full left-0 top-0 bg-black pointer-events-none";
  let clickLayerBehind = "absolute h-full w-full left-0 top-0 bg-black bg-opacity-0 -z-10"
  let clickLayerFront = "absolute h-full w-full left-0 top-0 bg-black bg-opacity-0 z-10"


  return (
    <div className="w-full p-12 grid grid-cols-5 grid-rows-2 gap-6">
      {cards1.map((card, i) => (
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
                <h1 className='text-4xl text-white text-center mb-5 italic'>{card.title}</h1>
                <div className="flex">
                {card.stack.map((icon, i) => (icon))}
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