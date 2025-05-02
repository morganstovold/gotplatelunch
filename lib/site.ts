import LocoMoco from "@/public/loco-moco.jpg";
import SpamMusubi from "@/public/spam-musubi.jpg";
import KaluaPork from "@/public/kalua-pork.jpg";
import ChickenKatsu from "@/public/chicken-katsu.jpg";
import MacaroniSalad from "@/public/placeholder.jpg";
import UltimateLocoMoco from "@/public/ultimate-loco-moto.jpg";
import SteakGravy from "@/public/steak-gravy.jpg";
import BBQChicken from "@/public/bbq-chicken.jpg";
import SpicyBBQChicken from "@/public/bbq-chicken.jpg";
// import PlaceholderImage from "@/public/placeholder.jpg";
import PlaceholderImage from "@/public/bbq-chicken.jpg";

export const siteConfig = {
  menuItems: [
    {
      id: "loco-moco",
      name: "Loco Moco",
      description: "Beef patties over rice with eggs and brown gravy",
      longDescription:
        "Two 1/4 lb. seasoned, FRESH (never frozen) ground beef patties, cooked medium-well, and served over two over-easy fried eggs. Smothered in our brown gravy, then topped off with fresh green onions.",
      price: "17.99",
      image: LocoMoco,
      categoryId: "locals-favorites",
      isFeatured: true,
      dietaryInfo: ["Contains Eggs"],
      ingredients: [
        "Ground beef patties", 
        "White rice", 
        "Fried eggs", 
        "Brown gravy", 
        "Green onions"
      ],
      nutritionalInfo: "High in protein and carbohydrates. Contains eggs.",
    },
    {
      id: "ultimate-loco-moco",
      name: "Ultimate Loco Moco",
      description: "Beef patties topped with SPAM and eggs, smothered in gravy",
      longDescription:
        "Two 1/4 lb. seasoned, FRESH (never frozen) ground beef patties, cooked medium-well, and topped with two slices of grilled SPAM and two over-easy fried eggs. Smothered in our brown gravy, then topped off with fresh green onions.",
      price: "19.99",
      image: UltimateLocoMoco,
      categoryId: "locals-favorites",
      isFeatured: true,
      dietaryInfo: ["Contains Eggs"],
      ingredients: [
        "Ground beef patties",
        "Grilled SPAM",
        "White rice",
        "Fried eggs",
        "Brown gravy",
        "Green onions"
      ],
      nutritionalInfo: "High in protein and sodium. Contains eggs.",
    },
    {
      id: "hamburger-steak",
      name: "Hamburger Steak w/ Gravy",
      description: "Beef patties smothered in gravy with green onions",
      longDescription:
        "Two 1/4 lb. seasoned, FRESH (never frozen) ground beef patties, cooked medium-well. Smothered in our brown gravy, then topped off with fresh green onions.",
      price: "16.49",
      image: SteakGravy,
      categoryId: "locals-favorites",
      isFeatured: false,
      ingredients: [
        "Ground beef patties",
        "White rice", 
        "Brown gravy", 
        "Green onions",
        "Macaroni salad"
      ],
      nutritionalInfo: "High in protein. Served with rice and macaroni salad.",
    },
    {
      id: "kalua-pork",
      name: "Kalua Pork & Cabbage",
      description: "Traditional slow-cooked pork with cabbage",
      longDescription:
        "Our version of the traditional Kalua pig, slow-cooked for 24+ hours to perfection. It's smokey and tender, with just the right amount of salty.",
      price: "16.49",
      image: KaluaPork,
      categoryId: "locals-favorites",
      isFeatured: true,
      dietaryInfo: ["Gluten-Free"],
      ingredients: [
        "Slow-cooked pork shoulder",
        "Cabbage",
        "Hawaiian sea salt",
        "White rice",
        "Macaroni salad",
      ],
      nutritionalInfo: "High in protein. Served with rice and macaroni salad.",
    },
    {
      id: "chicken-katsu",
      name: "Chicken Katsu",
      description: "Panko-breaded chicken thighs with katsu sauce",
      longDescription:
        "Perfectly-seasoned chicken thighs, breaded in Panko (Japanese breadcrumbs), then deep-fried to a golden brown. Served with our house special Katsu sauce.",
      price: "17.49",
      image: ChickenKatsu,
      categoryId: "locals-favorites",
      isFeatured: true,
      ingredients: [
        "Chicken thighs",
        "Panko breadcrumbs",
        "Katsu sauce",
        "White rice",
        "Macaroni salad",
      ],
      nutritionalInfo: "Good source of protein. Contains gluten in breadcrumbs.",
    },
    {
      id: "bbq-chicken",
      name: "BBQ Chicken",
      description: "Marinated chicken thighs with Original 'B' Sauce",
      longDescription:
        "Best seller! Boneless, skinless chicken thighs marinated in our special marinade blend (made with a soy sauce and sesame oil base). Served with our Original 'B' Sauce.",
      price: "16.49",
      image: BBQChicken,
      categoryId: "locals-favorites",
      isFeatured: true,
      ingredients: [
        "Chicken thighs",
        "Special marinade blend",
        "Original 'B' Sauce",
        "White rice",
        "Macaroni salad",
      ],
      nutritionalInfo: "Good source of protein. Contains soy.",
    },
    {
      id: "spicy-bbq-chicken",
      name: "Spicy BBQ Chicken",
      description: "BBQ chicken tossed in 'Triple Chili' spicy sauce",
      longDescription:
        "Our famous BBQ chicken, tossed in 'Triple Chili' spicy sauce - We mean it when we say spicy!",
      price: "17.49",
      image: SpicyBBQChicken,
      categoryId: "locals-favorites",
      isFeatured: false,
      spicyLevel: 3,
      ingredients: [
        "Chicken thighs",
        "Special marinade blend",
        "Triple Chili spicy sauce",
        "White rice",
        "Macaroni salad",
      ],
      nutritionalInfo: "Good source of protein. Contains soy. Very spicy.",
    },
    {
      id: "bbq-pork",
      name: "BBQ Pork",
      description: "Marinated pork with grilled onions",
      longDescription:
        "Thinly-sliced pork marinated in our special marinade blend (made with a soy sauce and sesame oil base). Cooked with grilled onions and topped with green onions.",
      price: "16.49",
      image: PlaceholderImage,
      categoryId: "locals-favorites",
      isFeatured: false,
      ingredients: [
        "Thinly-sliced pork",
        "Special marinade blend",
        "Grilled onions",
        "Green onions",
        "White rice",
        "Macaroni salad",
      ],
      nutritionalInfo: "Good source of protein. Contains soy.",
    },
    {
      id: "mixed-plate",
      name: "Da 'MIXED PLATE'",
      description: "BBQ Chicken, Grilled SPAM, and Portuguese Sausage",
      longDescription:
        "A combination of our popular items: BBQ Chicken, Grilled SPAM, and Portuguese Sausage. Served with 2 scoops of rice and your choice of side.",
      price: "19.99",
      image: PlaceholderImage,
      categoryId: "locals-favorites",
      isFeatured: false,
      ingredients: [
        "BBQ Chicken",
        "Grilled SPAM",
        "Portuguese Sausage",
        "White rice",
        "Choice of side",
      ],
      nutritionalInfo: "High in protein and sodium.",
    },
    {
      id: "waikiki-platter",
      name: "Waikiki Platter for 2",
      description: "Hamburger Steak, BBQ Chicken, Kalua Pork & SPAM Musubi",
      longDescription:
        "A feast for two featuring Hamburger Steak (with gravy), BBQ Chicken, Kalua Pork & Cabbage, and SPAM Musubi. Served with 2 scoops of rice and your choice of side.",
      price: "35.99",
      image: PlaceholderImage,
      categoryId: "locals-favorites",
      isFeatured: false,
      ingredients: [
        "Hamburger Steak with gravy",
        "BBQ Chicken",
        "Kalua Pork & Cabbage",
        "SPAM Musubi",
        "White rice",
        "Choice of side",
      ],
      nutritionalInfo: "Serves 2. High in protein.",
    },
    {
      id: "elua-combo-plate",
      name: "Elua Combo Plate",
      description: "Choose 2 from our Local's Favorites",
      longDescription:
        "Choose 2 from the following: Hamburger Steak (with gravy), BBQ Chicken, Chicken Katsu, Kalua Pork & Cabbage, BBQ Pork, or SPAM Katsu. Served with 2 scoops of rice and your choice of side.",
      price: "18.99",
      image: PlaceholderImage,
      categoryId: "locals-favorites",
      isFeatured: false,
      ingredients: [
        "Choice of 2 proteins",
        "White rice",
        "Choice of side",
      ],
      nutritionalInfo: "High in protein. Varies based on selection.",
    },
    {
      id: "spam-musubi",
      name: "SPAM Musubi",
      description: "Grilled SPAM and rice wrapped in nori",
      longDescription:
        "Two slices of grilled SPAM served in between seasoned rice, all wrapped in Nori (seaweed). Topped with Furikake. (Double-rack cut into 6 pieces)",
      price: "6.99",
      image: SpamMusubi,
      categoryId: "pupus-appetizers",
      isFeatured: true,
      ingredients: [
        "SPAM",
        "Seasoned rice",
        "Nori seaweed",
        "Furikake seasoning",
      ],
      nutritionalInfo: "Good source of protein. Contains sodium.",
    },
    {
      id: "muwasabi",
      name: "MuWasabi",
      description: "SPAM Musubi topped with Wasabi aioli",
      longDescription:
        "Our standard SPAM Musubi, topped with Wasabi aioli. Served with garlic soy sauce.",
      price: "7.99",
      image: PlaceholderImage,
      categoryId: "pupus-appetizers",
      isFeatured: false,
      ingredients: [
        "SPAM",
        "Seasoned rice",
        "Nori seaweed",
        "Furikake seasoning",
        "Wasabi aioli",
        "Garlic soy sauce",
      ],
      nutritionalInfo: "Contains soy and sodium.",
    },
    {
      id: "portuguese-sausage-musubi",
      name: "Portuguese Sausage Musubi",
      description: "Portuguese sausage and rice wrapped in nori",
      longDescription:
        "Two slices of fried Portuguese sausage served in between seasoned rice, all wrapped in Nori (seaweed). Topped with Furikake. (Double-rack cut into 6 pieces)",
      price: "7.99",
      image: PlaceholderImage,
      categoryId: "pupus-appetizers",
      isFeatured: false,
      ingredients: [
        "Portuguese sausage",
        "Seasoned rice",
        "Nori seaweed",
        "Furikake seasoning",
      ],
      nutritionalInfo: "Contains sodium.",
    },
    {
      id: "spam-katsu-musubi",
      name: "SPAM Katsu Musubi",
      description: "Breaded deep-fried SPAM with rice wrapped in nori",
      longDescription:
        "Two slices of breaded SPAM, deep fried and served in between seasoned rice, all wrapped in Nori (seaweed). Topped with Furikake. (Double-rack cut into 6 pieces)",
      price: "8.99",
      image: PlaceholderImage,
      categoryId: "pupus-appetizers",
      isFeatured: false,
      ingredients: [
        "Breaded SPAM",
        "Seasoned rice",
        "Nori seaweed",
        "Furikake seasoning",
      ],
      nutritionalInfo: "Contains gluten, sodium.",
    },
    {
      id: "crispy-kalua-tots",
      name: "Crispy Kalua Tots",
      description: "Tater tots topped with kalua pork, sauce and cheese",
      longDescription:
        "Crispy kalua pork served on top of tater tots drizzled with our special house sauce and shredded cheese.",
      price: "9.99",
      image: PlaceholderImage,
      categoryId: "pupus-appetizers",
      isFeatured: false,
      ingredients: [
        "Tater tots",
        "Kalua pork",
        "Special house sauce",
        "Shredded cheese",
      ],
      nutritionalInfo: "Contains dairy.",
    },
    {
      id: "garlic-shaka-fries",
      name: "Garlic 'Shaka' Fries",
      description: "French fries with Furikake and garlic seasoning",
      longDescription:
        "French fries tossed in Furikake and a special garlic seasoning.",
      price: "7.99",
      image: PlaceholderImage,
      categoryId: "pupus-appetizers",
      isFeatured: false,
      ingredients: [
        "French fries",
        "Furikake",
        "Garlic seasoning",
      ],
      nutritionalInfo: "Vegetarian friendly.",
    },
    {
      id: "portuguese-sausage-eggs-rice",
      name: "Portuguese Sausage, Eggs & Rice",
      description: "Hawaiian sausage with eggs, rice and mac salad",
      longDescription:
        "Local's favorite sausage - Portuguese sausage from Hawai'i (Redondo or Gouvea's brand) with two fried eggs, two scoops of rice, and one scoop of Mac salad.",
      price: "16.99",
      image: PlaceholderImage,
      categoryId: "island-favorites",
      isFeatured: false,
      dietaryInfo: ["Contains Eggs"],
      ingredients: [
        "Portuguese sausage",
        "Fried eggs",
        "White rice",
        "Macaroni salad",
      ],
      nutritionalInfo: "Contains eggs. High in protein.",
    },
    {
      id: "spam-eggs-rice",
      name: "SPAM, Eggs & Rice",
      description: "Fried SPAM with eggs, rice and mac salad",
      longDescription:
        "Four pieces of fried SPAM served with two fried eggs, two scoops of rice, and one scoop of Mac salad.",
      price: "14.99",
      image: PlaceholderImage,
      categoryId: "island-favorites",
      isFeatured: false,
      dietaryInfo: ["Contains Eggs"],
      ingredients: [
        "SPAM",
        "Fried eggs",
        "White rice",
        "Macaroni salad",
      ],
      nutritionalInfo: "Contains eggs. High in sodium.",
    },
    {
      id: "spam-katsu",
      name: "SPAM Katsu",
      description: "Panko breaded deep-fried SPAM with garlic soy sauce",
      longDescription:
        "Four pieces of SPAM, breaded in panko, and deep-fried to a golden-brown. Served with garlic soy sauce, two scoops of rice, and one scoop of Mac salad.",
      price: "16.99",
      image: PlaceholderImage,
      categoryId: "island-favorites",
      isFeatured: false,
      ingredients: [
        "SPAM",
        "Panko breadcrumbs",
        "Garlic soy sauce",
        "White rice",
        "Macaroni salad",
      ],
      nutritionalInfo: "Contains gluten and sodium.",
    },
    {
      id: "kalua-pork-grilled-cheese",
      name: "Kalua Pork Grilled Cheese Sandwiches",
      description: "Kalua pork and cheese on sourdough with fries",
      longDescription:
        "Kalua pork and two slices of American-Swiss cheese served on grilled sourdough bread. Includes a side of French fries.",
      price: "14.99",
      image: PlaceholderImage,
      categoryId: "island-favorites",
      isFeatured: false,
      ingredients: [
        "Kalua pork",
        "American-Swiss cheese",
        "Sourdough bread",
        "French fries",
      ],
      nutritionalInfo: "Contains dairy and gluten.",
    },
    {
      id: "stir-fried-udon",
      name: "Stir-Fried Udon Noodles",
      description: "Udon noodles with vegetables and teriyaki glaze",
      longDescription:
        "Thick udon noodles stir-fried with red peppers, onions, and cabbage with a teriyaki glaze.",
      price: "10.99",
      image: PlaceholderImage,
      categoryId: "island-favorites",
      isFeatured: false,
      ingredients: [
        "Udon noodles",
        "Red peppers",
        "Onions",
        "Cabbage",
        "Teriyaki glaze",
      ],
      nutritionalInfo: "Contains gluten and soy.",
    },
    {
      id: "pineapple-green-salad",
      name: "Pineapple Green Salad",
      description: "Mixed greens with grilled pineapple and house dressing",
      longDescription:
        "A mix of romaine lettuce, green cabbage, and carrots topped with grilled pineapples. Served with our house-made Pineapple Vinaigrette.",
      price: "9.99",
      image: PlaceholderImage,
      categoryId: "island-favorites",
      isFeatured: false,
      dietaryInfo: ["Vegetarian"],
      ingredients: [
        "Romaine lettuce",
        "Green cabbage",
        "Carrots",
        "Grilled pineapples",
        "Pineapple Vinaigrette",
      ],
      nutritionalInfo: "Vegetarian friendly. Low in calories.",
    },
    {
      id: "macaroni-salad",
      name: "Mac Salad",
      description: "Classic Hawaiian-style macaroni salad",
      longDescription:
        "Our Hawaiian-style Mac Salad is creamy and slightly sweet, the perfect side dish to complete any plate lunch.",
      price: "1.99",
      image: MacaroniSalad,
      categoryId: "sides",
      isFeatured: false,
      dietaryInfo: ["Vegetarian"],
      ingredients: [
        "Elbow macaroni",
        "Mayonnaise",
        "Carrots",
        "Sugar",
      ],
      nutritionalInfo: "Contains gluten, eggs, and dairy. Vegetarian friendly.",
    },
    {
      id: "volcano-chicken-chips",
      name: "Volcano Chicken & Chips",
      description: "Spicy minced chicken with jalapeños, habanero, and tortilla chips",
      longDescription:
        "Minced BBQ chicken, jalapeños, habanero and red chili peppers tossed in lime dressing. Served with fresh corn tortilla chips.",
      price: "Sold out",
      image: PlaceholderImage,
      categoryId: "pupus-appetizers",
      isFeatured: false,
      spicyLevel: 3,
      ingredients: [
        "Minced BBQ chicken",
        "Jalapeños",
        "Habanero peppers",
        "Red chili peppers",
        "Lime dressing",
        "Corn tortilla chips"
      ],
      nutritionalInfo: "Spicy. Contains gluten.",
      isAvailable: false
    },
    {
      id: "saimin-noodle-soup",
      name: "Saimin Noodle Soup",
      description: "Hawaiian egg noodle soup with choice of protein",
      longDescription:
        "Skinny egg noodle soup topped with green onions and your choice of SPAM, BBQ Chicken, or Portuguese Sausage. Made with S & S brand Saimin noodles from Hawaii, which is one of the oldest & best Saimin noodles.",
      price: "Sold out",
      image: PlaceholderImage,
      categoryId: "island-favorites",
      isFeatured: false,
      ingredients: [
        "S & S brand Saimin noodles",
        "Choice of protein (SPAM, BBQ Chicken, or Portuguese Sausage)",
        "Green onions",
        "Broth"
      ],
      nutritionalInfo: "Contains gluten and eggs.",
      isAvailable: false
    },
    {
      id: "green-salad",
      name: "Green Salad",
      description: "Fresh mixed greens side salad",
      longDescription:
        "Fresh mixed greens with vegetables, perfect as a side to any meal.",
      price: "4.99",
      image: PlaceholderImage,
      categoryId: "sides",
      isFeatured: false,
      dietaryInfo: ["Vegetarian", "Gluten-Free"],
      ingredients: [
        "Mixed greens",
        "Assorted vegetables",
        "Choice of dressing"
      ],
      nutritionalInfo: "Low calorie. Vegetarian friendly."
    },
    {
      id: "sweet-rolls",
      name: "Sweet Rolls (2)",
      description: "Two fluffy Hawaiian sweet rolls",
      longDescription:
        "Two soft, fluffy Hawaiian-style sweet rolls, perfect for soaking up gravy or enjoying on the side.",
      price: "1.99",
      image: PlaceholderImage,
      categoryId: "sides",
      isFeatured: false,
      ingredients: [
        "Flour",
        "Sugar",
        "Butter",
        "Yeast"
      ],
      nutritionalInfo: "Contains gluten and dairy."
    },
    {
      id: "fried-egg",
      name: "Egg (1)",
      description: "Single fried egg",
      longDescription:
        "One fried egg, add it to any plate or enjoy on the side.",
      price: "2.50",
      image: PlaceholderImage,
      categoryId: "sides",
      isFeatured: false,
      dietaryInfo: ["Contains Eggs"],
      ingredients: [
        "Egg"
      ],
      nutritionalInfo: "Good source of protein. Contains eggs."
    },
    {
      id: "french-fries",
      name: "French Fries",
      description: "Crispy golden french fries",
      longDescription:
        "Crispy golden french fries, perfectly seasoned and fried to a golden brown.",
      price: "5.99",
      image: PlaceholderImage,
      categoryId: "sides",
      isFeatured: false,
      dietaryInfo: ["Vegetarian"],
      ingredients: [
        "Potatoes",
        "Sea salt",
        "Vegetable oil"
      ],
      nutritionalInfo: "Vegetarian friendly."
    },
    {
      id: "rice",
      name: "Rice",
      description: "Steamed white rice",
      longDescription:
        "A side of perfectly steamed white rice, a staple of Hawaiian plate lunches.",
      price: "1.39",
      image: PlaceholderImage,
      categoryId: "sides",
      isFeatured: false,
      dietaryInfo: ["Vegetarian", "Gluten-Free", "Vegan"],
      ingredients: [
        "White rice"
      ],
      nutritionalInfo: "Gluten-free. Vegan friendly."
    },
    {
      id: "gravy",
      name: "Gravy",
      description: "House-made brown gravy",
      longDescription:
        "A side of our savory brown gravy, perfect for adding to rice or any plate lunch item.",
      price: "2.99",
      image: PlaceholderImage,
      categoryId: "sides",
      isFeatured: false,
      ingredients: [
        "Beef stock",
        "Flour",
        "Seasonings"
      ],
      nutritionalInfo: "Contains gluten."
    },
    {
      id: "crispy-tots",
      name: "Crispy Tots",
      description: "Golden-brown tater tots",
      longDescription:
        "Golden-brown tater tots, crispy on the outside and fluffy on the inside.",
      price: "6.49",
      image: PlaceholderImage,
      categoryId: "sides",
      isFeatured: false,
      dietaryInfo: ["Vegetarian"],
      ingredients: [
        "Potatoes",
        "Vegetable oil",
        "Sea salt"
      ],
      nutritionalInfo: "Vegetarian friendly."
    },
    {
      id: "hawaiian-sun-juice",
      name: "Hawaiian Sun Juice",
      description: "Tropical fruit juice from Hawaii",
      longDescription:
        "Authentic Hawaiian Sun tropical fruit juice, imported directly from Hawaii.",
      price: "2.39",
      image: PlaceholderImage,
      categoryId: "drinks",
      isFeatured: false,
      dietaryInfo: ["Vegetarian", "Gluten-Free"],
      ingredients: [
        "Fruit juice",
        "Cane sugar"
      ],
      nutritionalInfo: "Contains natural sugars."
    },
    {
      id: "canned-soda",
      name: "Canned Soda",
      description: "Assorted soft drinks",
      longDescription:
        "Choose from a variety of canned soft drinks.",
      price: "Sold out",
      image: PlaceholderImage,
      categoryId: "drinks",
      isFeatured: false,
      ingredients: [
        "Varies by selection"
      ],
      nutritionalInfo: "Contains sugars and/or artificial sweeteners.",
      isAvailable: false
    },
    {
      id: "bottled-water",
      name: "Bottled Water",
      description: "Refreshing purified water",
      longDescription:
        "Refreshing bottled purified water.",
      price: "Sold out",
      image: PlaceholderImage,
      categoryId: "drinks",
      isFeatured: false,
      dietaryInfo: ["Vegetarian", "Gluten-Free", "Vegan"],
      ingredients: [
        "Purified water"
      ],
      nutritionalInfo: "Hydrating and calorie-free.",
      isAvailable: false
    },
  ],

  testimonials: [
    {
      quote:
        "Amazing food, the best Hawaiian food I have ever had! Also, the location is in such a beautiful area!",
      author: "Patty J.",
      location: "Benicia, CA",
    },
    {
      quote:
        "Great food, friendly service, incredible view, & island tunes. What more could you want?",
      author: "D L.",
      location: "Benicia, CA",
    },
    {
      quote:
        "My fav restaurant in town. They're back and better than ever -- love their new 9th St location.",
      author: "Mark C.",
      location: "Benicia, CA",
    },
  ],
  
  categories: [
    {
      id: "pupus-appetizers",
      name: "Pupus | Appetizers",
      description: "Hawaiian-style appetizers and small bites"
    },
    {
      id: "island-favorites",
      name: "Island Favorites",
      description: "Classic dishes from the islands"
    },
    {
      id: "locals-favorites",
      name: "Local's Favorites",
      description: "Popular plate lunch options served with rice and mac salad"
    },
    {
      id: "sides",
      name: "Sides",
      description: "Add-ons to complete your meal"
    },
    {
      id: "drinks",
      name: "Drinks",
      description: "Beverages to complement your meal"
    }
  ]
};
