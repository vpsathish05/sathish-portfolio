import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCapIcon } from "lucide-react";
import { education } from "@/data/portfolio";

export const EducationSection = () => (
  <section className="mb-16 relative z-10">
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCapIcon className="w-6 h-6" />
          Education Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{edu.year}</span>
                  <Badge variant="secondary">{edu.grade}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  </section>
);
