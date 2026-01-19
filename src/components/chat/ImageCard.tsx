import React from "react";
import styles from "./ChatInterface.module.css";
import { Message } from "@/types";
import { DownloadIcon, ImageIconComponent } from "@/components/ui/Icons";
import { APP_CONSTANTS } from "@/lib/utils/constants";

interface ImageCardProps {
  msg: Message;
}

export const ImageCard: React.FC<ImageCardProps> = ({ msg }) => (
  <>
    <div className={styles.imageWrapper}>
      <img
        src={msg.imageUrl}
        alt={msg.prompt}
        className={styles.generatedImage}
      />
    </div>
    <div className={styles.quoteFooter}>
      <span className={styles.imageLabel}>
        <ImageIconComponent size={16} />
        {APP_CONSTANTS.CONTENT_LABELS.IMAGE}
      </span>
      <a
        href={msg.imageUrl}
        download={APP_CONSTANTS.IMAGE.DOWNLOAD_FILENAME}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.copyButton}
        title={APP_CONSTANTS.BUTTONS.DOWNLOAD_IMAGE}
      >
        <DownloadIcon />
      </a>
    </div>
    {msg.prompt && (
      <p className={styles.interpretation}>
        {APP_CONSTANTS.IMAGE.PROMPT_PREFIX}
        {msg.prompt}
      </p>
    )}
  </>
);
