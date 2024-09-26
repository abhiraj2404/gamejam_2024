import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import Marquee from '../magicui/marquee'
import { baseUrl, projectsEndpoint } from "../../../api";


function Projects() {
    const [projectData, setProjectData] = useState([]);
  
    useEffect(() => {
      // Fetch the JSON file from the internet
      fetch(baseUrl + projectsEndpoint)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProjectData(data);
        })
        .catch((error) => console.error("Error fetching project data:", error));
    }, []);

  return (
    <div className='py-20'>
        <h1 className='text-5xl text-white font-bold text-center'>Global GameJam 2023 Projects</h1>

        <div className='flex py-16 mx-10 gap-12 relative'>
        <Marquee pauseOnHover className="[--duration:80s]" repeat={10}>
           {projectData.map((project:any) => {
            console.log(project.projectName)
            return (
              <ProjectCard key={project.id} // Assuming each project has a unique identifier
              id={project.id}
              projectName={project.projectName}
              teamName={project.teamName}
              projectLogoUrl={project.projectLogoUrl}
              projectDesc={project.projectDesc}
              teamMembers={project.teamMembers.join(", ")}
              techStack={project.techStack.join(", ")}
              projectUrl={project.projectUrl}/>
            )

           } )}
        
       
        </Marquee>
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-black "></div> */}
      {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-black "></div> */}
        </div>
        </div>
       
  )
}

export default Projects