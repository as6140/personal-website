import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import ProjectTableOfContents from "@/components/work/ProjectTableOfContents";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  // Get all projects
  const allProjects = getPosts(["src", "app", "projects"]);
  
  // Manual ordering - same as in Projects.tsx
  const projectOrder = [
    "ml4t-strategy-evaluation",
    "recession-forecast-app", 
    "solo-quant-trading-infrastructure",
    "peervest-p2p-lending-robo-advisor",
    "market-maven-ensemble-modeling",
    "european-soccer-hypothesis-testing",
    "king-county-housing-predictor"
  ];

  const sortedProjects = allProjects.sort((a, b) => {
    const aIndex = projectOrder.indexOf(a.slug);
    const bIndex = projectOrder.indexOf(b.slug);
    
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    
    return a.slug.localeCompare(b.slug);
  });

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <ProjectTableOfContents projects={sortedProjects} />
      <Projects />
    </Column>
  );
}
