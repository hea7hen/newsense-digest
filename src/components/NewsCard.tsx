
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import SentimentIndicator from "./SentimentIndicator";
import { Bookmark, BookmarkCheck, ExternalLink, Share2 } from "lucide-react";

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  author?: string;
  summary: string;
  url: string;
  publishedAt: string;
  sentiment: "positive" | "negative" | "neutral";
  sentimentExplanation?: string;
  imageUrl?: string;
}

interface NewsCardProps {
  news: NewsItem;
  className?: string;
}

const NewsCard = ({ news, className }: NewsCardProps) => {
  const [saved, setSaved] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  const toggleSaved = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved(!saved);
  };
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: news.summary,
        url: news.url,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(news.url);
      // Ideally show a toast message here
      console.log("URL copied to clipboard");
    }
  };

  const formattedDate = new Date(news.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div 
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer",
        expanded ? "lg:row-span-2" : "",
        className
      )}
      onClick={toggleExpanded}
    >
      <div className="absolute top-3 right-3 z-10 flex items-center space-x-2">
        <button
          onClick={toggleSaved}
          className="p-1.5 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-sm text-primary/80 hover:text-primary transition-all-200"
          aria-label={saved ? "Unsave article" : "Save article"}
        >
          {saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
        </button>
        
        <button
          onClick={handleShare}
          className="p-1.5 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-sm text-primary/80 hover:text-primary transition-all-200"
          aria-label="Share article"
        >
          <Share2 size={16} />
        </button>
      </div>
      
      {news.imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={news.imageUrl} 
            alt={news.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      )}
      
      <div className="flex-1 p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">{news.source}</span>
          <span className="text-sm text-muted-foreground">{formattedDate}</span>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 text-balance leading-tight">{news.title}</h3>
        
        <SentimentIndicator sentiment={news.sentiment} className="mb-3" />
        
        <p className={cn(
          "text-muted-foreground text-sm",
          expanded ? "line-clamp-none" : "line-clamp-3"
        )}>
          {news.summary}
        </p>
        
        {news.sentimentExplanation && expanded && (
          <div className="mt-4 p-3 bg-secondary/50 rounded-lg border border-border/50">
            <h4 className="text-sm font-medium mb-1">Sentiment Analysis</h4>
            <p className="text-sm text-muted-foreground">{news.sentimentExplanation}</p>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-border/50 bg-card/50">
        <a 
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          Read original article <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
