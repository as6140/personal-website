"use client";

import React, { useEffect, useState } from "react";
import { Column, Flex, Text } from "@once-ui-system/core";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}



const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = structure
        .filter((section) => section.display)
        .map((section) => section.title);
      
      let currentActive = null;

      // Find the section that is most prominently visible in the viewport
      let maxVisibility = 0;
      
      sections.forEach((sectionTitle) => {
        const element = document.getElementById(sectionTitle);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of this section is visible in the viewport
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(viewportHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          // Calculate visibility percentage
          const visibility = visibleHeight / Math.min(rect.height, viewportHeight);
          
          // Only consider sections that are at least partially visible
          if (rect.bottom > 0 && rect.top < viewportHeight && visibility > 0.1) {
            if (visibility > maxVisibility) {
              maxVisibility = visibility;
              currentActive = sectionTitle;
            }
          }
        }
      });

      // If no section is detected as active, check if we're at the bottom of the page
      if (!currentActive && sections.length > 0) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // If we're near the bottom of the page, make the last section active
        if (scrollTop + windowHeight >= documentHeight - 100) {
          currentActive = sections[sections.length - 1];
        } else {
          // Otherwise default to the first section
          currentActive = sections[0];
        }
      }

      setActiveSection(currentActive);
    };

    // Add a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
    }, 200); // Increased delay

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [structure]);

  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!about.tableOfContent.display) return null;

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
      {structure
        .filter((section) => section.display)
        .map((section, sectionIndex) => {
          const isActive = activeSection === section.title;
          
          return (
            <Column key={sectionIndex} gap="12">
              <Flex
                cursor="interactive"
                className={styles.hover}
                gap="8"
                vertical="center"
                onClick={() => scrollTo(section.title, 80)}
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
                  {section.title}
                </Text>
              </Flex>
              {about.tableOfContent.subItems && (
                <>
                  {section.items.map((item, itemIndex) => {
                    const isItemActive = activeSection === item;
                    
                    return (
                      <Flex
                        hide="l"
                        key={itemIndex}
                        style={{ 
                          cursor: "pointer",
                          opacity: isItemActive ? 1 : 0.6,
                          fontWeight: isItemActive ? "700" : "400",
                        }}
                        className={styles.hover}
                        gap="12"
                        paddingLeft="24"
                        vertical="center"
                        onClick={() => scrollTo(item, 80)}
                      >
                        <Flex 
                          height="1" 
                          minWidth="8" 
                          background={isItemActive ? "accent-strong" : "neutral-strong"}
                        />
                        <Text 
                          variant={isItemActive ? "body-strong-s" : "body-default-s"}
                          onBackground={isItemActive ? "accent-strong" : "neutral-strong"}
                          style={{
                            fontWeight: isItemActive ? "700" : "400",
                          }}
                        >
                          {item}
                        </Text>
                      </Flex>
                    );
                  })}
                </>
              )}
            </Column>
          );
        })}
    </Column>
  );
};

export default TableOfContents;
