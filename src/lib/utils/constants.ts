import { ContentType } from "@/types";

export const APP_CONSTANTS = {
  TITLE: "Your Daily Muse",
  TITLE_PREFIX: "✨ ",
  TITLE_SUFFIX: " ✨",
  SUBTITLE:
    "Let's discover inspiring quotes, share some laughs, and stay updated together! 🌟",

  PAGE_TITLE: "Daily Quotes, Jokes & News",
  PAGE_DESCRIPTION:
    "Your personal AI companion for daily inspiration, laughter, and latest news updates.",

  TYPE_LABELS: {
    quote: "Quote",
    joke: "Joke",
    news: "News",
    image: "Image",
  } as Record<ContentType, string>,

  PLACEHOLDERS: {
    quote: "What word inspires you today?",
    joke: "What should we laugh about?",
    news: "What topic interests you?",
    image: "Describe the image you'd like to see...",
  } as Record<ContentType, string>,

  BUTTONS: {
    SEND: "Send",
    SEND_LOADING: "Sending...",
    COPY_QUOTE: "Copy Quote",
    COPY_JOKE: "Copy Joke",
    COPY_NEWS: "Copy News",
    DOWNLOAD_IMAGE: "Download Image",
  },

  CONTENT_LABELS: {
    JOKE: "Joke",
    NEWS: "News",
    IMAGE: "Image",
  },

  DEFAULT_MESSAGE: {
    QUOTE:
      "Hey there! I'm here to brighten your day with inspiring quotes, fun jokes, or interesting news! 😊",
    AUTHOR: "Your AI Friend",
    INTERPRETATION:
      "Just pick what you're in the mood for below, share a topic, and let's get started!",
  },

  ERRORS: {
    GENERAL: "Oops! Something went wrong on my end. Let's try that again! 🔄",
    SYSTEM_AUTHOR: "System",
  },

  IMAGE: {
    DOWNLOAD_FILENAME: "ai-generated-image.png",
    PROMPT_PREFIX: "Prompt: ",
  },
};
