import Accordion from "../components/Accordion"
import HomeMobile from "../pages/HomeMobile"
import { experiences } from "../assets/experiences.js"
import LayoutCards from "../components/LayoutCards"
import ProjectsMobile from "../pages/ProjectsMobile"
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";


export default function MobileView() {
  return (
    <div className="h-screen bg-black">
      <HomeMobile />

      <div className="bg-black h-auto py-10 border-b-white">
        <h1 className="text-white text-5xl flex justify-center w-screen font-thin">Experience</h1>
        <Accordion experiences={experiences}/>
      </div>

      <div className="bg-black h-auto pt-10 border-b-white border-b-2">
        <h1 className="text-white text-5xl flex justify-center w-screen font-thin">Projects</h1>
        <ProjectsMobile />
      </div>

      <div className="bg-black h-auto py-10 flex items-center justify-around">
        <a className="text-white text-3xl" href="https://github.com/Benoy515"><AiFillGithub /></a>
        <a className="text-white text-3xl" href="https://www.linkedin.com/in/abhay-benoy"><AiFillLinkedin /></a>
        <a className="text-white text-3xl" href="mailto:abhayb2@illinois.edu"><AiFillMail /></a>
      </div>

      
    </div>
  )
}