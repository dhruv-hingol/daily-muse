import React from "react";
import styles from "./ChatInterface.module.css";
import { MessageIcon, LaughIcon, NewsIcon } from "@/components/ui/Icons";
import { APP_CONSTANTS } from "@/lib/utils/constants";
import { ContentType } from "@/types";

interface SuggestionChipsProps {
  onSuggestionClick: (suggestion: string, type: ContentType) => void;
}

const SUGGESTIONS = [
  {
    icon: MessageIcon,
    label: APP_CONSTANTS.TYPE_LABELS.quote,
    prompt: "Give me an inspiring quote",
    type: "quote" as ContentType,
  },
  {
    icon: LaughIcon,
    label: APP_CONSTANTS.TYPE_LABELS.joke,
    prompt: "Tell me a funny joke",
    type: "joke" as ContentType,
  },
  {
    icon: NewsIcon,
    label: APP_CONSTANTS.TYPE_LABELS.news,
    prompt: "Share latest news",
    type: "news" as ContentType,
  },
];

export const SuggestionChips: React.FC<SuggestionChipsProps> = ({
  onSuggestionClick,
}) => {
  return (
    <div className={styles.suggestionChips}>
      {SUGGESTIONS.map((suggestion) => {
        const Icon = suggestion.icon;
        return (
          <button
            key={suggestion.label}
            className={styles.suggestionChip}
            onClick={() =>
              onSuggestionClick(suggestion.prompt, suggestion.type)
            }
          >
            <Icon size={16} />
            <span>{suggestion.label}</span>
          </button>
        );
      })}
    </div>
  );
};
