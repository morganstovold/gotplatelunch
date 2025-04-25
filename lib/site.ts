import LocoMoco from "@/public/loco-moco.jpg";
import SpamMusubi from "@/public/spam-musubi.jpg";
import KaluaPork from "@/public/kalua-pork.jpg";
import ChickenKatsu from "@/public/chicken-katsu.jpg";
import PokeBowl from "@/public/poke-bowl.jpg";
import BbqChicken from "@/public/bbq-chicken.jpg";

export const siteConfig = {
  foodItems: [
    {
      name: "Loco Moco",
      image: LocoMoco,
      description: "Fresh ground beef patty with gravy and fried egg over rice",
    },
    {
      name: "SPAM Musubi",
      image: SpamMusubi,
      description: "Grilled SPAM on rice wrapped with nori",
    },
    {
      name: "Kalua Pork",
      image: KaluaPork,
      description: "Tender smoked pork with traditional Hawaiian flavors",
    },
    {
      name: "Chicken Katsu",
      image: ChickenKatsu,
      description: "Crispy panko-breaded chicken with tonkatsu sauce",
    },
    {
      name: "Poke Bowl",
      image: PokeBowl,
      description: "Fresh ahi tuna marinated with soy sauce and sesame oil",
    },
    {
      name: "BBQ Chicken",
      image: BbqChicken,
      description: "BBQ chicken with a side of rice and coleslaw",
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
