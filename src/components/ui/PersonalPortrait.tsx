import React from "react";
import Image from "next/image";
import styles from "./PersonalPortrait.module.css";

interface PersonalPortraitProps {
  src?: string;
  alt?: string;
  caption?: string;
  monochrome?: boolean;
  objectPosition?: string;
  priority?: boolean;
  className?: string;
}

export function PersonalPortrait({
  src,
  alt = "Keshav Sandhu — Product Engineer & Builder",
  caption = "KESHAV SANDHU // ENVIRONMENTAL PORTRAIT [STUDIO / NOIDA]",
  monochrome = false,
  objectPosition = "center center",
  priority = false,
  className = "",
}: PersonalPortraitProps) {
  return (
    <figure
      className={`${styles.figure} ${className}`}
      aria-label="Keshav Sandhu — Portrait Plate"
    >
      <div className={styles.frame}>
        {/* Corner registration crosshairs */}
        <span className={`${styles.crosshair} ${styles.tl}`}>+</span>
        <span className={`${styles.crosshair} ${styles.tr}`}>+</span>
        <span className={`${styles.crosshair} ${styles.bl}`}>+</span>
        <span className={`${styles.crosshair} ${styles.br}`}>+</span>

        {/* Signature Terracotta Registration Pip with tactile physical interaction */}
        <span
          className={styles.signaturePip}
          aria-hidden="true"
        />

        {src ? (
          <div className={styles.imageWrapper}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 440px"
              style={{ objectPosition }}
              className={`${styles.image} ${monochrome ? styles.monochrome : ""}`}
              priority={priority}
            />
          </div>
        ) : (
          <div className={styles.placeholderCanvas}>
            {/* Blueprint drafting guides */}
            <div className={styles.draftingGrid} />

            <div className={styles.placeholderContent}>
              <div className={styles.portraitTag}>
                <span className={styles.tagPrefix}>PLATE //</span>
                <span>PERSONAL PORTRAIT</span>
              </div>

              <div className={styles.placeholderTitle}>
                [ KESHAV SANDHU ]
              </div>

              <div className={styles.artDirectionNote}>
                <p className={styles.noteLine}>
                  <strong>INTENDED DIRECTION:</strong> Candid, environmental portrait.
                  Keshav working at a desk, reviewing an interface, or in natural ambient light.
                </p>
                <p className={styles.constraintLine}>
                  No corporate crossed-arms poses. No stock photography.
                </p>
              </div>

              <div className={styles.specRatio}>
                RATIO // 4:5 [EDITORIAL CROP]
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Editorial Caption Bar */}
      <figcaption className={styles.caption}>
        <span className={styles.captionPip}>●</span>
        <span className={styles.captionText}>{caption}</span>
      </figcaption>
    </figure>
  );
}
