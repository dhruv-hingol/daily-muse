import React from "react";
import { Message } from "@/types";
import { MessageItem } from "./MessageItem";
import { TypingIndicator } from "@/components/ui/TypingIndicator";
import styles from "./ChatInterface.module.css";

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  onCopyMessage: (msg: Message) => void;
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  isLoading,
  messagesEndRef,
  onCopyMessage,
}) => (
  <div className={styles.messages}>
    {messages.map((msg) => (
      <MessageItem key={msg.id} msg={msg} copyToClipboard={onCopyMessage} />
    ))}
    {isLoading && <TypingIndicator />}
    <div ref={messagesEndRef} />
  </div>
);
