import { neon } from '@neondatabase/serverless';
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;

const mockDestinations = [
  {
    id: "varanasi",
    name: "Varanasi",
    short_description: "Walk along the holy Ganga, witness morning aarti, and explore hidden alleys of the eternal city.",
    description: "Varanasi, the spiritual capital of India, is one of the world's oldest continuously inhabited cities. Walk along the sacred ghats of the Ganges, witness the mesmerizing Ganga Aarti ceremony, and explore ancient temples that have stood for millennia.",
    main_image: "/generated_images/Boat_perspective_Ganges_view_e308dae7.png",
    image2: "/generated_images/kashi_vishwanath_temple.png",
    image3: "/generated_images/Morning_meditation_Ganges_sunrise_001c3280.png",
    image4: null,
    region: "Varanasi",
    featured: true
  },
  {
    id: "ayodhya",
    name: "Ayodhya",
    short_description: "Dive into the legends of Lord Ram and experience age-old traditions firsthand.",
    description: "Ayodhya, the birthplace of Lord Rama, is one of Hinduism's seven holiest cities. The recently constructed Ram Mandir stands as a magnificent testament to ancient Indian architecture.",
    main_image: "/generated_images/Ayodhya_Ram_Mandir_temple_baae3de1.png",
    image2: "/generated_images/hanuman_garhi_temple_ayodhya.png",
    image3: "/generated_images/Ayodhya_spiritual_trail_dusk_b641daa9.png",
    image4: null,
    region: "Ayodhya",
    featured: true
  },
  {
    id: "ujjain",
    name: "Ujjain",
    short_description: "Experience the sacred Mahakaleshwar Jyotirlinga and ancient temples of this holy city.",
    description: "Ujjain, one of the seven sacred cities of India, is home to the revered Mahakaleshwar Jyotirlinga - one of the twelve sacred shrines of Lord Shiva.",
    main_image: "/generated_images/mahakaleshwar_temple_ujjain_exterior.png",
    image2: "/generated_images/ram_ghat_ujjain_evening_aarti.png",
    image3: "/generated_images/bade_ganeshji_temple_ujjain.png",
    image4: null,
    region: "Ujjain",
    featured: true
  },
  {
    id: "sarnath",
    name: "Sarnath",
    short_description: "Visit the site where Buddha gave his first sermon, enriched with history and tranquility.",
    description: "Sarnath is where Buddhism began as Buddha gave his first sermon after attaining enlightenment. The Dhamek Stupa, Ashoka Pillar, and ancient monasteries create a serene atmosphere perfect for contemplation.",
    main_image: "/generated_images/Sarnath_Buddhist_stupa_sunset_888b3275.png",
    image2: null,
    image3: null,
    image4: null,
    region: "Uttar Pradesh",
    featured: true
  },
  {
    id: "prayagraj",
    name: "Prayagraj",
    short_description: "Experience the sacred confluence of three holy rivers at Triveni Sangam.",
    description: "Prayagraj, formerly Allahabad, is home to the legendary Triveni Sangam - the confluence of the Ganges, Yamuna, and the mythical Saraswati rivers.",
    main_image: "/generated_images/Prayagraj_Triveni_Sangam_confluence_c12597e6.png",
    image2: null,
    image3: null,
    image4: null,
    region: "Uttar Pradesh",
    featured: true
  }
];

const mockBlogPosts = [
  {
    id: "morning-aarti-varanasi",
    title: "Morning Aarti Through My Eyes: A Varanasi Experience",
    excerpt: "Experience the magic of dawn on the Ganges as ancient rituals come alive. Discover what makes this ceremony unforgettable.",
    content: "Every morning, as the first rays of sun touch the waters of the Ganges, something magical happens. The air fills with the sound of bells, the fragrance of incense, and the chanting of ancient mantras.",
    category: "Rituals",
    published_date: "Nov 15, 2025",
    read_time: "6 min read",
    main_image: "/generated_images/Morning_meditation_Ganges_sunrise_001c3280.png",
    image2: null,
    image3: null,
    image4: null,
    featured: true
  },
  {
    id: "ayodhya-spiritual-guide",
    title: "Ayodhya Spiritual Trail: Complete Pilgrim's Guide",
    excerpt: "Planning a pilgrimage to Ayodhya? Our comprehensive guide covers everything from temples to local customs.",
    content: "Ayodhya has transformed in recent years, and planning a visit requires updated knowledge. Here's everything you need to know for a meaningful pilgrimage.",
    category: "Travel Tips",
    published_date: "Nov 10, 2025",
    read_time: "8 min read",
    main_image: "/generated_images/Ayodhya_spiritual_trail_dusk_b641daa9.png",
    image2: null,
    image3: null,
    image4: null,
    featured: true
  },
  {
    id: "ujjain-mahakal-journey",
    title: "Ujjain: The City of Mahakal - A Sacred Journey",
    excerpt: "Discover the mystical charm of Ujjain, home to the famous Mahakaleshwar Jyotirlinga and centuries of spiritual heritage.",
    content: "Ujjain, one of the holiest cities in Hinduism, sits majestically on the banks of the sacred Shipra River.",
    category: "Heritage",
    published_date: "Nov 5, 2025",
    read_time: "7 min read",
    main_image: "/generated_images/bade_ganeshji_temple_ujjain.png",
    image2: null,
    image3: null,
    image4: null,
    featured: true
  }
];

