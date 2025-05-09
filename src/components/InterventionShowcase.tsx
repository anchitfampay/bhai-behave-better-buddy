
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertCircle, Image, Volume2 } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const InterventionShowcase = () => {
  return (
    <section id="interventions" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Bh.ai Will Nudge You</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            From gentle notifications to direct wallpaper changes, Bh.ai uses multiple 
            intervention types to help you build better digital habits. Here's how it works:
          </p>
        </div>
        
        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="wallpapers">Wallpapers</TabsTrigger>
            <TabsTrigger value="overlays">Screen Overlays</TabsTrigger>
            <TabsTrigger value="audio">Audio & Haptics</TabsTrigger>
          </TabsList>
          
          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 relative">
                    <div className="flex items-start bg-card rounded-lg p-4 shadow-lg mb-4 max-w-[90%] ml-auto mr-2">
                      <div className="mr-3 mt-1">
                        <Bell className="h-5 w-5 text-bhai-purple" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-semibold text-sm">Bh.ai</span>
                          <Badge variant="outline" className="ml-2 text-xs">Just now</Badge>
                        </div>
                        <p className="mt-1 text-sm">Band kar de bhai, life bhi hai 😎</p>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                      <div className="w-32 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">Standard Notification</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Gentle reminders when you've been scrolling too long
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 relative">
                    <div className="flex items-start bg-destructive/90 text-destructive-foreground rounded-lg p-4 shadow-lg mb-4 max-w-[90%] ml-auto mr-2">
                      <div className="mr-3 mt-1">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-semibold text-sm">Bh.ai Priority Alert</span>
                          <Badge variant="outline" className="ml-2 text-xs bg-white/20 text-white">2m ago</Badge>
                        </div>
                        <p className="mt-1 text-sm">Abhi bhi jaga hua hai? Subah pachtayega! 😴</p>
                        <div className="mt-2 flex space-x-2">
                          <Badge className="bg-white/30 hover:bg-white/40 text-white">Good Point</Badge>
                          <Badge className="bg-white/30 hover:bg-white/40 text-white">5 Minutes More</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                      <div className="w-32 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">Priority Notification</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      More persistent alerts with response options for serious habit breaches
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="border-bhai-purple/30 bg-bhai-purple/5">
              <Bell className="h-4 w-4 text-bhai-purple" />
              <AlertTitle>Bh.ai analyzes your usage patterns</AlertTitle>
              <AlertDescription>
                Notifications adapt to your behavior, getting more direct when subtle hints don't work.
              </AlertDescription>
            </Alert>
          </TabsContent>
          
          {/* Wallpapers Tab */}
          <TabsContent value="wallpapers" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-6 h-[300px] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1601944179066-29786cb9d32a')] bg-cover bg-center"></div>
                    <div className="relative z-10 text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl max-w-[80%]">
                      <p className="text-white font-bold text-xl">
                        Reality check: Log enjoy kar rahe, tu scroll kar raha
                      </p>
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                      <div className="w-32 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">Wallpaper Intervention</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your phone background changes to remind you of your digital habits
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-orange-900 to-red-900 p-6 h-[300px] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1532635241-17e820acc59f')] bg-cover bg-center"></div>
                    <div className="relative z-10 text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl max-w-[80%]">
                      <p className="text-white font-bold text-xl">
                        Yeh burger tere abs kha jayega
                      </p>
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                      <div className="w-32 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">Contextual Wallpapers</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Different wallpapers for different behaviors like late-night food ordering
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="border-bhai-orange/30 bg-bhai-orange/5">
              <Image className="h-4 w-4 text-bhai-orange" />
              <AlertTitle>Visual reminders stay with you</AlertTitle>
              <AlertDescription>
                Wallpapers persist for a time period related to the behavior, making the intervention more effective.
              </AlertDescription>
            </Alert>
          </TabsContent>
          
          {/* Overlays Tab */}
          <TabsContent value="overlays" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 h-[300px] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <div className="bg-card/90 p-6 rounded-xl max-w-[80%] shadow-xl">
                        <h4 className="font-bold text-lg text-bhai-purple mb-2">Time To Take A Break</h4>
                        <p className="text-foreground/80 mb-4">1 ghante se scroll kar raha hai, kuch seekh le</p>
                        <div className="grid grid-cols-2 gap-2">
                          <Badge className="bg-bhai-purple hover:bg-bhai-purple/90 cursor-pointer py-2 justify-center">Just 5 More Minutes</Badge>
                          <Badge className="bg-bhai-orange hover:bg-bhai-orange/90 cursor-pointer py-2 justify-center">You're Right!</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                      <div className="w-32 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">Semi-Transparent Overlay</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Gentle screen overlays that require interaction before continuing
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 h-[300px] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1521931961826-fe48677230a5')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center">
                      <div className="text-center">
                        <h4 className="font-bold text-2xl text-white mb-3">12 बज गए, सो जा!</h4>
                        <div className="w-24 h-24 rounded-full bg-bhai-orange flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">30s</div>
                        <p className="text-white/80 text-sm">This screen will unlock after timeout</p>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                      <div className="w-32 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">Full Screen Intervention</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      For serious habit breaches, full screen timeout with forced break
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="border-amber-600/30 bg-amber-600/5">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertTitle>Overlays adapt to intervention level</AlertTitle>
              <AlertDescription>
                From subtle transparent messages to full screen timeouts, interventions escalate based on user behavior.
              </AlertDescription>
            </Alert>
          </TabsContent>
          
          {/* Audio Tab */}
          <TabsContent value="audio" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 w-14 h-14 rounded-full bg-bhai-purple/20 text-bhai-purple flex items-center justify-center">
                    <Volume2 className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Voice Roasts</h3>
                  <p className="text-foreground/70 mb-4">
                    Bh.ai delivers audio roasts in Hindi or English when you're engaged in unhealthy digital behavior.
                  </p>
                  <div className="bg-accent/50 p-4 rounded-md">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-bhai-purple rounded-full mr-3 flex items-center justify-center text-white font-bold">B</div>
                      <p className="font-medium">"Kitna scroll karega? Thak nahi gaya?"</p>
                    </div>
                    <div className="flex gap-2 items-center text-xs text-foreground/60">
                      <Badge variant="outline" className="text-[10px]">Level 1</Badge>
                      <span>3-5 second audio clip</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 w-14 h-14 rounded-full bg-bhai-orange/20 text-bhai-orange flex items-center justify-center">
                    <Bell className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Haptic Feedback</h3>
                  <p className="text-foreground/70 mb-4">
                    From gentle vibrations to insistent patterns, haptic feedback gets your attention when needed.
                  </p>
                  <div className="bg-accent/50 p-4 rounded-md">
                    <div className="flex flex-col">
                      <div className="mb-3">
                        <Badge className="mb-2">Level 1</Badge>
                        <div className="flex items-center gap-2">
                          <div className="h-1 bg-bhai-orange rounded-full w-6"></div>
                          <span className="text-xs">Short pulse</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <Badge className="mb-2">Level 2</Badge>
                        <div className="flex items-center gap-2">
                          <div className="h-1 bg-bhai-orange rounded-full w-4"></div>
                          <div className="h-1 bg-bhai-orange rounded-full w-2"></div>
                          <div className="h-1 bg-bhai-orange rounded-full w-4"></div>
                          <span className="text-xs">Pattern vibration</span>
                        </div>
                      </div>
                      <div>
                        <Badge className="mb-2">Level 3</Badge>
                        <div className="flex items-center gap-2">
                          <div className="h-1 bg-bhai-orange rounded-full w-12"></div>
                          <span className="text-xs">Extended vibration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="border-green-600/30 bg-green-600/5">
              <Volume2 className="h-4 w-4 text-green-600" />
              <AlertTitle>Multi-sensory interventions</AlertTitle>
              <AlertDescription>
                Audio and haptic feedback can be combined with visual interventions for maximum effectiveness.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InterventionShowcase;
