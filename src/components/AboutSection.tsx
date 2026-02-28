import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutMe } from "@/data/portfolio";

export const AboutSection = () => (
  <section className="mb-16 relative z-10">
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{aboutMe.summary}</p>
        <p>{aboutMe.details}</p>
      </CardContent>
    </Card>
  </section>
);
