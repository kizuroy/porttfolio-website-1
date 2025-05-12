import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
      
      {/* Glass effect container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="glass-effect rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Avatar with hover card */}
            <HoverCard>
              <HoverCardTrigger>
                <Avatar className="w-32 h-32 border-4 border-white/20">
                  <AvatarImage src="/profile.jpg" alt="Your Name" />
                  <AvatarFallback className="text-4xl">👨‍💻</AvatarFallback>
                </Avatar>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Your Name</h4>
                    <p className="text-sm text-muted-foreground">
                      Full Stack Developer
                    </p>
                    <div className="flex items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        Available for freelance work
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* Main content */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
                Your Name
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Full Stack Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Crafting modern web experiences with cutting-edge technologies.
                Passionate about building scalable, performant applications that make a difference.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                View Projects
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 