"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, MessageSquare } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function NavBar() {
  const [instagramConnected, setInstagramConnected] = useState(false)
  const [youtubeConnected, setYoutubeConnected] = useState(false)
  const [tiktokConnected, setTiktokConnected] = useState(false)

  const getStatusColor = (isConnected: boolean) => {
    return isConnected ? "text-green-500" : "text-red-500"
  }

  const getStatusText = (platform: string, isConnected: boolean) => {
    return `${platform} ${isConnected ? "Connected" : "Not Connected"}`
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4">
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={getStatusColor(instagramConnected)}
                    onClick={() => setInstagramConnected(!instagramConnected)}
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {getStatusText("Instagram", instagramConnected)}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={getStatusColor(youtubeConnected)}
                    onClick={() => setYoutubeConnected(!youtubeConnected)}
                  >
                    <Youtube className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {getStatusText("YouTube", youtubeConnected)}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={getStatusColor(tiktokConnected)}
                    onClick={() => setTiktokConnected(!tiktokConnected)}
                  >
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {getStatusText("TikTok", tiktokConnected)}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </nav>
  )
} 