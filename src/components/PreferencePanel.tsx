
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X, Plus } from "lucide-react";

interface PreferencePanelProps {
  className?: string;
}

const PreferencePanel = ({ className }: PreferencePanelProps) => {
  const [topics, setTopics] = useState<string[]>([
    "Technology", "Business", "Science", "Health"
  ]);
  const [newTopic, setNewTopic] = useState("");
  
  const [sources, setSources] = useState<string[]>([
    "The New York Times", "Reuters", "BBC", "The Guardian"
  ]);
  const [newSource, setNewSource] = useState("");
  
  const [keywords, setKeywords] = useState<string[]>([
    "AI", "Climate", "Innovation"
  ]);
  const [newKeyword, setNewKeyword] = useState("");
  
  const addTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTopic.trim() && !topics.includes(newTopic.trim())) {
      setTopics([...topics, newTopic.trim()]);
      setNewTopic("");
    }
  };
  
  const removeTopic = (topic: string) => {
    setTopics(topics.filter(t => t !== topic));
  };
  
  const addSource = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSource.trim() && !sources.includes(newSource.trim())) {
      setSources([...sources, newSource.trim()]);
      setNewSource("");
    }
  };
  
  const removeSource = (source: string) => {
    setSources(sources.filter(s => s !== source));
  };
  
  const addKeyword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword("");
    }
  };
  
  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };
  
  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Topics of Interest</h3>
        <p className="text-muted-foreground">
          Select topics you're interested in to personalize your news digest.
        </p>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {topics.map(topic => (
            <Badge 
              key={topic}
              variant="secondary" 
              className="px-3 py-1 text-sm bg-secondary/80 hover:bg-secondary group transition-all-200"
            >
              {topic}
              <button 
                onClick={() => removeTopic(topic)}
                className="ml-1.5 opacity-60 group-hover:opacity-100 hover:text-negative transition-all-200"
              >
                <X size={14} />
              </button>
            </Badge>
          ))}
        </div>
        
        <form onSubmit={addTopic} className="flex items-center gap-2 mt-2">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Add a topic..."
              value={newTopic}
              onChange={(e) => setNewTopic(e.target.value)}
              className="h-9"
            />
          </div>
          <Button type="submit" size="sm" variant="outline" className="h-9">
            <Plus size={16} className="mr-1" /> Add
          </Button>
        </form>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Preferred Sources</h3>
        <p className="text-muted-foreground">
          Add news sources you trust for more relevant results.
        </p>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {sources.map(source => (
            <Badge 
              key={source}
              variant="secondary" 
              className="px-3 py-1 text-sm bg-secondary/80 hover:bg-secondary group transition-all-200"
            >
              {source}
              <button 
                onClick={() => removeSource(source)}
                className="ml-1.5 opacity-60 group-hover:opacity-100 hover:text-negative transition-all-200"
              >
                <X size={14} />
              </button>
            </Badge>
          ))}
        </div>
        
        <form onSubmit={addSource} className="flex items-center gap-2 mt-2">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Add a source..."
              value={newSource}
              onChange={(e) => setNewSource(e.target.value)}
              className="h-9"
            />
          </div>
          <Button type="submit" size="sm" variant="outline" className="h-9">
            <Plus size={16} className="mr-1" /> Add
          </Button>
        </form>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Keywords</h3>
        <p className="text-muted-foreground">
          Track specific terms or phrases that interest you.
        </p>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {keywords.map(keyword => (
            <Badge 
              key={keyword}
              variant="secondary" 
              className="px-3 py-1 text-sm bg-secondary/80 hover:bg-secondary group transition-all-200"
            >
              {keyword}
              <button 
                onClick={() => removeKeyword(keyword)}
                className="ml-1.5 opacity-60 group-hover:opacity-100 hover:text-negative transition-all-200"
              >
                <X size={14} />
              </button>
            </Badge>
          ))}
        </div>
        
        <form onSubmit={addKeyword} className="flex items-center gap-2 mt-2">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Add a keyword..."
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              className="h-9"
            />
          </div>
          <Button type="submit" size="sm" variant="outline" className="h-9">
            <Plus size={16} className="mr-1" /> Add
          </Button>
        </form>
      </div>
      
      <div className="pt-4">
        <Button className="w-full">Save Preferences</Button>
      </div>
    </div>
  );
};

export default PreferencePanel;
