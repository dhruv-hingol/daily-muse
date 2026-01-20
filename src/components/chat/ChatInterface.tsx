import styles from "./ChatInterface.module.css";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { SuggestionChips } from "./SuggestionChips";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useChatLogic } from "@/hooks/useChatLogic";
import { copyMessageToClipboard } from "@/lib/utils/clipboard";
import { GeminiIcon, TrashIcon } from "@/components/ui/Icons";
import { ContentType } from "@/types";

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
    clearChat,
  } = useChatLogic();

  const hasUserMessages = messages.some((msg) => msg.type === "user");

  const handleSuggestionClick = (suggestion: string, type: ContentType) => {
    setInputValue(suggestion);
    setSelectedType(type);
  };

  return (
    <div className={styles.container}>
      <div className={styles.greetingScreen}>
        <div className={styles.greetingHeader}>
          <div className={styles.greetingIconText}>
            <div>
              <GeminiIcon size={28} />
            </div>
            <div className={styles.greetingToggleContainer}>
              {hasUserMessages && (
                <button
                  className={styles.headerClearButton}
                  onClick={clearChat}
                  title="Clear chat"
                >
                  <TrashIcon size={18} />
                  <span>Clear chat</span>
                </button>
              )}
              <ThemeToggle />
            </div>
          </div>
          {!hasUserMessages && (
            <h1 className={styles.greetingHeading}>Where should we start?</h1>
          )}
        </div>

        {hasUserMessages && (
          <div className={styles.messagesContainer}>
            <MessageList
              messages={messages}
              isLoading={isLoading}
              messagesEndRef={messagesEndRef}
              onCopyMessage={copyMessageToClipboard}
            />
          </div>
        )}

        <div className={styles.greetingInputSection}>
          <ChatInput
            value={inputValue}
            selectedType={selectedType}
            isLoading={isLoading}
            onChange={setInputValue}
            onSubmit={handleSend}
          />
          <SuggestionChips onSuggestionClick={handleSuggestionClick} />
        </div>
      </div>
    </div>
  );
}
