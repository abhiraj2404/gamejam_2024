import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";

import { NeonGradientCard } from "../magicui/neon-gradient-card";

export default function ProjectCard({
  projectName,
  teamName,
  projectLogoUrl,
  projectDesc,
  teamMembers,
  techStack,
  projectUrl,
}: {
  id: string;
  projectName: string;
  teamName: string;
  projectLogoUrl: string;
  projectDesc: string;
  teamMembers: string;
  techStack: string;
  projectUrl: string;
}) {
  return (
    <NeonGradientCard 
      className="mx-2 md:mx-4 transform hover:scale-[1.02] transition-all duration-300"
    >
      <a href={projectUrl} target="_blank" className="block h-full">
        <Card className="w-[340px] h-full bg-black/40 backdrop-blur-md rounded-2xl">
          <div className="flex flex-col justify-between h-full">
            <div>
              <CardHeader className="flex items-center gap-3 p-4">
                <Avatar 
                  radius="lg"
                  size="lg" 
                  src={projectLogoUrl}
                  className="w-12 h-12"
                />
                <div className="flex flex-col flex-1">
                  <h4 className="font-bold text-lg text-white/90">
                    {projectName}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {teamName}
                  </p>
                </div>
              </CardHeader>
              
              <CardBody className="px-4 py-2">
                <p className="text-white/70 text-sm line-clamp-2 mb-4">
                  {projectDesc}
                </p>

                <div className="space-y-3">
                  <div>
                    <p className="text-white/50 text-xs font-medium mb-1.5">TEAM</p>
                    <div className="flex flex-wrap gap-1">
                      {teamMembers.split(',').map((member, i) => (
                        <span 
                          key={i} 
                          className="inline-block bg-white/5 text-white/80 rounded-full px-2 py-0.5 text-xs"
                        >
                          {member.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-white/50 text-xs font-medium mb-1.5">TECH</p>
                    <div className="flex flex-wrap gap-1">
                      {techStack.split(',').map((tech, i) => (
                        <span 
                          key={i} 
                          className="inline-block bg-primary/10 text-primary-400 rounded-full px-2 py-0.5 text-xs"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardBody>
            </div>

            <CardFooter className="px-4 py-4">
              <button className="w-full bg-primary/20 hover:bg-primary/30 text-primary-500 rounded-full py-2 text-sm font-medium transition-colors duration-200">
                View Project
              </button>
            </CardFooter>
          </div>
        </Card>
      </a>
    </NeonGradientCard>
  );
}
