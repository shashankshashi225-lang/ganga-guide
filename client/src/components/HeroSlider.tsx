import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  id: number;
  heading: string;
  subheading: string;
  imageUrl: string;
  ctaPrimary: string;
  ctaSecondary?: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
  onExploreClick?: () => void;
  onWhatsAppClick?: () => void;
}

export default function HeroSlider({ slides, onExploreClick, onWhatsAppClick }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Direct WhatsApp handler that always works
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "918468003094";
    const message = "Hi! Welcome to Ganga Guides! I'm interested in booking a tour package. Can you share the details about available packages and pricing?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    onWhatsAppClick?.();
  };

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onExploreClick?.();
  };

  return (
    <div className="relative w-full h-screen overflow-hidden pt-20 md:pt-24" data-testid="hero-slider">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

            <div className="relative h-full flex items-center justify-center px-4 z-20">
              <div className="text-center max-w-4xl">
                {index === 0 ? (
                  <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight drop-shadow-lg" data-testid="hero-heading">
                    {slide.heading}
                  </h1>
                ) : (
                  <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight drop-shadow-lg" data-testid="hero-heading">
                    {slide.heading}
                  </h2>
                )}
                <p className="font-body text-base md:text-lg lg:text-xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-md" data-testid="hero-subheading">
                  {slide.subheading}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-30">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[200px] cursor-pointer"
                    onClick={handleExploreClick}
                    data-testid="button-explore-tours"
                  >
                    {slide.ctaPrimary}
                  </Button>
                  {slide.ctaSecondary && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 min-w-[200px] cursor-pointer"
                      onClick={handleWhatsAppClick}
                      data-testid="button-whatsapp-hero"
                    >
                      {slide.ctaSecondary}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all z-30"
        aria-label="Previous slide"
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all z-30"
        aria-label="Next slide"
        data-testid="button-next-slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-primary w-8" : "bg-white/50"
              }`}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`dot-slide-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
