"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, Users, Settings } from "lucide-react"
import type React from "react"

export function DashboardNav({ className, ...props }: React.ComponentProps<"nav">) {
  const pathname = usePathname()

  const items = [
    {
      href: "/dashboard",
      title: "Overview",
      icon: LayoutDashboard,
    },
    {
      href: "/dashboard/students",
      title: "Students",
      icon: Users,
    },
    {
      href: "/dashboard/settings",
      title: "Settings",
      icon: Settings,
    },
  ]

  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <nav className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)} {...props}>
        {items.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href={item.href}>
                <Icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          )
        })}
      </nav>
    </ScrollArea>
  )
}

