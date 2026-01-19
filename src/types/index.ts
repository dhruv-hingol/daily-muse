export type ContentType = 'quote' | 'joke' | 'news' | 'image';

export interface Message {
    id: number;
    type: 'bot' | 'user';
    contentType?: ContentType;
    text?: string;
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

export interface ChatResponse {
    type?: ContentType;
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
    message?: string;
}
