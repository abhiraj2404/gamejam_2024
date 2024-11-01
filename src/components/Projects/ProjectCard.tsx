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
    <NeonGradientCard className="mx-2 md:mx-4 transform hover:scale-[1.04] transition-all duration-200">
      <a href={projectUrl} target="_blank">
        <Card className="max-w-[300px] md:max-w-[500px] p-3 mx-1">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className=" font-bold text-lg md:text-xl leading-none text-default-600">
                  {projectName}
                </h4>
                <h5 className="text-sm md:text-base tracking-tight text-default-400">
                  BY {teamName}
                </h5>
              </div>
            </div>
            <Avatar isBordered radius="full" size="md" src={projectLogoUrl} />
          </CardHeader>
          <CardBody className="px-3 py-0 text-sm text-default-400 overflow-y-hidden w-[90%] h-16">
            <p>{projectDesc}</p>
          </CardBody>
          <CardFooter className="justify-between mt-4">
            <div className="flex flex-col gap-1">
              <div className="font-semibold  text-xs md:text-small w-40 md:w-60 h-4 md:h-5 overflow-hidden text-gray-400">
                {teamMembers}
              </div>
              <p className=" text-default-400 text-xs md:text-small">
                TEAM MEMBERS
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xs md:text-small w-36 overflow-x-hidden overflow-y-hidden h-4 md:h-5 text-gray-400">
                {techStack}
              </p>
              <p className="text-default-400 text-xs md:text-small">
                TECH STACK
              </p>
            </div>
          </CardFooter>
        </Card>
      </a>
    </NeonGradientCard>
  );
}
