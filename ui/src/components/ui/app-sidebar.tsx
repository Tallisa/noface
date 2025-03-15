import { BookImage, Calendar, Film, Inbox, Search, Settings, LogOut, Instagram, Youtube, MessageSquare, MessagesSquare } from "lucide-react"
import Image from 'next/image'
import { Sheet, SheetContent, SheetHeader, SheetFooter, SheetClose, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "New Video",
    url: "/",
    icon: Film,
  },
  {
    title: "Gallery",
    url: "/gallery",
    icon: BookImage,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="flex flex-col h-full">
        <Link href="/" className="flex items-center gap-2 px-6 py-4">
          <Image
            src="/NoFaceAppicon.svg"
            alt="NoFace App Icon"
            width={50}
            height={50}
          />
          <span className="text-xl font-bold">NoFace</span>
        </Link>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        <div className="mt-auto border-t">
          <div className="px-6 py-4">
            <Button variant="ghost" className="w-full justify-start gap-2 mb-2">
              <MessagesSquare className="h-4 w-4" />
              Join our Community
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Settings</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                <h3 className="text-sm font-medium">Social Connections</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Instagram className="h-4 w-4" />
                      Connect to Instagram
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Youtube className="h-4 w-4" />
                      Connect to YouTube
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Connect to TikTok
                    </Button>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button variant="destructive" className="w-full justify-start gap-2">
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                      <Link href="/terms" className="hover:underline">Terms of Use</Link>
                    </div>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}