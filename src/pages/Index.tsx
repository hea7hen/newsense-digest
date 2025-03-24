
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper, Filter, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsCard, { NewsItem } from "@/components/NewsCard";

// Sample data for demo purposes
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
  }
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-20 md:pb-32 px-4">
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-secondary/80 to-background z-[-1] opacity-0 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : ''}`}
          />
          
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className={`space-y-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary/80">
                  <span className="animate-pulse-subtle">New</span>
                  <span className="mx-2">•</span>
                  <span>AI-Powered News Analysis</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                  Understand the <span className="text-primary">sentiment</span> behind the news
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                  Get personalized news digests with AI-powered sentiment analysis to help you understand the emotional context behind headlines.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="group">
                    <Link to="/digest">
                      Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg">
                    <Link to="/preferences">
                      Customize Your Feed
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="relative bg-card rounded-xl shadow-xl overflow-hidden border border-border/50">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-purple-500/50 to-blue-500/50"></div>
                  <div className="p-6 space-y-4">
                    <NewsCard news={sampleNewsItems[0]} />
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 -bottom-4 -z-10 w-full rounded-xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 blur-xl opacity-70"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Our Features</h2>
              <p className="text-muted-foreground text-lg">
                Experience news like never before with our intelligent platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Newspaper />}
                title="Personalized Digest"
                description="Get news tailored to your interests, curated daily based on your preferences and reading habits."
              />
              
              <FeatureCard 
                icon={<TrendingUp />}
                title="Sentiment Analysis"
                description="Understand the emotional tone behind headlines with our advanced AI sentiment detection."
              />
              
              <FeatureCard 
                icon={<Filter />}
                title="Custom Filters"
                description="Fine-tune your news feed with precise controls over topics, sources, and keywords."
              />
            </div>
          </div>
        </section>
        
        {/* Recent News Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Recent Headlines</h2>
              <Button asChild variant="outline">
                <Link to="/digest">
                  View All <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleNewsItems.map(news => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform how you consume news?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Sign up today and start experiencing news with context, sentiment, and personalization.
              </p>
              
              <Button asChild size="lg" variant="secondary" className="group">
                <Link to="/digest">
                  Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-md group">
      <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;
