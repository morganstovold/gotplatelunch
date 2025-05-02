import LocoMoco from "@/public/loco-moco.jpg";
import SpamMusubi from "@/public/spam-musubi.jpg";
import KaluaPork from "@/public/kalua-pork.jpg";
import ChickenKatsu from "@/public/chicken-katsu.jpg";
import SpamFriedRice from "@/public/placeholder.jpg";
import AcaiBowl from "@/public/poke-bowl.jpg";
import GarlicShrimp from "@/public/placeholder.jpg";
import TeriyakiChicken from "@/public/placeholder.jpg";
import SpicyPoke from "@/public/placeholder.jpg";
import MacaroniSalad from "@/public/placeholder.jpg";

export const siteConfig = {
  menuItems: [
    {
      id: "loco-moco",
      name: "Loco Moco",
      description:
        "Hamburger steak over rice, topped with eggs and brown gravy",
      longDescription:
        "Our famous Loco Moco features a juicy handmade hamburger steak served over a bed of steamed white rice, topped with two perfectly fried eggs and our house-made brown gravy. This classic Hawaiian comfort food is a hearty meal any time of day, offering the perfect balance of flavors and textures.",
      price: "15.99",
      image: LocoMoco,
      category: "Breakfast",
      isFeatured: true,
      dietaryInfo: ["Contains Eggs"],
      ingredients: [
        "Hamburger steak",
        "White rice",
        "Fried eggs",
        "Brown gravy",
        "Green onions",
      ],
      nutritionalInfo: "High in protein and carbohydrates. Contains eggs.",
    },
    {
      id: "spam-fried-rice",
      name: "Spam Fried Rice",
      description: "Classic Hawaiian breakfast with eggs and green onions",
      longDescription:
        "Our Spam Fried Rice is a beloved Hawaiian breakfast staple. We combine cubes of crispy fried Spam with fluffy rice, scrambled eggs, and fresh green onions, all stir-fried to perfection. The result is a delicious blend of savory flavors with a touch of sweetness from the Spam.",
      price: "13.99",
      image: SpamFriedRice,
      category: "Breakfast",
      isFeatured: false,
      dietaryInfo: ["Contains Eggs"],
      ingredients: ["Spam", "White rice", "Eggs", "Green onions", "Soy sauce"],
      nutritionalInfo: "Contains eggs and sodium. Good source of protein.",
    },
    {
      id: "acai-bowl",
      name: "Açaí Bowl",
      description: "Fresh açaí blend topped with granola, banana, and honey",
      longDescription:
        "Our refreshing Açaí Bowl features a thick, smoothie-like blend of frozen açaí berries topped with crunchy granola, fresh banana slices, and a drizzle of local Hawaiian honey. This nutritious and delicious bowl is the perfect way to start your day or enjoy as a refreshing snack.",
      price: "12.99",
      image: AcaiBowl,
      category: "Breakfast",
      isFeatured: false,
      dietaryInfo: ["Vegetarian"],
      ingredients: [
        "Açaí berry blend",
        "Granola",
        "Fresh banana",
        "Hawaiian honey",
        "Coconut flakes",
      ],
      nutritionalInfo:
        "Rich in antioxidants. Vegetarian friendly. Contains natural sugars.",
    },
    {
      id: "kalua-pork",
      name: "Kalua Pork",
      description:
        "Traditional Hawaiian pulled pork, slow-cooked to perfection",
      longDescription:
        "Our Kalua Pork is prepared in the traditional Hawaiian style, slow-cooked until tender and infused with a subtle smoky flavor. Served with two scoops of steamed rice and one scoop of our housemade macaroni salad, this authentic plate lunch will transport you straight to the islands.",
      price: "14.99",
      image: KaluaPork,
      category: "Lunch/Dinner",
      isFeatured: true,
      dietaryInfo: ["Gluten-Free"],
      ingredients: [
        "Slow-cooked pork shoulder",
        "Hawaiian sea salt",
        "Banana leaves",
        "White rice",
        "Macaroni salad",
      ],
      nutritionalInfo:
        "High in protein. Gluten-free. Contains dairy in macaroni salad.",
    },
    {
      id: "chicken-katsu",
      name: "Chicken Katsu",
      description: "Crispy panko-breaded chicken cutlet with tonkatsu sauce",
      longDescription:
        "Our Chicken Katsu features thin slices of chicken breast coated in crispy Japanese panko breadcrumbs and fried to golden perfection. Served with our homemade tonkatsu sauce, two scoops of white rice, and one scoop of mac salad, this plate lunch combines Japanese and Hawaiian influences for a truly satisfying meal.",
      price: "13.99",
      image: ChickenKatsu,
      category: "Lunch/Dinner",
      isFeatured: true,
      ingredients: [
        "Chicken breast",
        "Panko breadcrumbs",
        "Tonkatsu sauce",
        "White rice",
        "Macaroni salad",
      ],
      nutritionalInfo:
        "Good source of protein. Contains gluten in breadcrumbs.",
    },
    {
      id: "garlic-shrimp",
      name: "Garlic Shrimp",
      description: "North Shore style garlic shrimp with butter and lemon",
      longDescription:
        "Inspired by North Shore's famous shrimp trucks, our Garlic Shrimp features succulent jumbo shrimp sautéed in a flavorful butter-garlic sauce with a hint of lemon. Served with two scoops of rice and our house mac salad, this dish brings the taste of Oahu's North Shore to your plate.",
      price: "16.99",
      image: GarlicShrimp,
      category: "Lunch/Dinner",
      isFeatured: false,
      dietaryInfo: ["Gluten-Free"],
      ingredients: [
        "Jumbo shrimp",
        "Garlic butter sauce",
        "Lemon",
        "White rice",
        "Macaroni salad",
      ],
      nutritionalInfo: "Rich in protein. Contains shellfish and dairy.",
    },
    {
      id: "teriyaki-chicken",
      name: "Teriyaki Chicken",
      description: "Grilled chicken glazed with our house teriyaki sauce",
      longDescription:
        "Our Teriyaki Chicken features tender chicken thighs marinated in our house-made teriyaki sauce, then grilled to perfection. The sweet and savory glaze caramelizes beautifully, creating a delicious outer layer while keeping the meat juicy inside. Served with two scoops of rice and one scoop of mac salad.",
      price: "13.99",
      image: TeriyakiChicken,
      category: "Lunch/Dinner",
      isFeatured: true,
      ingredients: [
        "Chicken thighs",
        "House teriyaki sauce",
        "White rice",
        "Macaroni salad",
        "Sesame seeds",
      ],
      nutritionalInfo: "Good source of protein. Contains soy.",
    },
    {
      id: "spicy-poke",
      name: "Spicy Ahi Poke",
      description: "Fresh ahi tuna with spicy mayo, green onions, and sesame",
      longDescription:
        "Our Spicy Ahi Poke features sashimi-grade ahi tuna cubes marinated in our special spicy mayo sauce with green onions, sesame oil, and a sprinkle of toasted sesame seeds. Served over a bed of white rice with seaweed salad on the side, this Hawaiian favorite offers the perfect balance of heat and fresh ocean flavors.",
      price: "17.99",
      image: SpicyPoke,
      category: "Lunch/Dinner",
      isFeatured: false,
      spicyLevel: 2,
      dietaryInfo: ["Contains Raw Fish"],
      ingredients: [
        "Fresh ahi tuna",
        "Spicy mayo",
        "Green onions",
        "Sesame oil",
        "Toasted sesame seeds",
      ],
      nutritionalInfo:
        "High in protein and omega-3 fatty acids. Contains raw fish.",
    },
    {
      id: "spam-musubi",
      name: "Spam Musubi",
      description: "Grilled Spam and rice wrapped in nori",
      longDescription:
        "Our Spam Musubi is a classic Hawaiian snack featuring a slice of grilled Spam glazed with sweet teriyaki sauce, placed on top of a block of rice, and wrapped with a strip of nori seaweed. This portable snack is perfect for on-the-go eating and represents the fusion of Japanese and American influences in Hawaiian cuisine.",
      price: "4.99",
      image: SpamMusubi,
      category: "Sides",
      isFeatured: true,
      ingredients: [
        "Spam",
        "White rice",
        "Nori seaweed",
        "Teriyaki glaze",
        "Furikake seasoning",
      ],
      nutritionalInfo: "Good source of protein. Contains sodium and gluten.",
    },
    {
      id: "macaroni-salad",
      name: "Mac Salad",
      description: "Classic Hawaiian-style macaroni salad",
      longDescription:
        "Our Mac Salad is made the traditional Hawaiian way - slightly sweet and extra creamy. We use elbow macaroni mixed with mayo, grated carrots, and a touch of sugar for that authentic island taste. It's the perfect side dish to complete any Hawaiian plate lunch experience.",
      price: "3.99",
      image: MacaroniSalad,
      category: "Sides",
      isFeatured: false,
      dietaryInfo: ["Vegetarian"],
      ingredients: [
        "Elbow macaroni",
        "Mayonnaise",
        "Carrots",
        "Sugar",
        "Pepper",
      ],
      nutritionalInfo: "Contains gluten, eggs, and dairy. Vegetarian friendly.",
    },
  ],

  testimonials: [
    {
      quote:
        "Best Hawaiian food I've had since visiting the islands! The Loco Moco is just like back home.",
      author: "Mike K.",
      location: "San Francisco, CA",
    },
    {
      quote:
        "The food truck is amazing! I follow them everywhere. Their SPAM Musubi is worth the drive!",
      author: "Sarah L.",
      location: "Oakland, CA",
    },
    {
      quote:
        "Authentic Hawaiian flavors with the friendliest service. Uncle Myk and Aunty Jamie make you feel like family.",
      author: "David T.",
      location: "Benicia, CA",
    },
  ],
};
