import React from "react";
import styles from "./ChatInterface.module.css";
import { Message } from "@/types";
import { CopyIcon, NewsIcon } from "@/components/ui/Icons";
import { APP_CONSTANTS } from "@/lib/utils/constants";

interface NewsCardProps {
  msg: Message;
  onCopy: () => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({ msg, onCopy }) => (
  <>
    <p className={styles.newsHeadline}>{msg.headline}</p>
    <p className={styles.newsSummary}>{msg.summary}</p>
    <div className={styles.quoteFooter}>
      <span className={styles.newsLabel}>
        <NewsIcon size={16} />
        {APP_CONSTANTS.CONTENT_LABELS.NEWS}
      </span>
      <button
        className={styles.copyButton}
        onClick={onCopy}
        title={APP_CONSTANTS.BUTTONS.COPY_NEWS}
      >
        <CopyIcon />
      </button>
    </div>
    {msg.context && <p className={styles.interpretation}>{msg.context}</p>}
  </>
);
