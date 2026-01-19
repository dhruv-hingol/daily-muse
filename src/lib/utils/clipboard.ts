import { Message } from "@/types";

export const copyMessageToClipboard = (msg: Message): void => {
  let fullText = "";

  if (msg.contentType === "joke") {
    fullText = `${msg.joke}\n${msg.punchline}`;
  } else if (msg.contentType === "news") {
    fullText = `${msg.headline}\n${msg.summary}`;
  } else {
    fullText = `"${msg.quote}" - ${msg.author}`;
  }

  navigator.clipboard.writeText(fullText);
};
