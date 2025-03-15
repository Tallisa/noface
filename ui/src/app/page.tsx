"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Instagram, Youtube, MessageSquare, Download, Share2, Loader2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useRef } from "react"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [imageCount, setImageCount] = useState(5)
  const [showTranscript, setShowTranscript] = useState(false)
  const [showVoiceSelection, setShowVoiceSelection] = useState(false)
  const [showImageGeneration, setShowImageGeneration] = useState(false)
  const [showExport, setShowExport] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [regeneratingImage, setRegeneratingImage] = useState<number | null>(null)

  // Add refs for each section
  const transcriptRef = useRef<HTMLDivElement>(null)
  const voiceRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const exportRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleGenerateTranscript = () => {
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
      setShowTranscript(true)
      // Add small delay to ensure element is rendered before scrolling
      setTimeout(() => scrollToSection(transcriptRef), 100)
    }, 2000)
  }

  const handleProceedToVoice = () => {
    setShowVoiceSelection(true)
    setTimeout(() => scrollToSection(voiceRef), 100)
  }

  const handleGenerateImages = () => {
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
      setShowImageGeneration(true)
      setTimeout(() => scrollToSection(imageRef), 100)
    }, 2000)
  }

  const handleMakeVideo = () => {
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
      setShowExport(true)
      setTimeout(() => scrollToSection(exportRef), 100)
    }, 3000)
  }

  const handleRegenerateImage = (index: number) => {
    setRegeneratingImage(index)
    // Simulate API call
    setTimeout(() => {
      setRegeneratingImage(null)
    }, 2000)
  }

  return (
    <div className="space-y-8">
      {/* Section 1: AI Prompt & Settings */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">Video Prompt & Settings</h2>
          <p className="text-muted-foreground">Enter a prompt for your AI video and adjust settings.</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="prompt">AI Video Prompt</Label>
            <div className="space-y-4">
              <Textarea
                id="prompt"
                placeholder="Enter your video idea here..."
                className="min-h-[100px]"
              />
              <div className="flex justify-end">
                <Button 
                  onClick={handleGenerateTranscript}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Transcript"
                  )}
                </Button>
              </div>
            </div>
          </div>

          <Card className="p-4 space-y-4">
            <h3 className="font-medium">Video Settings</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="wordCount">Word Count</Label>
                <Input
                  id="wordCount"
                  type="number"
                  defaultValue={100}
                  min={50}
                  max={500}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="imageCount">Number of Images</Label>
                <Input
                  id="imageCount"
                  type="number"
                  value={imageCount}
                  onChange={(e) => setImageCount(Number(e.target.value))}
                  min={1}
                  max={10}
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Video Length (seconds)</Label>
                <Slider
                  defaultValue={[30]}
                  max={60}
                  min={15}
                  step={5}
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 2: Transcript Review */}
      {showTranscript && (
        <section ref={transcriptRef} className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Review & Edit Transcript</h2>
            <p className="text-muted-foreground">Review the generated transcript and make edits.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="transcript">Video Transcript</Label>
              <Textarea
                id="transcript"
                placeholder="Generated transcript will appear here..."
                className="min-h-[200px]"
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Image Prompts:</h3>
              <div className="space-y-2 text-sm">
                <p className="p-2 bg-muted rounded-md">1. [Generated image prompt will appear here]</p>
                <p className="p-2 bg-muted rounded-md">2. [Generated image prompt will appear here]</p>
                <p className="p-2 bg-muted rounded-md">3. [Generated image prompt will appear here]</p>
                <p className="p-2 bg-muted rounded-md">4. [Generated image prompt will appear here]</p>
                <p className="p-2 bg-muted rounded-md">5. [Generated image prompt will appear here]</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button 
              onClick={handleProceedToVoice}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "Proceed to Voice Selection"
              )}
            </Button>
          </div>
        </section>
      )}

      {/* Section 3: Audio Selection */}
      {showVoiceSelection && (
        <section ref={voiceRef} className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Choose Audio Voice</h2>
            <p className="text-muted-foreground">Select a voice for your video narration.</p>
          </div>

          <ScrollArea className="w-full">
            <div className="flex space-x-4 pb-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="w-[200px] shrink-0 p-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Voice Option {i}</h4>
                    <p className="text-sm text-muted-foreground">
                      {i % 2 === 0 ? "Male" : "Female"}, American Accent, 
                      {i % 2 === 0 ? "Energetic" : "Calm"}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Play Preview
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <div className="flex justify-end mt-4">
            <Button 
              onClick={handleGenerateImages}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating Images...
                </>
              ) : (
                "Generate Images"
              )}
            </Button>
          </div>
        </section>
      )}

      {/* Section 4: Image Generation Slideshow */}
      {showImageGeneration && (
        <section ref={imageRef} className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Generated Images</h2>
            <p className="text-muted-foreground">Review and regenerate images for your video.</p>
          </div>

          <ScrollArea className="w-full h-[420px] border rounded-lg">
            <div className="flex space-x-4 p-4">
              {Array.from({ length: imageCount }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <Card 
                    className={`w-[200px] shrink-0 p-2 cursor-pointer hover:bg-accent transition-colors ${selectedImage === index ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="aspect-[9/16] bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">Image {index + 1}</p>
                    </div>
                  </Card>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleRegenerateImage(index)}
                    disabled={regeneratingImage === index}
                  >
                    {regeneratingImage === index ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Regenerating...
                      </>
                    ) : (
                      `Regenerate Image ${index + 1}`
                    )}
                  </Button>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="flex justify-center space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setSelectedImage(prev => Math.max(0, prev - 1))}
              disabled={selectedImage === 0}
            >
              Previous
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setSelectedImage(prev => Math.min(imageCount - 1, prev + 1))}
              disabled={selectedImage === imageCount - 1}
            >
              Next
            </Button>
          </div>
          <div className="flex justify-end mt-4">
            <Button 
              onClick={handleMakeVideo}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Creating Video...
                </>
              ) : (
                "Make Video"
              )}
            </Button>
          </div>
        </section>
      )}

      {/* Section 5: Video Export & Upload */}
      {showExport && (
        <section ref={exportRef} className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Video Preview & Export</h2>
            <p className="text-muted-foreground">Preview your video and choose export options.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <div className="aspect-[9/16] bg-muted rounded-lg flex items-center justify-center mb-4">
                <p className="text-muted-foreground">Video preview will appear here</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Video Title</Label>
                <Textarea 
                  placeholder="Generated title will appear here..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea 
                  placeholder="Generated description will appear here..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label>Hashtags</Label>
                <Textarea 
                  placeholder="Generated hashtags will appear here..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button className="w-full">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button className="w-full">
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                </Button>
                <Button className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  TikTok
                </Button>
                <Button className="w-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  All
                </Button>
                <Button className="w-full col-span-2" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Video
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
