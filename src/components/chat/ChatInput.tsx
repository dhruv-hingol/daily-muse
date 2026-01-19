import React, { FormEvent } from "react";
import { ContentType } from "@/types";
import styles from "./ChatInterface.module.css";
import { APP_CONSTANTS } from "@/lib/utils/constants";
import { SendIcon, SparklesIcon } from "@/components/ui/Icons";

interface ChatInputProps {
  value: string;
  selectedType: ContentType;
  isLoading: boolean;
  onChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  value,
  selectedType,
  isLoading,
  onChange,
  onSubmit,
}) => (
  <form className={styles.inputArea} onSubmit={onSubmit}>
    <input
      type="text"
      className={styles.input}
      placeholder={APP_CONSTANTS.PLACEHOLDERS[selectedType]}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={isLoading}
    />
    <button
      type="submit"
      className={styles.sendButton}
      disabled={isLoading || !value.trim()}
    >
      {isLoading ? (
        <>
          <SparklesIcon size={18} />
          <span>{APP_CONSTANTS.BUTTONS.SEND_LOADING}</span>
        </>
      ) : (
        <>
          <SendIcon size={18} />
          <span>{APP_CONSTANTS.BUTTONS.SEND}</span>
        </>
      )}
    </button>
  </form>
);
