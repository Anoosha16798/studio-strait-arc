export const BRAND_DATA = {
    logo: "/assets/SA-Logo_Black.png", // Ensure file is at public/assets/SA-Logo_Black.png
    name: "Studio Strait Arc",
    socials: [
      { name: "Instagram", url: "https://www.instagram.com/straitarc_studio?igsh=MWZkOXZsYW95MXFtcw==" },
      { name: "LinkedIn", url: "https://linkedin.com" }
    ],
    contact: {
      email: "studiostraitarc@gmail.com",
      address: "Studio 42, Creative Block, Mumbai, India"
    }
  };
  
  export const PROJECTS = [
    {
      id: "three-fold-groove",
      title: "Three Fold Groove",
      year: "2024",
      location: "Mumbai",
      thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
      fullStory: [
        {
          type: "text-block",
          content: "While searching for an interior designer, we consulted multiple agencies but never felt fully aligned. With Sachitra, everything clicked instantly."
        },
        {
          type: "testimonial",
          quote: "Every preference, every little requirement she took it all into account and turned our space into something even better than we imagined.",
          author: "Three Fold Groove Client"
        }
      ]
    },
    {
      id: "oasis",
      title: "Oasis",
      year: "2023",
      location: "Pune",
      thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
      fullStory: [
        {
          type: "text-block",
          content: "The designer’s emphasis on lighter colors made the space feel bright and open during the day, yet inviting in the evening."
        },
        {
          type: "testimonial",
          quote: "The hall, with its striking wall painting, stands out as a welcoming feature for guests, while the kids' room sit-out offers a cozy yet stylish retreat.",
          author: "Oasis Resident"
        }
      ]
    }
  ];
  
  export const ABOUT_CONTENT = {
    values: [
      { title: "Listen First", detail: "We transform vague thoughts into beautiful, practical designs." },
      { title: "Craftsmanship", detail: "Our team of carpenters showcases excellent craftsmanship built to last." }
    ],
    clients: ["The Oberoi Group", "Tech Park Bangalore", "Private Villa #9"],
    team: [
      { name: "Sachitra", role: "Principal Architect", bio: "Leading the creative vision with a focus on personalized designs." }
    ]
  };