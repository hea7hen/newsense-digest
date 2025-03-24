
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreferencePanel from "@/components/PreferencePanel";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { BellRing, Clock, Sliders, User, Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Preferences = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [dailyDigest, setDailyDigest] = useState(true);
  const [breakingNews, setBreakingNews] = useState(true);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Preferences</h1>
            <p className="text-muted-foreground mt-1">Customize your news experience</p>
          </div>
          
          <Tabs defaultValue="content" className="mb-8">
            <TabsList className="grid grid-cols-3 w-full md:w-auto">
              <TabsTrigger value="content">
                <Sliders className="mr-2 h-4 w-4" />
                Content
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <BellRing className="mr-2 h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="account">
                <User className="mr-2 h-4 w-4" />
                Account
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="pt-6">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Content Preferences</CardTitle>
                      <CardDescription>
                        Personalize the content you receive in your news digest
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PreferencePanel />
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>Digest Schedule</CardTitle>
                      <CardDescription>
                        Choose when you want to receive your personalized news digest
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Delivery Times</h3>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Clock size={18} className="text-muted-foreground" />
                              <Label htmlFor="digest-time">Morning Digest</Label>
                            </div>
                            <select 
                              id="digest-time"
                              className="rounded-md border border-input bg-background px-3 py-1 text-sm"
                            >
                              <option>6:00 AM</option>
                              <option>7:00 AM</option>
                              <option>8:00 AM</option>
                              <option>9:00 AM</option>
                            </select>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Clock size={18} className="text-muted-foreground" />
                              <Label htmlFor="evening-digest">Evening Digest</Label>
                            </div>
                            <select 
                              id="evening-digest"
                              className="rounded-md border border-input bg-background px-3 py-1 text-sm"
                            >
                              <option>5:00 PM</option>
                              <option>6:00 PM</option>
                              <option>7:00 PM</option>
                              <option>8:00 PM</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Frequency</h3>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <Button variant="outline" className="justify-start">Daily</Button>
                            <Button variant="outline" className="justify-start">Weekdays</Button>
                            <Button variant="outline" className="justify-start">Weekends</Button>
                            <Button variant="outline" className="justify-start">Custom</Button>
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button className="w-full">Save Schedule</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>
                    Manage how and when you receive updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Email Notifications</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="email-notifications" className="flex items-center space-x-2">
                            <Mail size={18} className="text-muted-foreground" />
                            <span>Email notifications</span>
                          </Label>
                          <Switch 
                            id="email-notifications" 
                            checked={emailNotifications}
                            onCheckedChange={setEmailNotifications}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Label htmlFor="daily-digest" className="flex items-center space-x-2">
                            <Clock size={18} className="text-muted-foreground" />
                            <span>Daily digest email</span>
                          </Label>
                          <Switch 
                            id="daily-digest" 
                            checked={dailyDigest}
                            onCheckedChange={setDailyDigest}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Label htmlFor="breaking-news" className="flex items-center space-x-2">
                            <BellRing size={18} className="text-muted-foreground" />
                            <span>Breaking news alerts</span>
                          </Label>
                          <Switch 
                            id="breaking-news" 
                            checked={breakingNews}
                            onCheckedChange={setBreakingNews}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Email Address</h3>
                      <div className="flex space-x-2">
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          className="flex-1"
                        />
                        <Button>Update</Button>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full">Save Notification Settings</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="account" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account preferences and settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Profile Information</h3>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" placeholder="John" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" placeholder="Doe" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john.doe@example.com" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Password</h3>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full">Save Account Settings</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Preferences;
