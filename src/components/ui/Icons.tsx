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
