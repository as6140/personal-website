"use client";

import Masonry from "react-masonry-css";
import { Media, Text, Column } from "@once-ui-system/core";
import styles from "./Gallery.module.scss";
import { gallery } from "@/resources";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 2,
    720: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {gallery.images.map((image, index) => (
        <div key={index} className={styles.gridItemContainer}>
          <Media
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
            src={image.src}
            alt={image.alt}
            className={styles.gridItem}
          />
          {image.caption && (
            <Text 
              variant="body-default-xs" 
              onBackground="neutral-weak"
              style={{ 
                textAlign: 'center',
                fontStyle: 'italic',
                padding: '4px 8px 0 8px',
                margin: 0,
                lineHeight: '1.2'
              }}
            >
              {image.caption}
            </Text>
          )}
        </div>
      ))}
    </Masonry>
  );
}
