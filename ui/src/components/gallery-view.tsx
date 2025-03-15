"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, MessageSquare, MoreVertical } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function GalleryView() {
  // Mock data for demonstration
  const videos = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    title: `Video ${i + 1}`,
    thumbnail: `https://picsum.photos/400/600?random=${i}`,
    date: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
    platforms: ['instagram', 'youtube', 'tiktok'].slice(0, Math.floor(Math.random() * 3) + 1)
  }))

  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <div className="aspect-[9/16] relative group">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="secondary" className="mr-2">Edit</Button>
                <Button>Share</Button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium truncate">{video.title}</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                    <DropdownMenuItem>Download</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{video.date}</p>
              <div className="flex gap-1 mt-2">
                {video.platforms.includes('instagram') && (
                  <Instagram className="h-4 w-4 text-muted-foreground" />
                )}
                {video.platforms.includes('youtube') && (
                  <Youtube className="h-4 w-4 text-muted-foreground" />
                )}
                {video.platforms.includes('tiktok') && (
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 