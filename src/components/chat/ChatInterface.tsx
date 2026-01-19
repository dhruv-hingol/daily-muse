import React from "react";
import styles from "./ChatInterface.module.css";
import { ChatHeader } from "./ChatHeader";
import { TypeSelector } from "./TypeSelector";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useChatLogic } from "@/hooks/useChatLogic";
import { copyMessageToClipboard } from "@/lib/utils/clipboard";
import { APP_CONSTANTS } from "@/lib/utils/constants";

export default function ChatInterface() {
  const {
    messages,
    inputValue,
    isLoading,
    selectedType,
    messagesEndRef,
    setInputValue,
    setSelectedType,
    handleSend,
  } = useChatLogic();

  return (
    <div className={styles.container}>
      <ThemeToggle />

      <ChatHeader
        title={APP_CONSTANTS.TITLE}
        subtitle={APP_CONSTANTS.SUBTITLE}
      />

      <div className={styles.chatBox}>
        <TypeSelector
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />

        <MessageList
          messages={messages}
          isLoading={isLoading}
          messagesEndRef={messagesEndRef}
          onCopyMessage={copyMessageToClipboard}
        />

        <ChatInput
          value={inputValue}
          selectedType={selectedType}
          isLoading={isLoading}
          onChange={setInputValue}
          onSubmit={handleSend}
        />
      </div>
    </div>
  );
}
