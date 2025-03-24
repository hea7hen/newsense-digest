
import React from "react";
import { cn } from "@/lib/utils";

interface SentimentIndicatorProps {
  sentiment: "positive" | "negative" | "neutral";
  showLabel?: boolean;
  className?: string;
}

const SentimentIndicator = ({ 
  sentiment, 
  showLabel = true, 
  className 
}: SentimentIndicatorProps) => {
  const sentimentConfig = {
    positive: {
      label: "Positive",
      bgColor: "bg-positive/10",
      textColor: "text-positive",
      borderColor: "border-positive/20",
      dotColor: "bg-positive"
    },
    negative: {
      label: "Negative",
      bgColor: "bg-negative/10",
      textColor: "text-negative",
      borderColor: "border-negative/20",
      dotColor: "bg-negative"
    },
    neutral: {
      label: "Neutral",
      bgColor: "bg-neutral/10",
      textColor: "text-neutral-foreground",
      borderColor: "border-neutral/20",
      dotColor: "bg-neutral"
    }
  };

  const config = sentimentConfig[sentiment];
  
  return (
    <div 
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full border",
        config.bgColor,
        config.borderColor,
        config.textColor,
        "text-xs font-medium",
        className
      )}
    >
      <div className={cn("w-1.5 h-1.5 rounded-full mr-1.5", config.dotColor)} />
      {showLabel && config.label}
    </div>
  );
};

export default SentimentIndicator;
