import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timeline, TimelineItem, TimelineIcon, TimelineConnector, TimelineContent } from "@/components/ui/timeline";
import { ChevronDownIcon } from "lucide-react";
import { experiences } from "@/data/portfolio";

export const ExperienceSection = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  return (
    <section className="mb-16 relative z-10">
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <Timeline>
            {experiences.slice(0, showAllExperiences ? experiences.length : 3).map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineIcon />
                {index !== experiences.length - 1 && <TimelineConnector />}
                <TimelineContent>
                  <h3 className="font-semibold">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company} ({exp.date})</p>
                  <p className="mt-2">{exp.description}</p>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
          {!showAllExperiences && (
            <Button 
              variant="outline" 
              className="mt-4 w-full hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setShowAllExperiences(true)}
            >
              Show More <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardContent>
      </Card>
    </section>
  );
};
