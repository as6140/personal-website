import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "projects"]);

  // Manual ordering - define the order you want
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
    
    // If both projects are in the order list, sort by their position
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    
    // If only one is in the list, prioritize the one in the list
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    
    // If neither is in the list, sort by date (if available) or alphabetically
    const aDate = a.metadata.publishedAt || a.metadata.date || "";
    const bDate = b.metadata.publishedAt || b.metadata.date || "";
    
    if (aDate && bDate) {
      return new Date(bDate).getTime() - new Date(aDate).getTime();
    }
    
    return a.slug.localeCompare(b.slug);
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`projects/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
