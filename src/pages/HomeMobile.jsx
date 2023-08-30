import {BsArrowUpRight} from 'react-icons/bs'
import { motion } from "framer-motion";

export default function HomeMobile() {
  return (
    <div className="flex flex-col h-screen border-b-white">
      <motion.div className="flex ms-16 pt-12"
          initial={{ opacity: 0 , x: -100}}
          animate={{ opacity: 1 , x: 0}}
          transition={{duration: 1, delay: .2}}>
            <h1 className="text-white text-7xl leading-tight">Hi! I'm</h1>
            {/* <h1 className="text-white text-7xl leading-tight"><span className="bg-white text-black">Abhay</span>Benoy</h1> */}
      </motion.div>
      <motion.div className="flex ms-16"
          initial={{ opacity: 0 , x: -100}}
          animate={{ opacity: 1 , x: 0}}
          transition={{duration: 1, delay: .4}}>
            <h1 className="text-black bg-white text-7xl leading-tight font-light">Abhay</h1>
            {/* <h1 className="text-white text-7xl leading-tight"><span className="bg-white text-black">Abhay</span>Benoy</h1> */}
      </motion.div>
      <motion.div className="flex ms-16"
          initial={{ opacity: 0 , x: 100}}
          animate={{ opacity: 1 , x: 0}}
          transition={{duration: 1, delay: .4}}>
            <h1 className="text-white  text-7xl leading-tight">Benoy</h1>
      </motion.div>

      <div className="grow"></div>

      <motion.div className="pb-10"
      initial={{ opacity: 0 , x: -100}}
      animate={{ opacity: 1 , x: 0}}
      transition={{duration: 1, delay: .75}}>
        <h2 className="text-white text-xl leading-tight ps-3">Computer Science and Economics</h2>
        <h2 className="text-black bg-white leading-tight ps-3">University of Illinois at Urbana-Champaign</h2>
      </motion.div>

      <motion.div className="flex justify-center pb-20"
      initial={{ opacity: 0 , y: 50}}
      animate={{ opacity: 1 , y: 0}}
      transition={{duration: 1, delay: 1}}>
        {/* <h2 className="text-black text-xl lg:text-2xl xl:text-4xl leading-tight">`</h2> */}
        <a className="group text-white text-2xl xl:text-4xl leading-tight cursor-pointer transition-all duration-500" href='https://docs.google.com/document/d/1XNasiMB2pQxMYg6iOU9rWfSm-mKl-WnGxtK1HE89a-E/edit'>My Resume<span><BsArrowUpRight className='inline'/></span><span className='block max-w-0 ms-[50%] group-hover:max-w-full group-hover:ms-0 transition-all duration-300 h-0.5 bg-white'></span></a>
      </motion.div>
    </div>

  )
}