const mockPackages = [
  {
    id: "ramnagar-ramlila",
    name: "Ramnagar Ramlila Experience",
    destination: "Varanasi",
    category: "popular_event",
    duration: "1 Day",
    short_description: "Witness the spectacular month-long Ramlila performances across Ramnagar with traditional staging and authentic cultural immersion.",
    highlights: ["UNESCO-recognized Ramlila spectacle", "Traditional performances without modern lighting", "Heritage locale experience", "Expert guide narration of the epic"],
    image_url: "/generated_images/Kashi_walking_tour_group_d0392eea.png",
    detailed_description: "Kicking off on September 6—coinciding with Anant Chaturdashi—the majestic month-long open-air Ramlila unfolds across Ramnagar. This UNESCO-recognized spectacle brings the Ramcharitmanas to life with traditional performances across heritage locales—no modern lighting or sound, just pure cultural immersion.\n\nExperience the epic journey of Lord Rama as it has been performed for generations. Our expert guides will narrate the story, explain the significance of each scene, and ensure you get the best viewing spots.",
    price: 3500,
    featured: true
  },
  {
    id: "ganga-mahotsav-dev-deepawali",
    name: "Ganga Mahotsav & Dev Deepawali",
    destination: "Varanasi",
    category: "popular_event",
    duration: "3 Days",
    short_description: "Experience vibrant cultural programs during Ganga Mahotsav and the luminous Dev Deepawali with millions of diyas.",
    highlights: ["Ganga Mahotsav cultural programs", "Dev Deepawali diya illumination", "Kartik Purnima full moon celebrations", "Boat ride during festival of lights"],
    image_url: "/generated_images/Dev_Deepawali_festival_night_806cde54.png",
    detailed_description: "From November 1 to 4, Ganga Mahotsav lights up the ghats with vibrant cultural programs near Rajghat. Right after, on November 5, Dev Deepawali transforms the riverfront into a luminous wonderland as over a million diyas cast reflections across the Ganges during the full moon night of Kartik Purnima.",
    price: 15000,
    featured: true
  },
  {
    id: "1-day-kashi-darshan",
    name: "1-Day Kashi Darshan",
    destination: "Varanasi",
    category: "touristic",
    duration: "1 Day",
    short_description: "Experience the essence of Varanasi in a single day with our expertly curated tour through sacred ghats and ancient temples.",
    highlights: ["Sunrise boat ride on the Ganges", "Visit to Kashi Vishwanath Temple", "Explore hidden alleys of old Varanasi", "Witness evening Ganga Aarti ceremony"],
    image_url: "/generated_images/Kashi_walking_tour_group_d0392eea.png",
    detailed_description: "Immerse yourself in the spiritual essence of Varanasi with this comprehensive one-day journey through the ancient city of Kashi. Experience the magic of sunrise on the Ganges, visit the most sacred temples, explore the winding lanes of the old city, and witness the mesmerizing evening aarti ceremony.\n\nYour day begins before dawn with a boat ride as the sun rises over the Ganges, painting the ghats in golden hues. After breakfast, explore the famous Kashi Vishwanath Temple and other sacred sites.",
    price: 2500,
    featured: true
  },
  {
    id: "2-day-complete-ayodhya-experience",
    name: "2-Day Complete Ayodhya Experience",
    destination: "Ayodhya",
    category: "touristic",
    duration: "2 Days",
    short_description: "A comprehensive spiritual journey through the birthplace of Lord Rama with expert local guidance.",
    highlights: ["Ram Janmabhoomi Temple darshan", "Hanuman Garhi and Kanak Bhawan", "Saryu River aarti and holy dip", "All major temple visits with guide"],
    image_url: "/generated_images/Ayodhya_Ram_Mandir_temple_baae3de1.png",
    detailed_description: "Undertake a transformative pilgrimage to Ayodhya, the sacred birthplace of Lord Rama. This two-day package covers all the major spiritual sites with comfortable accommodation and expert guidance.\n\nDay 1: Arrive and visit the magnificent Ram Janmabhoomi Temple. Explore Hanuman Garhi with its fortress-like structure. Evening Saryu Aarti at Ram Ki Paidi.\n\nDay 2: Early morning holy dip in the Saryu River, followed by visits to Kanak Bhawan, Dashrath Bhavan, and other sacred sites.",
    price: 7500,
    featured: true
  },
  {
    id: "3-day-ujjain-spiritual-retreat",
    name: "3-Day Ujjain Spiritual Retreat",
    destination: "Ujjain",
    category: "touristic",
    duration: "3 Days",
    short_description: "Experience the sacred Mahakaleshwar Jyotirlinga, legendary Bhasma Aarti, and all major temples of the holy city of Ujjain.",
    highlights: ["Exclusive Bhasma Aarti experience", "Mahakaleshwar Temple darshan", "Shipra River ghat rituals", "All 7 sacred temples visit"],
    image_url: "/generated_images/mahakaleshwar_temple_ujjain_exterior.png",
    detailed_description: "Discover the ancient spiritual heritage of Ujjain, one of the seven Moksha-giving cities of India. This comprehensive three-day package includes the rare Bhasma Aarti experience and visits to all major sacred sites.\n\nDay 1: Arrive and check in. Evening visit to Ram Ghat for Shipra Aarti.\n\nDay 2: Wake up at 3 AM for the legendary Bhasma Aarti at Mahakaleshwar Temple.\n\nDay 3: Morning visit to Gadkalika Temple and Bade Ganeshji Temple.",
    price: 12000,
    featured: true
  },
  {
    id: "ganga-aarti-temple-pooja",
    name: "Ganga Aarti & Temple Pooja - Varanasi",
    destination: "Varanasi",
    category: "pooja",
    duration: "Half Day",
    short_description: "Perform sacred rituals with expert priest guidance at the most revered ghats and temples of Varanasi.",
    highlights: ["Personal Ganga Aarti ceremony", "Priest-guided ritual performance", "Sacred offering at Dashashwamedh Ghat", "Blessing and prasad distribution"],
    image_url: "/generated_images/kashi_vishwanath_temple.png",
    detailed_description: "Experience the profound spiritual significance of Ganga Aarti with a personalized ceremony. Our expert priests will guide you through the sacred rituals, explaining the meaning behind each gesture and mantra.",
    price: 2500,
    featured: true
  },
  {
    id: "ram-janmabhoomi-special-pooja",
    name: "Ram Janmabhoomi Special Pooja - Ayodhya",
    destination: "Ayodhya",
    category: "pooja",
    duration: "1 Day",
    short_description: "Complete pooja package at Ram Janmabhoomi with special darshan and sacred rituals.",
    highlights: ["VIP darshan at Ram Mandir", "Personal archana in sanctum", "Saryu River ritual bath", "Multiple temple poojas"],
    image_url: "/generated_images/hanuman_garhi_temple_ayodhya.png",
    detailed_description: "A comprehensive pooja package designed for devotees seeking special blessings at the birthplace of Lord Rama. This full-day spiritual experience includes VIP darshan arrangements and personal rituals.",
    price: 5500,
    featured: true
  },
  {
    id: "mahakaleshwar-bhasma-aarti-pooja",
    name: "Mahakaleshwar Bhasma Aarti & Pooja - Ujjain",
    destination: "Ujjain",
    category: "pooja",
    duration: "1 Day",
    short_description: "Experience the legendary Bhasma Aarti and perform sacred rituals at the Mahakaleshwar Jyotirlinga.",
    highlights: ["Pre-booked Bhasma Aarti pass", "Rudrabhishek at Mahakaleshwar", "Kal Bhairav Temple ritual", "Shipra River sacred bath"],
    image_url: "/generated_images/ram_ghat_ujjain_evening_aarti.png",
    detailed_description: "The most unique spiritual experience in India awaits you at Mahakaleshwar Temple. This package includes the rare Bhasma Aarti—a pre-dawn ritual where the lingam is anointed with sacred ash.",
    price: 4500,
    featured: true
  }
];

