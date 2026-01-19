import React from "react";
import styles from "./ChatInterface.module.css";
import { Message } from "@/types";
import { CopyIcon, LaughIcon } from "@/components/ui/Icons";
import { APP_CONSTANTS } from "@/lib/utils/constants";

interface JokeCardProps {
  msg: Message;
  onCopy: () => void;
}

export const JokeCard: React.FC<JokeCardProps> = ({ msg, onCopy }) => (
  <>
    <p className={styles.jokeText}>{msg.joke}</p>
    {msg.punchline && <p className={styles.punchline}>{msg.punchline}</p>}
    <div className={styles.quoteFooter}>
      <span className={styles.jokeLabel}>
        <LaughIcon size={16} />
        {APP_CONSTANTS.CONTENT_LABELS.JOKE}
      </span>
      <button
        className={styles.copyButton}
        onClick={onCopy}
        title={APP_CONSTANTS.BUTTONS.COPY_JOKE}
      >
        <CopyIcon />
      </button>
    </div>
    {msg.explanation && (
      <p className={styles.interpretation}>{msg.explanation}</p>
    )}
  </>
);
