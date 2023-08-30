import { cards } from "../assets/projects.jsx"
import { useState } from "react"

function ProjectCard({project, selected, num, handleClick}) {
  return (
  <>
  {selected ? (
  <div className="flex flex-col bg-white border-white border-2 p-3 my-2 rounded-xl" onClick={() => handleClick(-1)}>
    <h1 className="text-black text-xl mb-2">{project.title}</h1>
    <div className="text-sm text-center">
      {project.content}
    </div>
  </div>
  ) : (
  <div className="flex flex-col border-white border-2 p-3 my-2 rounded-xl" onClick={() => handleClick(num)}>
    <h1 className="text-white text-xl">{project.title}</h1>
    <div className="flex justify-around my-4">
      {project.stack.map((icon) => 
        <div className="text-white text-5xl">{icon}</div>
      )}
    </div>
  </div>)
  }
  </>
  )
}

export default function ProjectsMobile() {
  const [open, setOpen] = useState(0)
  return (
    <div className="flex flex-col px-4 py-5">
      {cards.map((project, i) => 
      <ProjectCard project={project} selected={i === open} num={i} handleClick={(n) => setOpen(n)}/>
      )}
    </div>
  )
}