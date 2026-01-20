import React from "react";
import { ContentType } from "@/types";
import styles from "./ChatInterface.module.css";
import { APP_CONSTANTS } from "@/lib/utils/constants";
import {
  MessageIcon,
  LaughIcon,
  NewsIcon,
  TrashIcon,
} from "@/components/ui/Icons";

interface TypeSelectorProps {
  selectedType: ContentType;
  onTypeChange: (type: ContentType) => void;
  onClearChat: () => void;
}

const TYPE_OPTIONS = [
  {
    value: "quote" as ContentType,
    label: APP_CONSTANTS.TYPE_LABELS.quote,
    icon: MessageIcon,
  },
  {
    value: "joke" as ContentType,
    label: APP_CONSTANTS.TYPE_LABELS.joke,
    icon: LaughIcon,
  },
  {
    value: "news" as ContentType,
    label: APP_CONSTANTS.TYPE_LABELS.news,
    icon: NewsIcon,
  },
];

export const TypeSelector: React.FC<TypeSelectorProps> = ({
  selectedType,
  onTypeChange,
  onClearChat,
}) => (
  <div className={styles.typeSelector}>
    {TYPE_OPTIONS.map((option) => {
      const Icon = option.icon;
      return (
        <button
          key={option.value}
          className={`${styles.typeButton} ${selectedType === option.value ? styles.active : ""}`}
          onClick={() => onTypeChange(option.value)}
        >
          <Icon size={18} />
          <span>{option.label}</span>
        </button>
      );
    })}
    <button
      className={`${styles.typeButton} ${styles.clearButton}`}
      onClick={onClearChat}
      title="Clear chat"
    >
      <TrashIcon size={18} />
      <span>Clear</span>
    </button>
  </div>
);
