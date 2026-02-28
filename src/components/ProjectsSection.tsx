import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TechBadge } from "@/components/TechBadge";
import { BotIcon, CodeIcon, BriefcaseIcon } from "lucide-react";
import { projects } from "@/data/portfolio";

const projectIcons = {
  "ai-chatbot": BotIcon,
  "data-platform": CodeIcon,
  "ai-readiness": BriefcaseIcon
};

export const ProjectsSection = () => (
  <section className="mb-16 relative z-10">
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {projects.map((project) => {
            const IconComponent = projectIcons[project.id as keyof typeof projectIcons];
            return (
              <AccordionItem key={project.id} value={project.id}>
                <AccordionTrigger className="hover:bg-secondary transition-colors rounded-md px-4">
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-5 h-5" />
                    {project.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <CardDescription className="mb-2">{project.company}</CardDescription>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Role</h4>
                      <p>{project.role}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <TechBadge key={tech.name} name={tech.name} color={tech.color} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Description</h4>
                      <p>{project.description}</p>
                      {project.details.map((detail, index) => (
                        <p key={index} className="mt-2">{detail}</p>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
  </section>
);
