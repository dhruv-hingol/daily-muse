import { useState, useRef, useEffect, FormEvent } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Message, ContentType, ChatResponse } from "@/types";
import { APP_CONSTANTS } from "@/lib/utils/constants";

const DEFAULT_MESSAGE: Message = {
  id: 1,
  type: "bot",
  contentType: "quote",
  quote: APP_CONSTANTS.DEFAULT_MESSAGE.QUOTE,
  author: APP_CONSTANTS.DEFAULT_MESSAGE.AUTHOR,
  interpretation: APP_CONSTANTS.DEFAULT_MESSAGE.INTERPRETATION,
};

export const useChatLogic = () => {
  const [messages, setMessages] = useLocalStorageState<Message[]>(
    "chat-messages",
    {
      defaultValue: [DEFAULT_MESSAGE],
    },
  );

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedType, setSelectedType] = useLocalStorageState<ContentType>(
    "chat-selected-type",
    {
      defaultValue: "quote",
    },
  );

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setInputValue("");

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), type: "user", text: userText },
    ]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word: userText, type: selectedType }),
      });

      const data: ChatResponse = await response.json();

      setTimeout(() => {
        const botMessage: Message = {
          ...data,
          id: Date.now() + 1,
          type: "bot",
          contentType: data.type || selectedType,
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "bot",
          contentType: "quote",
          quote: APP_CONSTANTS.ERRORS.GENERAL,
          author: APP_CONSTANTS.ERRORS.SYSTEM_AUTHOR,
        },
      ]);
      setIsLoading(false);
    }
  };

  return {
    messages,
    inputValue,
    isLoading,
    selectedType,
    messagesEndRef,
    setInputValue,
    setSelectedType,
    handleSend,
  };
};
