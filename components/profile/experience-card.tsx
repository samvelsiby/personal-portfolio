"use client";

import { Card } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function ExperienceCard({ title, company, period, description }: ExperienceCardProps) {
  return (
    <Card className="p-6 bg-card hover:bg-card/80 transition-colors">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{company}</p>
      <p className="text-sm text-muted-foreground">{period}</p>
      <p className="mt-2">{description}</p>
    </Card>
  );
}