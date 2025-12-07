import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/ganga_guides_logo_new.png";

interface NavigationProps {
  onBookNowClick?: () => void;
}

export default function Navigation({ onBookNowClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  const handlePlanJourney = () => {
    // If we're on the home page and there's a contact form, scroll to it
    if (location === "/" && document.getElementById("contact")) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Otherwise, navigate to the booking page
      setLocation("/booking");
    }
    // Also call the optional callback if provided
    onBookNowClick?.();
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 bg-white shadow-lg border-b border-border"
      style={{ transform: 'none', animation: 'none', transition: 'none' }}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-1 md:py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-none">
            <button
              className="flex items-center rounded-lg"
              style={{ transform: 'none', animation: 'none', transition: 'none' }}
              data-testid="button-logo"
            >
              <img src={logoImage} alt="Ganga Guides Logo" className="h-14 md:h-20 w-auto" />
            </button>
          </Link>

          <div className="flex items-center gap-2 md:gap-6 flex-[4] md:flex-none justify-end min-w-0">
            <div className="hidden md:flex items-center gap-6">
              <Link href="/">
                <button
                  className={`text-sm font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${isActive("/")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                    }`}
                  data-testid="nav-home"
                >
                  Home
                </button>
              </Link>
              <Link href="/packages">
                <button
                  className={`text-sm font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${isActive("/packages")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                    }`}
                  data-testid="nav-packages"
                >
                  Packages
                </button>
              </Link>
              <Link href="/destinations">
                <button
                  className={`text-sm font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${isActive("/destinations")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                    }`}
                  data-testid="nav-destinations"
                >
                  Destinations
                </button>
              </Link>
              <Link href="/blog">
                <button
                  className={`text-sm font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${isActive("/blog")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                    }`}
                  data-testid="nav-blog"
                >
                  Blog
                </button>
              </Link>
              <Link href="/about">
                <button
                  className={`text-sm font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${isActive("/about")
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                    }`}
                  data-testid="nav-about"
                >
                  About
                </button>
              </Link>
            </div>

            <Button
              onClick={handlePlanJourney}
              size="sm"
              className="bg-primary text-primary-foreground border border-primary-border font-semibold shadow-lg text-xs whitespace-nowrap px-3 md:px-4"
              style={{ transform: 'none', animation: 'none', transition: 'none' }}
              data-testid="button-plan-journey"
            >
              Plan Your Journey
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
