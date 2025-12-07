import { useLocation } from "wouter";
import { MapPin, Flame, Star, Users, Clock, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FadeInSection from "@/components/FadeInSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import SEO from "@/components/SEO";

// JSON-LD Schema for Packages page
const packagesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Ganga Guides Tour Packages",
  "description": "Spiritual and cultural tour packages in Varanasi, Ayodhya, and Ujjain",
  "url": "https://gangaguide.com/packages",
  "numberOfItems": 3,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "TouristTrip",
        "name": "Popular Events Packages",
        "description": "Experience festivals like Dev Diwali, Holi, Dussehra in Varanasi",
        "url": "https://gangaguide.com/packages/popular-events"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "TouristTrip",
        "name": "Tourist Packages",
        "description": "Explore spiritual and cultural routes of Varanasi and nearby destinations",
        "url": "https://gangaguide.com/packages/tourist"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "TouristTrip",
        "name": "Pooja Packages",
        "description": "Sacred rituals like Ganga Aarti, Rudrabhishek, and temple offerings",
        "url": "https://gangaguide.com/packages/pooja"
      }
    }
  ]
};

// FAQ data for the page
const faqs = [
  {
    question: "What is included in Varanasi tour packages?",
    answer: "Our packages typically include local guide services, boat rides on the Ganges, temple visits with skip-line access, transportation within the city, and authentic cultural experiences. Accommodation and meals can be added as per your preference."
  },
  {
    question: "How do I book a tour with Ganga Guides?",
    answer: "You can book instantly via WhatsApp by clicking the green button on any page, fill out our booking form, or call us directly. We respond within 2 hours and can customize any package to your needs."
  },
  {
    question: "What is the best time to visit Varanasi?",
    answer: "October to March offers the best weather for touring Varanasi. However, festival seasons like Dev Deepawali (November) and Maha Shivaratri provide unique spiritual experiences. Monsoon season (July-September) has fewer crowds but occasional rain."
  },
  {
    question: "Are Ganga Guides packages suitable for first-time visitors?",
    answer: "Absolutely! Our packages are designed for both first-time visitors and returning pilgrims. We explain every ritual, share historical context, and ensure you don't miss any significant experience."
  }
];

export default function PackagesLanding() {
  const [, setLocation] = useLocation();

  const handleWhatsApp = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "918468003094";
    const message = "Hi, I'm interested in booking a Varanasi tour package. Can you share details?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const categories = [
    {
      id: "popular-events",
      title: "Festival & Event Packages",
      shortTitle: "Popular Events",
      description: "Experience Dev Deepawali, Ganga Dussehra, Maha Shivaratri, and Ram Navami in their authentic spiritual glory with local guides who know every ritual.",
      highlights: ["Dev Deepawali celebrations", "Maha Shivaratri night vigil", "Ram Navami in Ayodhya"],
      icon: Flame,
      route: "/packages/popular-events"
    },
    {
      id: "tourist",
      title: "Sightseeing & Heritage Tours",
      shortTitle: "Tourist Packages",
      description: "Complete Kashi Darshan, Varanasi-Sarnath combined tours, and multi-day spiritual trails covering all major temples, ghats, and heritage sites.",
      highlights: ["1-Day Kashi Darshan", "Varanasi + Sarnath combo", "3-Day Spiritual Trail"],
      icon: MapPin,
      route: "/packages/tourist"
    },
    {
      id: "pooja",
      title: "Sacred Pooja & Rituals",
      shortTitle: "Pooja Packages",
      description: "Participate in Ganga Aarti, Rudrabhishek at Kashi Vishwanath, Pind Daan ceremonies, and other sacred rituals with experienced priests.",
      highlights: ["Ganga Aarti participation", "Rudrabhishek at temples", "Pind Daan & Shraddh"],
      icon: Flame,
      route: "/packages/pooja"
    }
  ];

  const trustBadges = [
    { icon: Users, text: "500+ Happy Travelers" },
    { icon: Star, text: "4.9★ Google Rating" },
    { icon: Clock, text: "2-Hour Response Time" },
  ];

  return (
    <div className="min-h-screen pb-20">
      <SEO
        title="Varanasi Tour Packages 2024 | Spiritual & Pilgrimage Tours | Ganga Guides"
        description="Explore spiritual tour packages in Varanasi, Ayodhya & Ujjain. Temple tours, Ganga Aarti experiences, pooja rituals. Book now with local expert guides!"
        keywords="Varanasi tour packages, Kashi Darshan, Ganga Aarti tour, Ayodhya tour, spiritual tours India, pilgrimage packages Varanasi, temple tours Varanasi"
        canonicalUrl="https://gangaguide.com/packages"
        jsonLd={packagesSchema}
      />

      <Navigation onBookNowClick={() => setLocation("/booking")} />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto w-full">
          <FadeInSection>
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Spiritual Tour Packages in Varanasi, Ayodhya & Ujjain
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-6">
                Discover curated spiritual journeys designed by locals who know every hidden temple, sacred ghat, and ancient ritual. Experience the authentic soul of India's holiest cities.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm md:text-base">
                    <badge.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
              >
                📱 Book via WhatsApp — Instant Response
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Package Categories Section */}
      <section className="py-12 md:py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto w-full">
          <FadeInSection>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
              Choose Your Spiritual Journey
            </h2>
          </FadeInSection>

          <div className="space-y-6 max-w-4xl mx-auto">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <FadeInSection key={category.id} delay={index * 0.1}>
                  <Card
                    className="group cursor-pointer hover-elevate active-elevate-2 transition-all border-2 border-card-border hover:border-primary/30"
                    onClick={() => setLocation(category.route)}
                    data-testid={`card-category-${category.id}`}
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {category.title}
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            {category.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {category.highlights.map((highlight, idx) => (
                              <span key={idx} className="text-xs md:text-sm bg-accent px-3 py-1 rounded-full">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="hidden md:flex items-center">
                          <span className="text-primary font-medium">Explore →</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
              Why Book with Ganga Guides?
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Local Expertise", desc: "Guides born & raised in Varanasi who know every hidden gem" },
              { title: "Small Groups", desc: "Maximum 8 people per tour for personalized attention" },
              { title: "Authentic Experiences", desc: "Real rituals, local interactions, skip tourist traps" },
              { title: "24/7 WhatsApp Support", desc: "Instant responses and flexible booking changes" },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-background rounded-lg p-6 text-center h-full">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="flex items-center justify-center gap-2 mb-8">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-center">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-accent/30 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-12 md:py-16 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <ActivitiesSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Spiritual Journey?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us now and we'll create a personalized itinerary for your Varanasi, Ayodhya, or Ujjain pilgrimage. Instant booking via WhatsApp!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
              >
                📱 Chat on WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation("/booking")}
              >
                Fill Booking Form
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <BottomNav onWhatsAppClick={handleWhatsApp} />
    </div>
  );
}
