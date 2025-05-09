
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, AlertCircle, Image, Volume2 } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";

const InterventionShowcase = () => {
  return (
    <section id="interventions" className="py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Digital <span className="gradient-text">Interventions</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Experience the nudge.
          </p>
        </div>
        
        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid grid-cols-4 mb-12">
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="wallpapers">Wallpapers</TabsTrigger>
            <TabsTrigger value="overlays">Screen Overlays</TabsTrigger>
            <TabsTrigger value="audio">Audio & Haptics</TabsTrigger>
          </TabsList>
          
          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-10">
            <div className="grid gap-12 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 relative">
                    <div className="flex items-start bg-card rounded-lg p-4 shadow-lg mb-4 max-w-[90%] ml-auto mr-2">
                      <div className="mr-3 mt-1">
                        <Bell className="h-5 w-5 text-bhai-purple" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-semibold text-sm">Bh.ai</span>
                        </div>
                        <p className="mt-1 text-sm">Band kar de bhai, life bhi hai 😎</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-2xl">Reality Check</h3>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 relative">
                    <div className="flex items-start bg-destructive/90 text-destructive-foreground rounded-lg p-4 shadow-lg mb-4 max-w-[90%] ml-auto mr-2">
                      <div className="mr-3 mt-1">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-semibold text-sm">Bh.ai Priority Alert</span>
                        </div>
                        <p className="mt-1 text-sm">Abhi bhi jaga hua hai? Subah pachtayega! 😴</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-2xl">Critical Intervention</h3>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="border-bhai-purple/30 bg-bhai-purple/5">
              <Bell className="h-4 w-4 text-bhai-purple" />
              <AlertTitle>Adapts to your patterns</AlertTitle>
            </Alert>
          </TabsContent>
          
          {/* Wallpapers Tab */}
          <TabsContent value="wallpapers" className="space-y-10">
            <div className="grid gap-12 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 h-[300px] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1601944179066-29786cb9d32a')] bg-cover bg-center"></div>
                    <div className="relative z-10 text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl max-w-[80%]">
                      <p className="text-white font-bold text-2xl">
                        Log enjoy. You scroll.
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-2xl">Visual Reminder</h3>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-orange-900 to-red-900 p-8 h-[300px] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1532635241-17e820acc59f')] bg-cover bg-center"></div>
                    <div className="relative z-10 text-center p-4 bg-black/40 backdrop-blur-sm rounded-xl max-w-[80%]">
                      <p className="text-white font-bold text-2xl">
                        Burger kills abs.
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-2xl">Context Awareness</h3>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="border-bhai-orange/30 bg-bhai-orange/5">
              <Image className="h-4 w-4 text-bhai-orange" />
              <AlertTitle>Wallpapers that persist</AlertTitle>
            </Alert>
          </TabsContent>
          
          {/* Overlays Tab */}
          <TabsContent value="overlays" className="space-y-10">
            <div className="grid gap-12 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 h-[300px] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <div className="bg-card/90 p-6 rounded-xl max-w-[80%] shadow-xl">
                        <h4 className="font-bold text-2xl text-bhai-purple mb-4">Break Time</h4>
                        <p className="text-foreground/80 mb-4 text-xl">One hour. No value.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-2xl">Focus Intervention</h3>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 h-[300px] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1521931961826-fe48677230a5')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center">
                      <div className="text-center">
                        <h4 className="font-bold text-3xl text-white mb-6">12 बज गए, सो जा!</h4>
                        <div className="w-28 h-28 rounded-full bg-bhai-orange flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">30s</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-2xl">Forced Timeout</h3>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="border-amber-600/30 bg-amber-600/5">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertTitle>Escalating interventions</AlertTitle>
            </Alert>
          </TabsContent>
          
          {/* Audio Tab */}
          <TabsContent value="audio" className="space-y-10">
            <div className="grid gap-12 md:grid-cols-2">
              <Card>
                <CardContent className="p-8">
                  <div className="mb-6 w-16 h-16 rounded-full bg-bhai-purple/20 text-bhai-purple flex items-center justify-center">
                    <Volume2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4">Voice Roasts</h3>
                  <div className="bg-accent/50 p-4 rounded-md">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-bhai-purple rounded-full mr-3 flex items-center justify-center text-white font-bold text-xl">B</div>
                      <p className="font-medium text-lg">"Kitna scroll karega?"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <div className="mb-6 w-16 h-16 rounded-full bg-bhai-orange/20 text-bhai-orange flex items-center justify-center">
                    <Bell className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4">Haptic Feedback</h3>
                  <div className="bg-accent/50 p-4 rounded-md">
                    <div className="flex flex-col">
                      <div className="mb-3">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="h-2 bg-bhai-orange rounded-full w-10"></div>
                          <span className="text-lg font-medium">Short pulse</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-4">
                          <div className="h-2 bg-bhai-orange rounded-full w-20"></div>
                          <span className="text-lg font-medium">Extended vibration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="border-green-600/30 bg-green-600/5">
              <Volume2 className="h-4 w-4 text-green-600" />
              <AlertTitle>Multi-sensory impact</AlertTitle>
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InterventionShowcase;
