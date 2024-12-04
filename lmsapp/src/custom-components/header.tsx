'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <header className="bg-background text-foreground shadow-md dark:bg-gray-900">
      <div className="flex justify-between items-center h-20 px-6 lg:px-16">
        {/* Logo */}
        <div className="text-4xl font-bold">MyLMS</div>

        {/* Search Bar */}
        <div className="flex flex-grow mx-8 max-w-xl relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground">
            <Search className="h-5 w-5" />
          </span>
          <Input
            type="text"
            placeholder="What do you want to learn?"
            className="w-full pl-10"
          />
          
        </div>
        <Link
          href="/teach"
          className="text-sm font-medium text-black hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:underline"
        >
          Teach on MyLMS
        </Link>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border-black" onClick={() => router.push('/login')}>Sign In</Button>
          
            <Button onClick={() => router.push('/register')}>
              <span>Join</span>
            </Button>
          
          <ThemeToggle/>
        </div>
      </div>
    </header>
  );
}
