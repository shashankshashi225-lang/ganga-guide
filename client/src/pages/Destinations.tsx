import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Destination } from "@shared/schema";
import DestinationGuideCard from "@/components/DestinationGuideCard";
import Navigation from "@/components/Navigation";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FadeInSection from "@/components/FadeInSection";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

export default function Destinations() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<string>("all");

  const { data: apiDestinations, isLoading } = useQuery<Destination[]>({
    queryKey: ['/api/destinations'],
  });

  const destinations = apiDestinations || [];

  // Filter by region and search
  const filteredDestinations = useMemo(() => {
    return destinations
      .filter(dest =>
        regionFilter === "all" || dest.region === regionFilter
      )
      .filter(dest =>
        searchQuery === "" ||
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [destinations, searchQuery, regionFilter]);

  // Separate destinations by city for display
  const varanasi = useMemo(() => {
    return filteredDestinations.filter(dest => dest.region === "Varanasi");
  }, [filteredDestinations]);

  const ayodhya = useMemo(() => {
    return filteredDestinations.filter(dest => dest.region === "Ayodhya");
  }, [filteredDestinations]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Loading destinations...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <SEO
        title="Sacred Destinations Guide — Varanasi, Ayodhya, Sarnath & Prayagraj"
        description="Explore sacred temples & spiritual sites in Varanasi, Ayodhya, Sarnath & Prayagraj. Complete destination guides with history, timings, and local insights."
        keywords="Varanasi temples, Ayodhya temples, sacred destinations India, Kashi Vishwanath, Ram Janmabhoomi, spiritual sites"
        canonicalUrl="https://gangaguide.com/destinations"
      />

      <Navigation onBookNowClick={() => setLocation("/booking")} />

      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Sacred Temples & Spiritual Sites in Varanasi & Ayodhya
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                India's spiritual heartland stretches along the sacred Ganga, home to some of the world's most ancient and revered pilgrimage sites. Explore our comprehensive guides to temples, ghats, and sacred destinations.
              </p>
            </div>
          </FadeInSection>

          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search destinations by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-2"
                data-testid="input-search-destinations"
              />
            </div>

            {/* Region Filters */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filter by Region:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge
                  className={`cursor-pointer ${regionFilter === "all" ? "bg-primary" : "bg-muted hover-elevate"}`}
                  onClick={() => setRegionFilter("all")}
                  data-testid="filter-region-all"
                >
                  All Destinations
                </Badge>
                <Badge
                  className={`cursor-pointer ${regionFilter === "Varanasi" ? "bg-primary" : "bg-muted hover-elevate"}`}
                  onClick={() => setRegionFilter("Varanasi")}
                  data-testid="filter-region-varanasi"
                >
                  Varanasi
                </Badge>
                <Badge
                  className={`cursor-pointer ${regionFilter === "Ayodhya" ? "bg-primary" : "bg-muted hover-elevate"}`}
                  onClick={() => setRegionFilter("Ayodhya")}
                  data-testid="filter-region-ayodhya"
                >
                  Ayodhya
                </Badge>
              </div>
            </div>
          </div>

          {/* Varanasi Destinations Section */}
          {(regionFilter === "all" || regionFilter === "Varanasi") && (
            <div className="mb-20">
              {varanasi.length > 0 ? (
                <>
                  <FadeInSection>
                    <div className="mb-8">
                      <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                        Varanasi
                      </h2>
                      <p className="text-muted-foreground">
                        Explore the sacred temples and spiritual sites of Varanasi along the holy Ganges
                      </p>
                    </div>
                  </FadeInSection>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {varanasi.map((destination, index) => (
                      <FadeInSection key={destination.id} delay={index * 0.1}>
                        <DestinationGuideCard
                          name={destination.name}
                          shortDescription={destination.shortDescription}
                          imageUrl={destination.mainImage}
                          onClick={() => setLocation(`/destination/${destination.id}`)}
                          data-testid={`card-destination-${destination.id}`}
                        />
                      </FadeInSection>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No destinations found in Varanasi</p>
                </div>
              )}
            </div>
          )}

          {/* Ayodhya Destinations Section */}
          {(regionFilter === "all" || regionFilter === "Ayodhya") && (
            <div className="mb-20">
              {ayodhya.length > 0 ? (
                <>
                  <FadeInSection>
                    <div className="mb-8">
                      <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                        Ayodhya
                      </h2>
                      <p className="text-muted-foreground">
                        Discover the sacred temples and pilgrimage sites connected to Lord Rama in Ayodhya
                      </p>
                    </div>
                  </FadeInSection>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ayodhya.map((destination, index) => (
                      <FadeInSection key={destination.id} delay={index * 0.1}>
                        <DestinationGuideCard
                          name={destination.name}
                          shortDescription={destination.shortDescription}
                          imageUrl={destination.mainImage}
                          onClick={() => setLocation(`/destination/${destination.id}`)}
                          data-testid={`card-destination-${destination.id}`}
                        />
                      </FadeInSection>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No destinations found in Ayodhya</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
              Destination FAQs
            </h2>
          </FadeInSection>

          <div className="space-y-4">
            <FadeInSection delay={0.1}>
              <div className="bg-background rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Which destination is best for first-time pilgrims?</h3>
                <p className="text-muted-foreground">Varanasi is ideal for first-time pilgrims as it offers the complete spiritual experience — temple visits, Ganga Aarti, boat rides, and deep cultural immersion. A 2-day trip covers all major sites including Kashi Vishwanath Temple, Dashashwamedh Ghat, and Sarnath.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-background rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Can I visit both Varanasi and Ayodhya in one trip?</h3>
                <p className="text-muted-foreground">Yes! Varanasi and Ayodhya are about 200 km apart (4-5 hours by road or 3 hours by train). Our 3-day combined package covers both destinations comfortably with guided tours to Ram Janmabhoomi, Kashi Vishwanath, and all major sacred sites.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-background rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">What should I wear when visiting temples?</h3>
                <p className="text-muted-foreground">Modest, traditional clothing is recommended — covered shoulders and knees. Many temples require you to cover your head and remove shoes. We recommend carrying a scarf or dupatta. Our guides will advise you on specific dress codes for each temple before your visit.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="bg-background rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">What is the best time to visit these destinations?</h3>
                <p className="text-muted-foreground">October to March offers the best weather with pleasant temperatures (15-25°C). Festival seasons like Dev Deepawali (November), Maha Shivaratri (February/March), and Ram Navami (April) offer unique spiritual experiences but are more crowded. Monsoon (July-September) has fewer tourists but occasional rain.</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNav />
      <WhatsAppFloat />
    </div>
  );
}
