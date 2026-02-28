import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, GithubIcon, MailIcon, PhoneIcon } from "lucide-react";
import { TechBadge } from "@/components/TechBadge";
import { personalInfo } from "@/data/portfolio";
import { SiNextdotjs, SiNodedotjs, SiAngular, SiCsharp, SiMicrosoftazure } from 'react-icons/si';
import { FaDatabase, FaAws } from 'react-icons/fa';

const mainTechStack = [
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiAngular, name: "Angular", color: "#DD0031" },
  { icon: SiCsharp, name: "C#", color: "#239120" },
  { icon: FaDatabase, name: "dbt", color: "#FF694B" },
  { icon: SiMicrosoftazure, name: "ADF", color: "#0089D6" },
  { icon: FaAws, name: "AWS", color: "#FF9900" }
];

export const PersonalInfoSection = () => (
  <section className="mb-16 relative z-10">
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="flex flex-col md:flex-row items-center p-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Avatar className="w-40 h-40 mb-4 md:mb-0 md:mr-6">
            <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} className="object-cover" />
            <AvatarFallback>SK</AvatarFallback>
          </Avatar>
        </motion.div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">{personalInfo.title}</h2>
          <p className="text-muted-foreground mb-4">{personalInfo.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {mainTechStack.map((tech) => (
              <TechBadge key={tech.name} icon={tech.icon} name={tech.name} color={tech.color} />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <MailIcon className="w-4 h-4" />
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <PhoneIcon className="w-4 h-4" />
              {personalInfo.phone}
            </a>
          </div>
          <div className="flex gap-4 mt-4">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </Button>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <GithubIcon className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  </section>
);
