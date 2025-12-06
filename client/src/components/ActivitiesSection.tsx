import ActivityCard from "./ActivityCard";
import { Ship, Building2, Waves, PersonStanding, Building, Sparkles } from "lucide-react";

const varanasiActivities = [
    {
        icon: <Ship className="w-5 h-5" />,
        title: "Boat Ride / Cruise Ride",
        description: "Sail on the Ganga at sunrise or during evening Aarti for stunning views of ghats and temples."
    },
    {
        icon: <Building2 className="w-5 h-5" />,
        title: "Temple Visits",
        description: "Visit Kashi Vishwanath and other ancient temples, each radiating deep spiritual energy."
    },
    {
        icon: <Waves className="w-5 h-5" />,
        title: "Ganga Snan",
        description: "Take a holy dip at Dashashwamedh or Assi Ghat, believed to cleanse sins and bring blessings."
    },
    {
        icon: <PersonStanding className="w-5 h-5" />,
        title: "Ghat Walk",
        description: "Walk across 80+ ghats, each with its own story—from Dashashwamedh to Manikarnika."
    }
];

const ayodhyaActivities = [
    {
        icon: <Building className="w-5 h-5" />,
        title: "Mandir Visit",
        description: "Seek blessings at the grand Ram Mandir, a symbol of devotion and cultural pride."
    },
    {
        icon: <Waves className="w-5 h-5" />,
        title: "Saryu Snan",
        description: "Take a dip in the holy Saryu River, a timeless ritual of purity and faith."
    },
    {
        icon: <PersonStanding className="w-5 h-5" />,
        title: "Ram Ki Paidi Walk",
        description: "Enjoy peaceful evening walks along the beautifully lit ghats filled with bhajans and Aarti."
    },
    {
        icon: <Sparkles className="w-5 h-5" />,
        title: "Ram Leela Experience",
        description: "Witness grand enactments of the Ramayana, where devotion and storytelling come alive."
    }
];

const ujjainActivities = [
    {
        icon: <Waves className="w-5 h-5" />,
        title: "Shipra Snan",
        description: "Immerse in the holy Shipra River, believed to purify the soul and wash away sins."
    },
    {
        icon: <PersonStanding className="w-5 h-5" />,
        title: "Ghat Walk",
        description: "Walk along Ram Ghat and witness the serene evening Aarti by the river."
    },
    {
        icon: <Building2 className="w-5 h-5" />,
        title: "Temple Trail",
        description: "Visit Mahakaleshwar Jyotirlinga and other iconic temples, each with unique legends."
    }
];

const activities = [
    {
        id: "varanasi",
        name: "Varanasi",
        image: "/assets/activities/varanasi.png",
        shortDescription: "Experience the essence of Varanasi with our expertly curated tour through sacred ghats and ancient temples...",
        activities: varanasiActivities
    },
    {
        id: "ayodhya",
        name: "Ayodhya",
        image: "/assets/activities/ayodhya.png",
        shortDescription: "A comprehensive journey through the birthplace of Lord Ram with expert local guides and spiritual experiences...",
        activities: ayodhyaActivities
    },
    {
        id: "ujjain",
        name: "Ujjain",
        image: "/assets/activities/ujjain.png",
        shortDescription: "Experience the sacred Mahakaleshwar Jyotirlinga, legendary Bhasma Aarti, and all major temples of the holy city of...",
        activities: ujjainActivities
    }
];

export default function ActivitiesSection() {
    return (
        <div className="mb-16">
            <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Activities in Varanasi, Ayodhya & Ujjain
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Experience the soul of Kashi through sacred rituals, cultural walks, and river adventures.
                </p>
            </div>

            <div className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
                <div className="flex flex-nowrap md:grid md:grid-cols-3 gap-6 min-w-[900px] md:min-w-0">
                    {activities.map((city) => (
                        <div key={city.id} className="w-full min-w-[300px]">
                            <ActivityCard
                                name={city.name}
                                image={city.image}
                                shortDescription={city.shortDescription}
                                activities={city.activities}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
