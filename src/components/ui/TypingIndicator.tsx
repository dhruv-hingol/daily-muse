import React from "react";
import styles from "@/components/chat/ChatInterface.module.css";

export const TypingIndicator: React.FC = () => (
  <div className={styles.typing}>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
    <div className={styles.dot}></div>
  </div>
);
