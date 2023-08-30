import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {BiDownArrow} from 'react-icons/bi'

const AccordionItem = ({ id, title, subtitle, date, description, expanded, setExpanded}) => {
  // const [expanded, setExpanded] = useState(false);
  const isOpen = id === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        initial={true}
        animate={{ backgroundColor: isOpen ? "white" : "black", color: isOpen ? "black" : "white", borderColor: isOpen ? "black" : "white" }}
        onClick={() => setExpanded(isOpen ? false : id)}
        className="h-12 flex items-center justify-center border border-x-0 border-t-0 text-white text-2xl cursor-pointer transition-colors duration-200"
        transition={{ duration: 0.8}}
      >
        <div className="flex justify-between w-full mx-3">
          <div>
           <h1 className="text-md md:text-xl lg:text-2xl xl:text-3xl inline">{title}</h1>
           <h2 className="text-xs md:text-sm lg:text-base xl:text-lg inline ms-3 italic">{subtitle}</h2>
           
          </div>
          <div className="flex">
            <div className="hidden md:flex flex-col justify-end">
              <h2 className="text-xs md:text-sm lg:text-base xl:text-lg ">{date}</h2>
            </div>
            <div className="ms-3 flex flex-col justify-end text-base lg:text-xl xl:text-2xl">
              <BiDownArrow className={isOpen ? "rotate-0 transition-transform duration-[600ms]" : "-rotate-90 transition-transform duration-[600ms]"}/>
            </div>
          </div>

          
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: .8, ease: [0.5, 0.1, 0.1, 0.98] }}
          >
            <div className="text-white ms-10">
              <ul className="">
                {description.map((item) => (
                  
                  <li className="lg:text-lg xl:text-xl leading-relaxed"> - {item}</li>
                ))}
                {/* <li className="text-xl leading-relaxed"> - Scraped over 100 websites and bypassed bot detection to gather data on potential leads for a client</li>
                <li className="text-xl leading-relaxed"> - Developed a web application using React and Node.js to display the data gathered from the web scraper</li>
                <li className="text-xl leading-relaxed"> - Created a REST API using Node.js and Express to handle requests from the web application</li> */}

              </ul>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default function Accordion({ experiences }) {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(0);
  const accordionIds = [0, 1, 2, 3];

  return experiences.map((exp) => (
    <div className="my-5">
      <AccordionItem id={exp.id} title={exp.title} subtitle={exp.subtitle} date={exp.date} description={exp.description} expanded={expanded} setExpanded={setExpanded} />
    </div>
  ));
};


