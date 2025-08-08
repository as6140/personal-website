"use client";

import React, { useEffect, useState } from "react";
import { Column, Flex, Text } from "@once-ui-system/core";

interface Project {
  slug: string;
  metadata: {
    title: string;
  };
}

interface ProjectTableOfContentsProps {
  currentSlug?: string;
  projects: Project[];
}

// Shortened titles for the tracker
const getShortTitle = (fullTitle: string): string => {
  const shortTitles: { [key: string]: string } = {
    "Deep Reinforcement Learning (Q-Learning and Dyna-Q) & Parameter Optimization for Trading JPM Stock During the Great Recession": "Reinforcement Learning for Trading During Recessions",
    "Probability of Recession Forecast Dashboard: A Streamlit App to Cut Through the Noise": "Probability of Recession Forecast Dashboard",
    "(Work In Progress) Personal Quantitative Trading ML Strategy Development & Execution Infrastructure": "[WIP] Personal Quant Trading ML Infrastructure",
    "PeerVest: P2P Lending Robo-Advisor": "P2P Lending Robo-Advisor",
    "Market Maven: Ensemble Modeling and AutoML for MagSeven Stock Insights": "Ensemble Modeling & AutoML for MagSeven Stocks",
    "European Soccer Hypothesis Testing: National League Differentials & Formation Face-Off (4-4-2 vs. 4-3-3)": "European Soccer League & Tactic Experiments",
    "King County Housing Price Predictor: Finding Deals & Value-Add Opps via Multivariate Linear Regression": "Housing Price Predictor for Deal-Finding & Value-Add"
  };
  
  return shortTitles[fullTitle] || fullTitle;
};

const ProjectTableOfContents: React.FC<ProjectTableOfContentsProps> = ({ currentSlug, projects }) => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const projectCards = document.querySelectorAll('[data-project-slug]');
      let currentActive = null;

      projectCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const slug = card.getAttribute('data-project-slug');
        
        // Consider a project "active" if it's in the top portion of the viewport
        if (rect.top <= 200 && rect.bottom >= 200) {
          currentActive = slug;
        }
      });

      setActiveProject(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (slug: string, offset: number = 80) => {
    const element = document.querySelector(`[data-project-slug="${slug}"]`);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Column
      left="0"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      position="fixed"
      paddingLeft="24"
      gap="32"
      hide="m"
    >
      <Column gap="12">
        {projects.map((project, index) => {
          const isActive = activeProject === project.slug;
          const shortTitle = getShortTitle(project.metadata.title);
          
          return (
            <Flex
              key={project.slug}
              cursor="interactive"
              gap="8"
              vertical="center"
              onClick={() => scrollTo(project.slug)}
              style={{
                opacity: isActive ? 1 : 0.6,
                fontWeight: isActive ? "700" : "400",
              }}
            >
              <Flex 
                height="1" 
                minWidth="16" 
                background={isActive ? "accent-strong" : "neutral-strong"}
              />
                              <Text 
                  variant={isActive ? "body-strong-s" : "body-default-s"}
                  onBackground={isActive ? "accent-strong" : "neutral-strong"}
                  style={{
                    fontWeight: isActive ? "700" : "400",
                    color: isActive ? "var(--text-accent-strong)" : "var(--text-neutral-strong)",
                  }}
                >
                  {shortTitle}
                </Text>
            </Flex>
          );
        })}
      </Column>
    </Column>
  );
};

export default ProjectTableOfContents; 