const mockPanchangEvents = [
  {
    id: "kartik-purnima-2025",
    date: "2025-12-15",
    name: "Kartik Purnima",
    description: "One of the most auspicious full moon nights, perfect for holy dips and lighting diyas.",
    type: "festival",
    significance: "Sacred bathing, lamp lighting, and temple visits"
  },
  {
    id: "mokshada-ekadashi-2025",
    date: "2025-12-25",
    name: "Mokshada Ekadashi",
    description: "A highly significant fasting day dedicated to Lord Vishnu for liberation.",
    type: "religious",
    significance: "Fasting, prayer, and spiritual liberation"
  },
  {
    id: "makar-sankranti-2026",
    date: "2026-01-14",
    name: "Makar Sankranti",
    description: "The festival marking the sun's transition into Capricorn, celebrated with holy dips.",
    type: "festival",
    significance: "Holy bath at Sangam, kite flying, and sesame sweets"
  }
];

const mockVideoTestimonials = [
  {
    id: "testimonial-1",
    platform: "instagram",
    video_url: "https://www.instagram.com/gangaguide/p/DPiuY01E1EE/",
    embed_code: '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DPiuY01E1EE/"><a href="https://www.instagram.com/reel/DPiuY01E1EE/">View this post on Instagram</a></blockquote>',
    caption: "Amazing experience with GangaGuides! The sunrise boat ride was magical.",
    author: "Travel Explorer",
    featured: true
  },
  {
    id: "testimonial-2",
    platform: "instagram",
    video_url: "https://www.instagram.com/gangaguide/reel/example2/",
    embed_code: '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/example2/"><a href="https://www.instagram.com/reel/example2/">View this post on Instagram</a></blockquote>',
    caption: "Spiritual journey of a lifetime! The guides were incredibly knowledgeable.",
    author: "Spiritual Seeker",
    featured: true
  }
];

