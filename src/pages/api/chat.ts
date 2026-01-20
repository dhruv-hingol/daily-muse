import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

type ContentType = "quote" | "joke" | "news" | "image";

interface ChatRequest {
  word: string;
  type?: ContentType;
}

interface ChatResponse {
  type?: ContentType;
  message?: string;
  quote?: string;
  author?: string;
  interpretation?: string;
  joke?: string;
  punchline?: string;
  explanation?: string;
  headline?: string;
  summary?: string;
  context?: string;
  imageUrl?: string;
  prompt?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { word, type = "quote" } = req.body as ChatRequest;

  if (!word) {
    return res.status(400).json({ message: "Word is required" });
  }

  try {
    if (
      !process.env.OPENROUTER_API_KEY ||
      process.env.OPENROUTER_API_KEY.includes("your_api_key_here")
    ) {
      throw new Error("Missing or invalid OpenAI API Key");
    }

    if (type === "image") {
      const promptCompletion = await openai.chat.completions.create({
        model: "openai/gpt-5-image-mini",
        messages: [
          {
            role: "system",
            content:
              "You are an expert image prompt engineer. Convert the user's word or simple topic into a highly detailed, artistic, and visually stunning image prompt for DALL-E 3. Focus on lighting, style, and composition. Respond ONLY with the refined prompt.",
          },
          {
            role: "user",
            content: word,
          },
        ],
        max_tokens: 100,
      });

      const refinedPrompt =
        promptCompletion.choices[0].message.content?.trim() || word;

      try {
        const imageCompletion = await openai.chat.completions.create({
          model: "openai/gpt-5-image-mini",
          messages: [
            {
              role: "user",
              content: `Generate a high-quality image based on this detailed prompt: ${refinedPrompt}`,
            },
          ],
          max_tokens: 2000,
        });

        const content = imageCompletion.choices[0].message.content || "";

        const urlMatch = content.match(/https?:\/\/\S+/);
        const imageUrl = urlMatch ? urlMatch[0].replace(/[()]/g, "") : null;

        if (imageUrl) {
          return res.status(200).json({
            type: "image",
            imageUrl,
            prompt: refinedPrompt,
          });
        } else {
          const fs = require("fs");
          fs.appendFileSync(
            "error-log.txt",
            `\n[${new Date().toISOString()}] NO_URL_FOUND. Content: ${content}\n`,
          );
          throw new Error("No image URL found in the model response.");
        }
      } catch (imageError: any) {
        const fs = require("fs");
        const logMsg = `\n[${new Date().toISOString()}] IMAGE_GENERATION_ERROR: ${imageError.message}\nStack: ${imageError.stack}\n`;
        fs.appendFileSync("error-log.txt", logMsg);
        throw imageError;
      }
    }

    const systemPrompts: Record<Exclude<ContentType, "image">, string> = {
      quote: `You are a wise and insightful quote bot. When the user provides a word, respond with a single, relevant, and profound quote that relates to that word. Can be famous or obscure, but must be high quality.
                    
                    Return the response in strictly valid JSON format with the following structure:
                    {
                      "quote": "The actual quote text",
                      "author": "The author name",
                      "interpretation": "A one-sentence deep insight about why this quote is meaningful for the given word."
                    }`,

      joke: `You are a witty and clever joke bot. When the user provides a topic, create a clean, funny, and original joke related to that topic. The joke should be appropriate for all audiences.
                    
                    Return the response in strictly valid JSON format with the following structure:
                    {
                      "joke": "The joke setup",
                      "punchline": "The punchline",
                      "explanation": "A brief one-sentence explanation of why this joke is funny or clever."
                    }`,

      news: `You are an informative news bot. When the user provides a topic, generate a realistic and relevant news summary about that topic. Focus on recent trends, developments, or interesting facts related to the topic.
                    
                    Return the response in strictly valid JSON format with the following structure:
                    {
                      "headline": "An engaging news headline",
                      "summary": "A 2-3 sentence summary of the news",
                      "context": "One sentence providing additional context or why this matters."
                    }`,
    };

    const userPrompts: Record<Exclude<ContentType, "image">, string> = {
      quote: `Word: ${word}`,
      joke: `Topic: ${word}`,
      news: `Topic: ${word}`,
    };

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-5.2",
      messages: [
        {
          role: "system",
          content:
            systemPrompts[type as Exclude<ContentType, "image">] ||
            systemPrompts.quote,
        },
        {
          role: "user",
          content:
            userPrompts[type as Exclude<ContentType, "image">] ||
            userPrompts.quote,
        },
      ],
      temperature: 0.8,
      max_tokens: 250,
    });

    const text = completion.choices[0].message.content?.trim() || "";

    let responseData: any;
    try {
      responseData = JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse JSON:", text);
      if (type === "joke") {
        responseData = {
          joke: text,
          punchline: "",
          explanation: "A witty response.",
        };
      } else if (type === "news") {
        responseData = { headline: "News Update", summary: text, context: "" };
      } else {
        responseData = {
          quote: text,
          author: "Unknown",
          interpretation: "Insightful words.",
        };
      }
    }

    res.status(200).json({ ...responseData, type });
  } catch (error: any) {
    console.error("OpenAI API Error:", error.message);
    const message =
      error.code === "insufficient_quota"
        ? "You exceeded your current quota. Please check your OpenAI billing."
        : `Failed to fetch ${type}.`;
    res.status(500).json({ message, type });
  }
}
