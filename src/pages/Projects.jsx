import LayoutCards from "../components/LayoutCards";
import { motion } from "framer-motion";

export default function Projects() {
    return (
      <div className="h-screen bg-black z-10 relative">
        <div className="flex">
          <h1 className="text-black bg-white text-7xl lg:text-8xl xl:text-9xl py-5 px-7 rounded-br-xl">Projects</h1>
        </div>
        <motion.div className=""
          initial={{ opacity: 0 , x: -25}}
          animate={{ opacity: 1 , x: 0}}
          transition={{duration: 1, delay: .5}}>
          <LayoutCards />
        </motion.div>
      </div>
    );
  }