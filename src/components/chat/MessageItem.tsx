import React from "react";
import styles from "./ChatInterface.module.css";
import { Message } from "@/types";
import { QuoteCard } from "./QuoteCard";
import { JokeCard } from "./JokeCard";
import { NewsCard } from "./NewsCard";
import { ImageCard } from "./ImageCard";

interface MessageItemProps {
  msg: Message;
  copyToClipboard: (msg: Message) => void;
}

export const MessageItem: React.FC<MessageItemProps> = ({
  msg,
  copyToClipboard,
}) => {
  const handleCopy = () => copyToClipboard(msg);

  const renderBotContent = () => {
    switch (msg.contentType) {
      case "joke":
        return <JokeCard msg={msg} onCopy={handleCopy} />;
      case "news":
        return <NewsCard msg={msg} onCopy={handleCopy} />;
      case "image":
        return <ImageCard msg={msg} />;
      default:
        return <QuoteCard msg={msg} onCopy={handleCopy} />;
    }
  };

  return (
    <div
      className={`${styles.message} ${msg.type === "user" ? styles.userMessage : styles.botMessage}`}
    >
      {msg.type === "user" ? (
        msg.text
      ) : (
        <div className={styles.quoteCard}>{renderBotContent()}</div>
      )}
    </div>
  );
};
