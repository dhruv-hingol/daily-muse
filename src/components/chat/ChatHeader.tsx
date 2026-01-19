import React from "react";
import styles from "./ChatInterface.module.css";
import { SparklesIcon } from "@/components/ui/Icons";

interface ChatHeaderProps {
  title: string;
  subtitle: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ title, subtitle }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <SparklesIcon size={32} /> {title} <SparklesIcon size={32} />
    </h1>
    <p className={styles.subtitle}>{subtitle}</p>
  </header>
);