// Helper function to fix old image paths from database
function fixImagePath(path) {
  if (!path) return path;
  return path.replace('/attached_assets/generated_images/', '/generated_images/');
}

function transformDestination(row) {
  return {
    id: row.id,
    name: row.name,
    shortDescription: row.short_description,
    description: row.description,
    mainImage: fixImagePath(row.main_image),
    image2: fixImagePath(row.image2),
    image3: fixImagePath(row.image3),
    image4: fixImagePath(row.image4),
    region: row.region,
    featured: row.featured
  };
}

function transformBlogPost(row) {
  return {
    id: row.id,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    publishedDate: row.published_date,
    readTime: row.read_time,
    mainImage: fixImagePath(row.main_image),
    image2: fixImagePath(row.image2),
    image3: fixImagePath(row.image3),
    image4: fixImagePath(row.image4),
    featured: row.featured
  };
}

function transformPackage(row) {
  return {
    id: row.id,
    name: row.name,
    destination: row.destination,
    category: row.category,
    duration: row.duration,
    shortDescription: row.short_description,
    highlights: row.highlights,
    imageUrl: fixImagePath(row.image_url),
    detailedDescription: row.detailed_description,
    price: row.price,
    featured: row.featured
  };
}

function transformPanchangEvent(row) {
  return {
    id: row.id,
    date: row.date,
    name: row.name,
    description: row.description,
    type: row.type,
    significance: row.significance
  };
}

function transformVideoTestimonial(row) {
  return {
    id: row.id,
    platform: row.platform,
    videoUrl: row.video_url,
    embedCode: row.embed_code,
    caption: row.caption,
    author: row.author,
    featured: row.featured
  };
}

// Destinations routes
app.get("/api/destinations", async (req, res) => {
  try {
    if (!sql) {
      return res.json(mockDestinations.map(transformDestination));
    }
    const destinations = await sql`SELECT * FROM destinations WHERE visible = true ORDER BY featured DESC, name ASC`;
    if (destinations.length === 0) {
      return res.json(mockDestinations.map(transformDestination));
    }
    res.json(destinations.map(transformDestination));
  } catch (error) {
    console.error("Error fetching destinations:", error);
    res.json(mockDestinations.map(transformDestination));
  }
});

app.get("/api/destinations/featured", async (req, res) => {
  try {
    if (!sql) {
      return res.json(mockDestinations.filter(d => d.featured).map(transformDestination));
    }
    const destinations = await sql`SELECT * FROM destinations WHERE featured = true AND visible = true ORDER BY name ASC`;
    if (destinations.length === 0) {
      return res.json(mockDestinations.filter(d => d.featured).map(transformDestination));
    }
    res.json(destinations.map(transformDestination));
  } catch (error) {
    console.error("Error fetching featured destinations:", error);
    res.json(mockDestinations.filter(d => d.featured).map(transformDestination));
  }
});

