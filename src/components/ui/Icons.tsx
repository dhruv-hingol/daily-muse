import React from "react";
import {
  Copy,
  Download,
  Send,
  Sparkles,
  MessageCircle,
  Laugh,
  Newspaper,
  Image as ImageIcon,
  CheckCheck,
  Trash2,
  Shield,
  Flame,
  Pencil,
  Lightbulb,
  BookOpen,
} from "lucide-react";

interface IconProps {
  className?: string;
  size?: number;
}

export const CopyIcon: React.FC<IconProps> = ({ className, size = 16 }) => (
  <Copy className={className} size={size} />
);

export const DownloadIcon: React.FC<IconProps> = ({ className, size = 16 }) => (
  <Download className={className} size={size} />
);

export const SendIcon: React.FC<IconProps> = ({ className, size = 20 }) => (
  <Send className={className} size={size} />
);

export const SparklesIcon: React.FC<IconProps> = ({ className, size = 18 }) => (
  <Sparkles className={className} size={size} />
);

export const MessageIcon: React.FC<IconProps> = ({ className, size = 18 }) => (
  <MessageCircle className={className} size={size} />
);

export const LaughIcon: React.FC<IconProps> = ({ className, size = 18 }) => (
  <Laugh className={className} size={size} />
);

export const NewsIcon: React.FC<IconProps> = ({ className, size = 18 }) => (
  <Newspaper className={className} size={size} />
);

export const ImageIconComponent: React.FC<IconProps> = ({
  className,
  size = 18,
}) => <ImageIcon className={className} size={size} />;

export const CheckIcon: React.FC<IconProps> = ({ className, size = 16 }) => (
  <CheckCheck className={className} size={size} />
);

export const TrashIcon: React.FC<IconProps> = ({ className, size = 18 }) => (
  <Trash2 className={className} size={size} />
);

export const ShieldIcon: React.FC<IconProps> = ({ className, size = 18 }) => (
  <Shield className={className} size={size} />
);

export const FlameIcon: React.FC<IconProps> = ({ className, size = 18 }) => (
  <Flame className={className} size={size} />
);

export const PencilIcon: React.FC<IconProps> = ({ className, size = 18 }) => (
  <Pencil className={className} size={size} />
);

export const LightbulbIcon: React.FC<IconProps> = ({
  className,
  size = 18,
}) => <Lightbulb className={className} size={size} />;

export const BookOpenIcon: React.FC<IconProps> = ({ className, size = 18 }) => (
  <BookOpen className={className} size={size} />
);

// Gemini logo icon (colorful diamond shape)
export const GeminiIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 2L4 7L12 12L20 7L12 2Z" fill="url(#gradient1)" />
    <path d="M12 12L4 17L12 22L20 17L12 12Z" fill="url(#gradient2)" />
    <defs>
      <linearGradient id="gradient1" x1="4" y1="2" x2="20" y2="12">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="50%" stopColor="#9C27B0" />
        <stop offset="100%" stopColor="#F4B400" />
      </linearGradient>
      <linearGradient id="gradient2" x1="4" y1="12" x2="20" y2="22">
        <stop offset="0%" stopColor="#0F9D58" />
        <stop offset="50%" stopColor="#4285F4" />
        <stop offset="100%" stopColor="#DB4437" />
      </linearGradient>
    </defs>
  </svg>
);
