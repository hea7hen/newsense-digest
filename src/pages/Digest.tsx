
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsCard, { NewsItem } from "@/components/NewsCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Search, Filter, RefreshCw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Sample data for demo
const sampleNewsItems: NewsItem[] = [
  {
    id: "1",
    title: "AI Breakthrough Enables Faster Disease Detection",
    source: "Tech Innovations",
    author: "Jane Smith",
    summary: "Researchers have developed a new AI algorithm that can detect early signs of diseases with 99% accuracy, potentially saving millions of lives through early intervention.",
    url: "https://example.com/ai-breakthrough",
    publishedAt: "2023-10-15T14:30:00Z",
    sentiment: "positive",
    sentimentExplanation: "This article presents a significant advancement in healthcare technology with overwhelmingly positive implications for disease prevention and treatment.",
    imageUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Global Markets Face Uncertainty Amid Economic Tensions",
    source: "Financial Times",
    author: "Robert Johnson",
    summary: "Stock markets worldwide experienced volatility today as trade negotiations between major economies stalled, causing investor concern about potential long-term impacts.",
    url: "https://example.com/markets-uncertainty",
    publishedAt: "2023-10-16T09:15:00Z",
    sentiment: "negative",
    sentimentExplanation: "The article highlights economic instability and market concerns, presenting a negative outlook for global financial markets in the near term.",
    imageUrl: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "New Study Reveals Mixed Results on Remote Work Productivity",
    source: "Business Insider",
    author: "Maria Garcia",
    summary: "A comprehensive study of 5,000 employees found that while some thrive in remote work settings, others face significant challenges. Companies are now considering hybrid approaches.",
    url: "https://example.com/remote-work-study",
    publishedAt: "2023-10-14T11:45:00Z",
    sentiment: "neutral",
    sentimentExplanation: "The article presents balanced findings with both positive and negative aspects of remote work, maintaining a neutral stance without leaning toward either extreme.",
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Renewable Energy Sector Sees Record Investment in Q3",
    source: "Clean Energy Report",
    author: "Michael Chen",
    summary: "Global investments in renewable energy hit an all-time high in the third quarter, with solar and wind projects attracting the most capital. Experts predict continued growth.",
    url: "https://example.com/renewable-investment",
    publishedAt: "2023-10-13T16:20:00Z",
    sentiment: "positive",
    sentimentExplanation: "This article conveys optimism about the renewable energy sector, highlighting positive trends in investment and future outlook.",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "New Consumer Protection Regulations Coming Next Month",
    source: "Consumer Affairs",
    author: "Sarah Williams",
    summary: "Government agencies announced a set of new regulations aimed at protecting consumer data privacy, with companies given 30 days to ensure compliance or face penalties.",
    url: "https://example.com/consumer-regulations",
    publishedAt: "2023-10-12T13:10:00Z",
    sentiment: "neutral",
    sentimentExplanation: "The article objectively reports on regulatory changes without expressing a strong opinion on whether they are beneficial or detrimental.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Major Tech Company Faces Antitrust Investigation",
    source: "Tech Daily",
    author: "David Miller",
    summary: "Regulators have launched an investigation into potentially anticompetitive practices at one of the world's largest technology companies, sending its stock price tumbling.",
    url: "https://example.com/tech-antitrust",
    publishedAt: "2023-10-11T10:05:00Z",
    sentiment: "negative",
    sentimentExplanation: "The article conveys negative sentiment regarding both the company's practices and its financial prospects following regulatory scrutiny.",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1170&auto=format&fit=crop"
  }
];

const Digest = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const refreshNews = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };
  
  const filteredNews = sampleNewsItems.filter(news => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        news.title.toLowerCase().includes(query) ||
        news.summary.toLowerCase().includes(query) ||
        news.source.toLowerCase().includes(query)
      );
    }
    return true;
  }).filter(news => {
    if (selectedTab === "all") return true;
    return news.sentiment === selectedTab;
  });
  
  const availableSources = Array.from(new Set(sampleNewsItems.map(news => news.source)));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Your News Digest</h1>
              <p className="text-muted-foreground mt-1">Personalized news with sentiment insights</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center"
              >
                <Filter size={16} className="mr-2" />
                Filter
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={refreshNews}
                disabled={isRefreshing}
                className="flex items-center"
              >
                <RefreshCw size={16} className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Search your news digest..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-5 bg-secondary/30"
              />
            </div>
            
            {isFilterOpen && (
              <div className="mt-4 p-4 border border-border rounded-lg bg-card/50 animate-slide-down">
                <h3 className="text-sm font-medium mb-2">Filter by Source</h3>
                <div className="flex flex-wrap gap-2">
                  {availableSources.map(source => (
                    <Badge key={source} variant="secondary" className="cursor-pointer">
                      {source}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button size="sm" variant="outline" className="mr-2">Reset</Button>
                  <Button size="sm">Apply Filters</Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="all" className="mb-8" onValueChange={setSelectedTab}>
            <TabsList className="grid grid-cols-4 w-full md:w-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="neutral">Neutral</TabsTrigger>
              <TabsTrigger value="negative">Negative</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0" />
            <TabsContent value="positive" className="mt-0" />
            <TabsContent value="neutral" className="mt-0" />
            <TabsContent value="negative" className="mt-0" />
          </Tabs>
          
          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.length > 0 ? (
              filteredNews.map(news => (
                <NewsCard key={news.id} news={news} />
              ))
            ) : (
              <div className="col-span-3 py-20 text-center">
                <h3 className="text-xl font-medium mb-2">No results found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Digest;
