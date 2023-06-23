import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Contact() {

    return (
      <div className="h-screen bg-black z-10 relative">
        <div className="flex">
          <h1 className="text-black bg-white text-9xl py-5 px-7 rounded-br-xl">Contact</h1>
        </div>
        <div className="flex flex-col h-3/5 justify-center">
        <div className="flex justify-around">
          <motion.div className="flex"
          initial={{ opacity: 0 , x: -100}}
          animate={{ opacity: 1 , x: 0}}
          transition={{duration: 1, delay: .5}}>
            <AiFillGithub className='text-white text-4xl me-3'/>
            <a className="group text-white text-2xl cursor-pointer transition-all duration-500" href="https://github.com/Benoy515">github.com/benoy515<span className='block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white'></span></a>
          </motion.div>

          <motion.div className="flex"
          initial={{ opacity: 0 , x: -100}}
          animate={{ opacity: 1 , x: 0}}
          transition={{duration: 1, delay: .75}}>
            <AiFillLinkedin className='text-white text-4xl me-3'/>
            <a className="group text-white text-2xl cursor-pointer transition-all duration-500" href="https://www.linkedin.com/in/abhay-benoy">linkedin.com/in/abhay-benoy<span className='block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white'></span></a>
          </motion.div>

          <motion.div className="flex"
          initial={{ opacity: 0 , x: -100}}
          animate={{ opacity: 1 , x: 0}}
          transition={{duration: 1, delay: 1}}>
            <AiFillMail className='text-white text-4xl me-3'/>
            <a className="group text-white text-2xl cursor-pointer transition-all duration-500" href="mailto:abhayb2@illinois.edu">abhayb2@illinois.edu<span className='block max-w-0 ms-[50%] group-hover:ms-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white'></span></a>
          </motion.div>
        </div>
        </div>
      </div>
    );
  }