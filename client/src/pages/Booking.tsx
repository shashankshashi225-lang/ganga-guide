import { useLocation } from "wouter";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle, Clock, Shield, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import EnhancedContactForm from "@/components/EnhancedContactForm";
import FadeInSection from "@/components/FadeInSection";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";


interface FormData {
  name: string;
  email: string;
  phone: string;
  package: string;
  travelDate: string;
  numTravelers: string;
  specialRequests: string;
}

export default function Booking() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [formRef, setFormRef] = useState<any>(null);

  const bookingMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          packageName: data.package,
          preferredDate: data.travelDate,
          numberOfPeople: parseInt(data.numTravelers),
          message: data.specialRequests,
        }),
      });
      if (!response.ok) throw new Error("Failed to submit booking");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for submitting your inquiry. We'll be in touch soon!",
        duration: 5000,
      });
      // Reset form by reloading or resetting form data
      if (formRef) {
        formRef.reset();
      }
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  const handleWhatsApp = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "918468003094";
    const message = "Hi, I'm interested in booking a GangaGuides tour. Can you share details?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleFormSubmit = async (data: FormData) => {
    bookingMutation.mutate(data);
  };

  return (
    <div className="min-h-screen pb-20">
      <SEO
        title="Book Your Varanasi Tour — Easy Booking | Ganga Guides"
        description="Book your spiritual tour to Varanasi, Ayodhya or Ujjain. Easy online booking, instant WhatsApp confirmation. Customizable packages. Book now!"
        keywords="book Varanasi tour, Varanasi trip booking, pilgrimage booking, Ayodhya tour booking, spiritual tour India"
        canonicalUrl="https://gangaguide.com/booking"
      />

      <Navigation onBookNowClick={() => setLocation("/booking")} />

      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Book Your Spiritual Journey to Varanasi & Ayodhya
              </h1>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
                Ready to experience the magic of India's sacred cities? Fill out the form below and our team will create a personalized itinerary just for you. Whether you're planning a solo pilgrimage, family darshan trip, or group spiritual retreat — we'll tailor every detail to make your journey unforgettable.
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">2-Hour Response</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-medium">100% Secure</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-medium">500+ Happy Travelers</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium">100% Customizable</span>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <EnhancedContactForm
              onSubmit={handleFormSubmit}
            />
          </FadeInSection>

          {/* Additional Info */}
          <FadeInSection delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                <strong>Prefer instant booking?</strong> Chat directly with our team on WhatsApp for immediate confirmation.
                We're available 6 AM - 10 PM IST, 7 days a week.
              </p>
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