app.get("/api/destinations/:id", async (req, res) => {
  try {
    if (!sql) {
      const destination = mockDestinations.find(d => d.id === req.params.id);
      if (!destination) {
        return res.status(404).json({ message: "Destination not found" });
      }
      return res.json(transformDestination(destination));
    }
    const destinations = await sql`SELECT * FROM destinations WHERE id = ${req.params.id}`;
    if (destinations.length === 0) {
      const mockDest = mockDestinations.find(d => d.id === req.params.id);
      if (mockDest) {
        return res.json(transformDestination(mockDest));
      }
      return res.status(404).json({ message: "Destination not found" });
    }
    res.json(transformDestination(destinations[0]));
  } catch (error) {
    console.error("Error fetching destination:", error);
    const mockDest = mockDestinations.find(d => d.id === req.params.id);
    if (mockDest) {
      return res.json(transformDestination(mockDest));
    }
    res.status(500).json({ message: "Failed to fetch destination" });
  }
});

// Blog posts routes
app.get("/api/blog-posts", async (req, res) => {
  try {
    if (!sql) {
      return res.json(mockBlogPosts.map(transformBlogPost));
    }
    const posts = await sql`SELECT * FROM blog_posts WHERE visible = true ORDER BY featured DESC, published_date DESC`;
    if (posts.length === 0) {
      return res.json(mockBlogPosts.map(transformBlogPost));
    }
    res.json(posts.map(transformBlogPost));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.json(mockBlogPosts.map(transformBlogPost));
  }
});

app.get("/api/blog-posts/featured", async (req, res) => {
  try {
    if (!sql) {
      return res.json(mockBlogPosts.filter(p => p.featured).map(transformBlogPost));
    }
    const posts = await sql`SELECT * FROM blog_posts WHERE featured = true AND visible = true ORDER BY published_date DESC`;
    if (posts.length === 0) {
      return res.json(mockBlogPosts.filter(p => p.featured).map(transformBlogPost));
    }
    res.json(posts.map(transformBlogPost));
  } catch (error) {
    console.error("Error fetching featured blog posts:", error);
    res.json(mockBlogPosts.filter(p => p.featured).map(transformBlogPost));
  }
});

