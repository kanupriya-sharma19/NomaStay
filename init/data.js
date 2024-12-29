const sampleListings = [
  {
    title: "Beachfront Villa in Goa",
    description:
"Escape to this beautiful beachfront villa in Goa, offering panoramic views of the Arabian Sea and easy access to sandy shores.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1709744873177-714d7ab0fe02?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4200,
    location: "Goa,India",
    country: "India",
    category:["beach","pools"]
  }, {
    title: "Mountain Retreat in Himachal Pradesh",
    description:
      "Relax in this cozy mountain retreat in Himachal Pradesh, surrounded by the stunning Himalayan peaks and lush greenery.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1444858440655-e7cf0269024e?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: " Himachal Pradesh,India",
    country: "India",
    category:["mountains","nature","trending"]
  },
  
  {
    title: "Himalayan Mountain Lodge in Gulmarg",
    description:"Escape to a cozy mountain lodge in Gulmarg, offering stunning views of snow-capped peaks, perfect for skiing and nature walks.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1551524391-f0c9c6836096?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 6000,
    location: "Gulmarg,India",
    country: "India",
    category:["mountains","nature","arctic"]
  },{
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "USA",
    category:["beach"]
  },
  {
    title: "Modern Loft in Worli",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listing[image]",

      url: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1200,
    location: "Mumbai,India",
    country: "India",
    category:["iconic cities"]
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "USA ",
    category:["mountains"]
  },{
    title: "Riverside Cottage in Kaziranga",
    description:
      "Experience the wilderness of Assam with a riverside cottage near Kaziranga National Park, known for its rhinos and rich wildlife, surrounded by natural beauty.",
    image: {
      filename: "listing[image]",
      url: "https://www.kaziranganationalpark-india.com/blog/wp-content/uploads/2024/04/kaziranga-safari-zones.jpg",
    },
    price: 3000,
    location: "Assam,India",
    country: "India",
    category:["camping","nature"]
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category:["trending","iconic cities"]
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },

    price: 800,
    location: "Portland",
    country: "USA",
    category:["nature"]
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },

    price: 2000,
    location: "Cancun",
    country: "Mexico",
        category:["beach"]
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },

    price: 900,
    location: "Lake Tahoe",
    country: "USA",
     category:["mountains"]
  },
  
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1548873902-8b69fb85030a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpJTIwbG9kZ2V8ZW58MHx8MHx8fDA%3D",
    },

    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category:["arctic","iconic cities","trending"]
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category:["mountains","nature"]
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },

    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
       category:["iconic cities","trending","camping","nature"]
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },

    price: 10000,
    location: "Fiji",
    country: "Fiji",
     category:["beach","nature"]
  },

 
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },

    price: 1800,
    location: "Bali,Indonesia",
    country: "Indonesia",
    category:["beach","trending","iconic cities"]
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: ["mountains"]
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1455382054916-9c12746cfb43?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1600,
    location: "Miami",
    country: "USA",
    category: ["iconic cities"]
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: ["beach"]
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listing[image]",
      url: "https://images.unsplash.com/photo-1587657774084-7121213cb1f9?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Scotland,United Kingdom",
    country: "United Kingdom",
    category: ["nature","iconic cities"]
  }
 
  // {
  //   title: "Desert Oasis in Dubai",
  //   description:
  //     "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
  //   image: {
  //     filename: "listing[image]",
  //     url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //   },

  //   price: 5000,
  //   location: "Dubai",
  //   country: "United Arab Emirates",
  // },
  // {
  //   title: "Rustic Log Cabin in Montana",
  //   description:
  //     "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
  //   image: {
  //     filename: "listing[image]",
  //     url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   price: 1100,
  //   location: "Montana",
  //   country: "USA",
  // },
  // {
  //   title: "Beachfront Villa in Greece",
  //   description:
  //     "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
  //     image: {
  //       filename: "listing[image]",
  //       url:  "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //     },
  //   price: 2500,
  //   location: "Mykonos",
  //   country: "Greece",
  // },
  // {
  //   title: "Eco-Friendly Treehouse Retreat",
  //   description:
  //     "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
  //     image: {
  //       filename: "listing[image]",
  //       url:   "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //     },
  //   price: 750,
  //   location: "Costa Rica",
  //   country: "Costa Rica",
  // },
  // {
  //   title: "Historic Cottage in Charleston",
  //   description:
  //     "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
  //     image: {
  //       filename: "listing[image]",
  //       url:   "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //     },
  //   price: 1600,
  //   location: "Charleston",
  //   country: "USA",
  // },
  // {
  //   title: "Modern Apartment in Tokyo",
  //   description:
  //     "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
  //     image: {
  //       filename: "listing[image]",
  //       url:    "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //     },
    
     

  //   price: 2000,
  //   location: "Tokyo",
  //   country: "Japan",
  // },
  // {
  //   title: "Lakefront Cabin in New Hampshire",
  //   description:
  //     "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
  //     image: {
  //       filename: "listing[image]",
  //       url:    "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  //     },
  //   price: 1200,
  //   location: "New Hampshire",
  //   country: "USA",
  // },
  // {
  //   title: "Luxury Villa in the Maldives",
  //   description:
  //     "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
  //     image: {
  //       filename: "listing[image]",
  //       url:  "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //     },
  //   price: 6000,
  //   location: "Maldives",
  //   country: "Maldives",
  // },
  // {
  //   title: "Ski Chalet in Aspen",
  //   description:
  //     "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
  //     image: {
  //       filename: "listing[image]",
  //       url:   "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",

  //     },

  //   price: 4000,
  //   location: "Aspen",
  //   country: "USA",
  // },
  // {
  //   title: "Secluded Beach House in Costa Rica",
  //   description:
  //     "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
  //     image: {
  //       filename: "listing[image]",
  //       url:   "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",

  //     },
   
      

  //   price: 1800,
  //   location: "Costa Rica",
  //   country: "Costa Rica",
  // },
];

export const data = { sampleListings };
