import React from "react";
import styles from "./ChatInterface.module.css";
import { Message } from "@/types";
import { CopyIcon } from "@/components/ui/Icons";
import { APP_CONSTANTS } from "@/lib/utils/constants";

interface QuoteCardProps {
  msg: Message;
  onCopy: () => void;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ msg, onCopy }) => (
  <>
    <p className={styles.quoteText}>"{msg.quote}"</p>
    <div className={styles.quoteFooter}>
      <span className={styles.author}>— {msg.author}</span>
      <button
        className={styles.copyButton}
        onClick={onCopy}
        title={APP_CONSTANTS.BUTTONS.COPY_QUOTE}
      >
        <CopyIcon />
      </button>
    </div>
    {msg.interpretation && (
      <p className={styles.interpretation}>{msg.interpretation}</p>
    )}
  </>
);
