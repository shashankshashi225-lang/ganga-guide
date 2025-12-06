import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import LazyImage from "@/components/LazyImage";

interface ActivityItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface ActivityCardProps {
    name: string;
    image: string;
    shortDescription: string;
    activities: ActivityItem[];
}

export default function ActivityCard({
    name,
    image,
    shortDescription,
    activities,
}: ActivityCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleWhatsApp = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent card flip when clicking WhatsApp button
        const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "918468003094";
        const message = `Hi, I'm interested in exploring ${name} with GangaGuides. Can you share more details about the activities and packages available?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className="min-h-[520px] w-full cursor-pointer"
            style={{ perspective: "1000px" }}
            onClick={handleCardClick}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div
                className="relative w-full h-full min-h-[520px] transition-transform duration-500"
                style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* Front of card */}
                <div
                    style={{ backfaceVisibility: "hidden" }}
                    className="absolute w-full h-full"
                >
                    <Card className="overflow-hidden border-2 border-card-border shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full bg-gradient-to-br from-orange-50/50 to-amber-50/30">
                        <div className="relative h-48 overflow-hidden flex-shrink-0">
                            <LazyImage
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="font-display text-xl font-bold text-foreground mb-2 italic">
                                {name}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                                {shortDescription}
                            </p>

                            <div className="mt-auto space-y-3">
                                <Button
                                    className="w-full bg-[#FF6B35] hover:bg-[#FF5722] text-white font-semibold shadow-md rounded-full py-5"
                                    onClick={handleWhatsApp}
                                >
                                    Book Now
                                </Button>

                                <Button
                                    variant="outline"
                                    className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 font-semibold rounded-full py-5 gap-2"
                                    onClick={handleWhatsApp}
                                >
                                    <FaWhatsapp className="w-5 h-5" />
                                    WhatsApp
                                </Button>

                                <p className="w-full text-center text-xs text-muted-foreground">
                                    Tap or hover to see activities
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Back of card */}
                <div
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    className="absolute w-full h-full"
                >
                    <Card className="overflow-hidden border-2 border-primary/50 shadow-xl bg-gradient-to-br from-orange-50/50 to-amber-50/30 flex flex-col h-full">
                        <div className="flex flex-col p-5 h-full">
                            <div className="flex items-center justify-between mb-4 pb-3 border-b">
                                <h3 className="font-display text-xl font-bold text-primary italic">{name}</h3>
                                <Badge variant="outline" className="text-primary border-primary">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    Holy City
                                </Badge>
                            </div>

                            <div className="flex-grow overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                                {activities.map((activity, index) => (
                                    <div key={index} className="flex gap-3 group">
                                        <div className="mt-1 text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                                            {activity.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground text-sm mb-0.5">
                                                {activity.title}
                                            </h4>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                {activity.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4 mt-auto border-t space-y-3">
                                <Button
                                    className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white font-semibold shadow-md rounded-full py-5 gap-2"
                                    onClick={handleWhatsApp}
                                >
                                    <FaWhatsapp className="w-5 h-5" />
                                    Book via WhatsApp
                                </Button>

                                <p className="w-full text-center text-xs text-muted-foreground">
                                    Tap or hover to flip back
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
