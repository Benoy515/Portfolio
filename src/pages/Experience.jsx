import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Accordion from "../components/Accordion";
import {experiences} from "../assets/experiences"

export default function Experience() {
    
    return (
      <div className="h-screen bg-black relative">
        <div className="flex">
          <h1 className="text-black bg-white text-9xl py-5 px-7 rounded-br-xl">Experience</h1>
        </div>
        
        <div className="flex justify-center mt-10">
          <motion.div className="w-4/5"
          initial={{ opacity: 0 , x: -100}}
          animate={{ opacity: 1 , x: 0}}
          transition={{duration: 1, delay: .5}}>
            <Accordion experiences={experiences}/>
          </motion.div>
        </div>
        
      </div>
    );
  }