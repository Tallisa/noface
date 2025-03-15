"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Edit } from "lucide-react"

// This would come from your backend in a real app
const mockVideos = [
  { id: 1, title: "Summer Vacation Memories", date: "2024-03-20" },
  { id: 2, title: "City Life Adventures", date: "2024-03-19" },
  { id: 3, title: "Cooking with Friends", date: "2024-03-18" },
  { id: 4, title: "Travel Diary: Paris", date: "2024-03-17" },
  { id: 5, title: "Fitness Journey", date: "2024-03-16" },
  { id: 6, title: "Music Festival Highlights", date: "2024-03-15" },
]

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Your Videos</h1>
        <p className="text-muted-foreground">Browse and manage your created videos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVideos.map((video) => (
          <Card key={video.id} className="flex flex-col">
            <div className="aspect-[9/16] bg-muted relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                <Button variant="secondary" size="icon" className="mr-2">
                  <Play className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{video.title}</h3>
              <p className="text-sm text-muted-foreground">{video.date}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 