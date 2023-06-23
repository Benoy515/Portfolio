import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Accordion from "../components/Accordion";

export default function Experience() {
    let experiences = [
      {
        id: 0,
        title: "Stackend Solutions",
        subtitle: "Software Engineer, Part Time Job",
        date: "November 2022 - Present",
        description: [
          "Scraped over 100 websites and bypassed bot detection to gather data on potential leads for a client",
          "Utilized the BeautifulSoup and Selenium libraries in Jupyter Notebooks for scraping",
          "Developed a search tool in Metabase to filter sales leads based on type, location, and other fields"
        ]
      },
      {
        id: 1,
        title: "Quant @ Illinois",
        subtitle: "Head of Trading",
        date: "September 2022 - Present",
        description: [
          "Wrote sponsorship prospectus and helped bring in sponsors like IMC, Jump, Optiver, Citadel, DRW, and more",
          "Led a project to develop accurate price ranges for a company’s share price based on several other companies in the same sector. The project was written in Python and is currently being backtested.",
          "Worked on a project to predict the CPI as the basis for a volatility based options trading strategy"
        ]
      },
      {
        id: 2,
        title: "OTCR Consulting",
        subtitle: "Consultant",
        date: "September 2022 - May 2023",
        description: [
          "Consulted for a construction based startup to find potential clients and analyze the overall market",
          "Web scraped relevant data from various potential client’s websites to guide market research"
        ]
      },
    ]

    return (
      <div className="h-screen bg-black relative">
        <div className="flex">
          {/* <h1 className="text-white text-9xl">So much experience</h1>
          <h2 className="text-white text-6xl">I'm an expert in everything</h2> */}
          {/* <div className="bg-white rounded-full w-[40vh] h-[40vh] -translate-x-1/2 -translate-y-1/2 relative">
            <h1 className="text-black text-9xl absolute right-10 bottom-10">Ex</h1>
          </div>
          <div>
            <h1 className="text-white text-9xl col-span-2">perience</h1>
          </div> */}
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