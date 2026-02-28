"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TechBadge } from "@/components/TechBadge";
import { skills } from "@/data/portfolio";
import { SiCsharp, SiPython, SiJavascript, SiTypescript, SiAngular, SiNextdotjs, SiReact, SiNodedotjs, SiNestjs, SiDotnet, SiMicrosoftsqlserver, SiPostgresql, SiAmazonredshift, SiMicrosoftazure, SiOpenai, SiDatabricks, SiAmazon } from 'react-icons/si';
import { FaDatabase, FaBrain, FaRobot } from 'react-icons/fa';

const iconMap: Record<string, React.ElementType> = {
  "C#": SiCsharp,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "Angular": SiAngular,
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "NestJS": SiNestjs,
  "FastAPI": FaDatabase,
  ".NET Core": SiDotnet,
  "dbt": FaDatabase,
  "Azure Data Factory": SiMicrosoftazure,
  "SQL Server": SiMicrosoftsqlserver,
  "PostgreSQL": SiPostgresql,
  "Amazon Redshift": SiAmazonredshift,
  "LangChain": FaRobot,
  "OpenAI API": SiOpenai,
  "RAG": FaBrain,
  "Azure AI Foundry": SiMicrosoftazure,
  "AWS Bedrock": SiAmazon,
  "PaddleOCR": FaDatabase,
  "Vector Databases": FaDatabase,
  "Databricks": SiDatabricks
};

export const SkillsSection = () => (
  <section className="mb-16 relative z-10">
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="ai" className="w-full">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="space-y-2">
              <TabsList className="w-full">
                <TabsTrigger value="ai" className="w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  AI
                </TabsTrigger>
              </TabsList>
              <TabsList className="w-full">
                <TabsTrigger value="programming" className="w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Programming
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="space-y-2">
              <TabsList className="w-full">
                <TabsTrigger value="data" className="w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Data
                </TabsTrigger>
              </TabsList>
              <TabsList className="w-full">
                <TabsTrigger value="fullstack" className="w-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Full Stack
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <div className="mt-4 p-4 bg-secondary rounded-md">
            {Object.entries(skills).map(([category, skillList]) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-wrap gap-2"
                >
                  {skillList.map((skill) => (
                    <TechBadge
                      key={skill.name}
                      icon={iconMap[skill.name]}
                      name={skill.name}
                      color={skill.color}
                    />
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </CardContent>
    </Card>
  </section>
);
