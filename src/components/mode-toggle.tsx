"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="absolute top-2 right-2 z-10">
      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        {theme === 'light' ? <Moon /> : <Sun />}
      </Button>
    </div>
  )
}