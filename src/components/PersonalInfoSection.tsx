"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, GithubIcon, MailIcon, PhoneIcon, Globe } from "lucide-react";
import { FaReddit, FaMedium } from "react-icons/fa";
import { TechBadge } from "@/components/TechBadge";
import { personalInfo } from "@/data/portfolio";
import { getAssetPath } from "@/lib/basePath";
import { SiPython, SiOpenai, SiMicrosoftazure, SiAmazon, SiDatabricks } from 'react-icons/si';
import { FaBrain, FaRobot } from 'react-icons/fa';

const mainTechStack = [
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiOpenai, name: "LLMs", color: "#412991" },
  { icon: FaBrain, name: "RAG", color: "#FF6B6B" },
  { icon: SiMicrosoftazure, name: "Azure AI Foundry", color: "#0089D6" },
  { icon: SiAmazon, name: "AWS Bedrock", color: "#FF9900" },
  { icon: SiDatabricks, name: "Databricks", color: "#FF3621" },
  { icon: FaRobot, name: "LangChain", color: "#1C3C3C" }
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
            <AvatarImage src={getAssetPath(personalInfo.avatar)} alt={personalInfo.name} className="object-cover" />
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
            <a href={personalInfo.reddit} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaReddit className="w-4 h-4" />
              </Button>
            </a>
            <a href={personalInfo.medium} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaMedium className="w-4 h-4" />
              </Button>
            </a>
            <a href={personalInfo.website} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Globe className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  </section>
);
