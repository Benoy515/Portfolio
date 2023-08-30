import {FaRust, FaReact} from 'react-icons/fa';
import {IoLogoPython} from 'react-icons/io';
import {SiPandas, SiTailwindcss, SiScikitlearn, SiFlask, SiMongodb} from 'react-icons/si';
import {BsArrowUpRight} from 'react-icons/bs';
import {VscGraph} from 'react-icons/vsc';


export const cards = [
  {
    title: "Technical Indicators/Investment Algo",
    stack: [
      (<IoLogoPython />),
      (<SiPandas />),
      (<SiScikitlearn />),
      (<VscGraph />),
    ],
    content:
    (
      <>
      <ul className='px-10'>
        <li className='md:text-xl text-center my-2'> - Created a Python script to analyze stock data and generate technical indicators</li>
        <li className='md:text-xl text-center my-2'> - Utilized Pandas dataframes to organize price data and MatPlotLib to visualize analysis</li>
        <li className='md:text-xl text-center my-2'> - Used logistic regression on technical data with SKlearn to predict short term stock movements</li>
      </ul>
      <a className="group text-black text-lg md:text-2xl cursor-pointer transition-all duration-500 mt-3" href="https://github.com/Benoy515/Financial-Indicators/tree/main">Github<BsArrowUpRight className='inline'/><span className='block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black'></span></a>
      </>
    )
  },
  {
    title: "Neural Network in Rust",
    stack: [
      (<FaRust />),
    ],
    content:
    (
      <>
      <ul className='px-10'>
        <li className='md:text-xl text-center my-2'> - Wrote a basic neural network in Rust to recognize handwritten digits from the MNIST dataset</li>
        <li className='md:text-xl text-center my-2'> - Implemented using only a linear algebra crate (ndarray) and supports custom size and number of hidden layers</li>
        <li className='md:text-xl text-center my-2'> - Wrote a math cheat sheet along with the project to explain gradient descent in a simple, digestible way</li>
      </ul>
      <a className="group text-black text-lg md:text-2xl cursor-pointer transition-all duration-500 mt-3" href="https://github.com/Benoy515/Rust-Neural-Network">Github<BsArrowUpRight className='inline'/><span className='block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black'></span></a>
      </>
    )
  },
  {
    title: "Quant @ Illinois Website",
    stack: [
      (<FaReact />),
      (<SiTailwindcss />),
    ],
    content:
    (
      <>
      <ul className='px-10'>
        <li className='md:text-2xl text-center my-2'> - Built out using React and styled in TailwindCSS</li>
        <li className='md:text-2xl text-center my-2'> - Animations and keyframes done with Framer Motion library</li>
        {/* <li className='text-xl text-center my-2'> - Wrote a math cheat sheet along with the project to explain gradient descent in a simple, digestible way</li> */}
      </ul>
      <a className="group text-black text-lg md:text-2xl cursor-pointer transition-all duration-500 mt-3" href="https://www.quantillinois.com">Link<BsArrowUpRight className='inline'/><span className='block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black'></span></a>
      </>
    )
  },
  {
    title: "Athena Degree Planner",
    stack: [
      (<FaReact />),
      (<SiTailwindcss />),
      (<SiFlask />),
      (<SiMongodb />),
    ],
    content:
    (
      <>
      <ul className='px-10'>
        <li className='md:text-xl text-center my-2'> - Creates an optimized degree plan for students factoring in majors, minors, AP Credit, and desired semesterly course load.</li>
        <li className='md:text-xl text-center my-2'> - Backend is a RESTful API built in Flask with a MongoDB database and an optimization algorithm written in Python.</li>
        <li className='md:text-xl text-center my-2'> - Frontend designed in React and Tailwind with drag and drop functionality and robust state management.</li>
        <li className='md:text-xl text-center my-2'> - Provides automatic degree planning for over 20 majors and minors at UIUC and considers all available AP exams.</li>
      </ul>
      <a className="group text-black text-lg md:text-2xl cursor-pointer transition-all duration-500 mt-3" href="https://athenadegreeplanner.live">Link<BsArrowUpRight className='inline'/><span className='block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black'></span></a>
      </>
    )
  },
  
]