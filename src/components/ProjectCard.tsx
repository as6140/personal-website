"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  // Extract slug from href for scroll tracking
  const slug = href.split('/').pop() || '';
  
  return (
    <Column fillWidth gap="m" data-project-slug={slug} style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}> {/* Increased width to 800px */}
      {/* Title and Description Above Photos */}
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s" // Restored from "xs"
        paddingBottom="16" // Restored from 4
        gap="l" // Restored from "xs"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-l"> {/* Restored from h3 and heading-strong-s */}
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16"> {/* Restored from 4 */}
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />} {/* Restored from "xs" */}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak"> {/* Restored from body-default-xs */}
                {description}
              </Text>
            )}
            <Flex gap="24" wrap> {/* Restored from 8 */}
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Learn More</Text> {/* Restored from body-default-xs */}
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text> {/* Restored from body-default-xs */}
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
      
      {/* Photos Below - Restored height but kept narrow width */}
      {images.length > 0 && (
        <div style={{ maxWidth: '800px' }}> {/* Updated to match new width */}
          <Carousel
            sizes="(max-width: 960px) 100vw, 800px" // Updated to match new width
            items={images.map((image) => ({
              slide: image,
              alt: title,
            }))}
          />
        </div>
      )}
    </Column>
  );
};