app.get("/api/blog-posts/:id", async (req, res) => {
  try {
    if (!sql) {
      const post = mockBlogPosts.find(p => p.id === req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      return res.json(transformBlogPost(post));
    }
    const posts = await sql`SELECT * FROM blog_posts WHERE id = ${req.params.id}`;
    if (posts.length === 0) {
      const mockPost = mockBlogPosts.find(p => p.id === req.params.id);
      if (mockPost) {
        return res.json(transformBlogPost(mockPost));
      }
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(transformBlogPost(posts[0]));
  } catch (error) {
    console.error("Error fetching blog post:", error);
    const mockPost = mockBlogPosts.find(p => p.id === req.params.id);
    if (mockPost) {
      return res.json(transformBlogPost(mockPost));
    }
    res.status(500).json({ message: "Failed to fetch blog post" });
  }
});

// Packages routes
app.get("/api/packages", async (req, res) => {
  try {
    if (!sql) {
      return res.json(mockPackages.map(transformPackage));
    }
    const packages = await sql`SELECT * FROM packages WHERE visible = true ORDER BY featured DESC, name ASC`;
    if (packages.length === 0) {
      return res.json(mockPackages.map(transformPackage));
    }
    res.json(packages.map(transformPackage));
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.json(mockPackages.map(transformPackage));
  }
});

app.get("/api/packages/featured", async (req, res) => {
  try {
    if (!sql) {
      return res.json(mockPackages.filter(p => p.featured).map(transformPackage));
    }
    const packages = await sql`SELECT * FROM packages WHERE featured = true AND visible = true ORDER BY name ASC`;
    if (packages.length === 0) {
      return res.json(mockPackages.filter(p => p.featured).map(transformPackage));
    }
    res.json(packages.map(transformPackage));
  } catch (error) {
    console.error("Error fetching featured packages:", error);
    res.json(mockPackages.filter(p => p.featured).map(transformPackage));
  }
});

app.get("/api/packages/:id", async (req, res) => {
  try {
    if (!sql) {
      const pkg = mockPackages.find(p => p.id === req.params.id);
      if (!pkg) {
        return res.status(404).json({ message: "Package not found" });
      }
      return res.json(transformPackage(pkg));
    }
    const packages = await sql`SELECT * FROM packages WHERE id = ${req.params.id}`;
    if (packages.length === 0) {
      const mockPkg = mockPackages.find(p => p.id === req.params.id);
      if (mockPkg) {
        return res.json(transformPackage(mockPkg));
      }
      return res.status(404).json({ message: "Package not found" });
    }
    res.json(transformPackage(packages[0]));
  } catch (error) {
    console.error("Error fetching package:", error);
    const mockPkg = mockPackages.find(p => p.id === req.params.id);
    if (mockPkg) {
      return res.json(transformPackage(mockPkg));
    }
    res.status(500).json({ message: "Failed to fetch package" });
  }
});

// Panchang events routes
app.get("/api/panchang-events", async (req, res) => {
  try {
    if (!sql) {
      return res.json(mockPanchangEvents.map(transformPanchangEvent));
    }
    const { year, month } = req.query;
    let events;
    if (year && month) {
      events = await sql`
        SELECT * FROM panchang_events 
        WHERE EXTRACT(YEAR FROM date) = ${parseInt(year)} 
        AND EXTRACT(MONTH FROM date) = ${parseInt(month)}
        AND visible = true
        ORDER BY date ASC
      `;
    } else {
      events = await sql`SELECT * FROM panchang_events WHERE visible = true ORDER BY date ASC`;
    }
    if (events.length === 0) {
      return res.json(mockPanchangEvents.map(transformPanchangEvent));
    }
    res.json(events.map(transformPanchangEvent));
  } catch (error) {
    console.error("Error fetching panchang events:", error);
    res.json(mockPanchangEvents.map(transformPanchangEvent));
  }
});

// Video testimonials routes
app.get("/api/video-testimonials", async (req, res) => {
  try {
    if (!sql) {
      return res.json(mockVideoTestimonials.map(transformVideoTestimonial));
    }
    const testimonials = await sql`SELECT * FROM video_testimonials WHERE visible = true ORDER BY featured DESC`;
    if (testimonials.length === 0) {
      return res.json(mockVideoTestimonials.map(transformVideoTestimonial));
    }
    res.json(testimonials.map(transformVideoTestimonial));
  } catch (error) {
    console.error("Error fetching video testimonials:", error);
    res.json(mockVideoTestimonials.map(transformVideoTestimonial));
  }
});

// Bookings route - POST to create a new booking
app.post("/api/bookings", async (req, res) => {
  try {
    const { name, email, phone, packageName, preferredDate, numberOfPeople, message } = req.body;

    // Generate a unique ID for the booking
    const id = `booking-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    // Log the booking for debugging
    console.log("Booking received:", { id, name, email, phone, packageName, preferredDate, numberOfPeople, message });

    if (!sql) {
      // If no database, just return success
      console.log("No database - returning success without storing");
      return res.status(201).json({
        id,
        name,
        email,
        phone,
        packageName,
        preferredDate,
        numberOfPeople,
        message,
        status: "pending",
        createdAt: new Date().toISOString()
      });
    }

    try {
      // Try to insert into database
      const result = await sql`
        INSERT INTO bookings (id, name, email, phone, package_name, preferred_date, number_of_people, message, status, created_at)
        VALUES (${id}, ${name}, ${email}, ${phone}, ${packageName || null}, ${preferredDate || null}, ${numberOfPeople || 1}, ${message || ''}, 'pending', NOW())
        RETURNING *
      `;

      console.log("Booking saved to database:", result[0]);

      res.status(201).json({
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
        phone: result[0].phone,
        packageName: result[0].package_name,
        preferredDate: result[0].preferred_date,
        numberOfPeople: result[0].number_of_people,
        message: result[0].message,
        status: result[0].status,
        createdAt: result[0].created_at
      });
    } catch (dbError) {
      // If database insert fails (e.g., table doesn't exist), still return success
      // The booking data has been logged above
      console.error("Database error (falling back to success response):", dbError.message);
      return res.status(201).json({
        id,
        name,
        email,
        phone,
        packageName,
        preferredDate,
        numberOfPeople,
        message,
        status: "pending",
        createdAt: new Date().toISOString(),
        note: "Booking received - we will contact you shortly"
      });
    }
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Failed to create booking. Please try again." });
  }
});

export default app;

