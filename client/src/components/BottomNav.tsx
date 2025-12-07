import { Home, Package, Map, BookOpen, Users } from "lucide-react";
import { useLocation } from "wouter";

interface BottomNavProps {
  onWhatsAppClick?: () => void;
}

export default function BottomNav({ onWhatsAppClick }: BottomNavProps) {
  const [location, setLocation] = useLocation();

  const navItems = [
    { label: "Home", icon: Home, href: "/" },
    { label: "Packages", icon: Package, href: "/packages" },
    { label: "Destination", icon: Map, href: "/destinations" },
    { label: "Blog", icon: BookOpen, href: "/blog" },
    { label: "About", icon: Users, href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location === "/";
    }
    return location.startsWith(href);
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden"
      style={{ transform: 'none', animation: 'none' }}
      data-testid="bottom-navigation"
    >
      <div className="max-w-7xl mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <button
                key={item.href}
                onClick={() => setLocation(item.href)}
                className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg flex-1 ${active
                  ? "text-primary"
                  : "text-muted-foreground"
                  }`}
                style={{ transform: 'none', animation: 'none', transition: 'none' }}
                data-testid={`link-bottom-nav-${item.label.toLowerCase()}`}
              >
                <Icon className={`w-5 h-5 ${active ? "text-primary" : ""}`} />
                <span className={`text-xs font-medium ${active ? "text-primary" : ""}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

