
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, AlertCircle, Image as ImageIcon, Volume2 } from "lucide-react";

const InterventionShowcase = () => {
  return (
    <section id="interventions" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pulse-violet/5 via-ice-blue/5 to-transparent"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Neural <span className="gradient-text">Signals</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-lg mx-auto">
            Experience intervention.
          </p>
        </div>
        
        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-12 bg-background/20 border border-pulse-violet/10">
            <TabsTrigger value="notifications" className="data-attribute-selected:bg-pulse-violet/10">Neural Alerts</TabsTrigger>
            <TabsTrigger value="wallpapers" className="data-attribute-selected:bg-pulse-violet/10">Visual Matrix</TabsTrigger>
            <TabsTrigger value="overlays" className="data-attribute-selected:bg-pulse-violet/10">Screen Breach</TabsTrigger>
            <TabsTrigger value="audio" className="data-attribute-selected:bg-pulse-violet/10">Sonic System</TabsTrigger>
          </TabsList>
          
          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden bg-card/30 border-pulse-violet/20 prismatic-border">
                <CardContent className="p-0">
                  <div className="bg-void-black p-6 relative">
                    <div className="flex items-start bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-lg mb-4 max-w-[90%] ml-auto mr-2 border border-pulse-violet/20">
                      <div className="mr-3 mt-1">
                        <Bell className="h-4 w-4 text-pulse-violet" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-semibold text-sm">Bh.ai</span>
                        </div>
                        <p className="mt-1 text-sm">Band kar de bhai, life bhi hai</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base">Reality Signal</h3>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden bg-card/30 border-pulse-violet/20 prismatic-border">
                <CardContent className="p-0">
                  <div className="bg-void-black p-6 relative">
                    <div className="flex items-start bg-destructive/90 text-destructive-foreground rounded-lg p-4 shadow-lg mb-4 max-w-[90%] ml-auto mr-2 border border-destructive/20">
                      <div className="mr-3 mt-1">
                        <AlertCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-semibold text-sm">Bh.ai Priority</span>
                        </div>
                        <p className="mt-1 text-sm">Abhi bhi jaga hua hai?</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base">Critical Breach</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Wallpapers Tab */}
          <TabsContent value="wallpapers" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden bg-card/30 border-pulse-violet/20 prismatic-border">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-void-black to-pulse-violet/20 p-6 h-[200px] flex items-center justify-center relative">
                    <div className="relative z-10 text-center p-3 bg-card/40 backdrop-blur-sm rounded-lg max-w-[80%] border border-pulse-violet/20">
                      <p className="text-foreground font-bold text-sm">
                        Log enjoy. You scroll.
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base">Visual Matrix</h3>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden bg-card/30 border-pulse-violet/20 prismatic-border">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-void-black to-ice-blue/20 p-6 h-[200px] flex items-center justify-center relative">
                    <div className="relative z-10 text-center p-3 bg-card/40 backdrop-blur-sm rounded-lg max-w-[80%] border border-ice-blue/20">
                      <p className="text-foreground font-bold text-sm">
                        Burger kills abs.
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base">Context Awareness</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Overlays Tab */}
          <TabsContent value="overlays" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden bg-card/30 border-pulse-violet/20 prismatic-border">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-void-black to-pulse-violet/10 p-6 h-[200px] flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-void-black/80 backdrop-blur-md flex items-center justify-center">
                      <div className="bg-card/70 p-4 rounded-lg max-w-[80%] border border-pulse-violet/20 shadow-lg">
                        <h4 className="font-bold text-base text-pulse-violet mb-2">Neural Break</h4>
                        <p className="text-foreground/80 text-sm">One hour. No value.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base">Focus Breach</h3>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden bg-card/30 border-pulse-violet/20 prismatic-border">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-void-black to-ice-blue/10 p-6 h-[200px] flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-void-black/90 backdrop-blur-lg flex items-center justify-center">
                      <div className="text-center">
                        <h4 className="font-bold text-xl text-foreground mb-3">12 बज गए, सो जा</h4>
                        <div className="w-16 h-16 rounded-full bg-pulse-violet flex items-center justify-center text-void-black text-xl font-bold mx-auto">30s</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base">Forced Timeout</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Audio Tab */}
          <TabsContent value="audio" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-card/30 border-pulse-violet/20 prismatic-border">
                <CardContent className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-pulse-violet/20 text-pulse-violet flex items-center justify-center">
                    <Volume2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-base mb-2">Voice Breach</h3>
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <p className="font-medium">"Kitna scroll karega?"</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/30 border-ice-blue/20 prismatic-border">
                <CardContent className="p-6">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-ice-blue/20 text-ice-blue flex items-center justify-center">
                    <Bell className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-base mb-2">Neural Pulse</h3>
                  <div className="bg-muted p-3 rounded-md">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="h-1 bg-ice-blue rounded-full w-8"></div>
                      <span className="text-sm">Short shock</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InterventionShowcase;
