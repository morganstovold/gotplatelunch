"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import locoMoco from "@/public/loco-moco.jpg";
import spamFriedRice from "@/public/placeholder.jpg";
import acaiBowl from "@/public/poke-bowl.jpg";
import kaluaPork from "@/public/kalua-pork.jpg";
import chickenKatsu from "@/public/chicken-katsu.jpg";
import garlicShrimp from "@/public/placeholder.jpg";
import teriyakiChicken from "@/public/placeholder.jpg";
import spicyPoke from "@/public/placeholder.jpg";
import spamMusubi from "@/public/spam-musubi.jpg";
import macaroniSalad from "@/public/placeholder.jpg";

const menuItems = [
  {
    id: "loco-moco",
    name: "Loco Moco",
    description: "Hamburger steak over rice, topped with eggs and brown gravy",
    price: "15.99",
    image: locoMoco,
    category: "Breakfast",
    isPopular: true,
    dietaryInfo: ["Contains Eggs"],
  },
  {
    id: "spam-fried-rice",
    name: "Spam Fried Rice",
    description: "Classic Hawaiian breakfast with eggs and green onions",
    price: "13.99",
    image: spamFriedRice,
    category: "Breakfast",
    dietaryInfo: ["Contains Eggs"],
  },
  {
    id: "acai-bowl",
    name: "Açaí Bowl",
    description: "Fresh açaí blend topped with granola, banana, and honey",
    price: "12.99",
    image: acaiBowl,
    category: "Breakfast",
    dietaryInfo: ["Vegetarian"],
  },
  {
    id: "kalua-pork",
    name: "Kalua Pork",
    description: "Traditional Hawaiian pulled pork, slow-cooked to perfection",
    price: "14.99",
    image: kaluaPork,
    category: "Lunch/Dinner",
    isPopular: true,
    dietaryInfo: ["Gluten-Free"],
  },
  {
    id: "chicken-katsu",
    name: "Chicken Katsu",
    description: "Crispy panko-breaded chicken cutlet with tonkatsu sauce",
    price: "13.99",
    image: chickenKatsu,
    category: "Lunch/Dinner",
    isPopular: true,
  },
  {
    id: "garlic-shrimp",
    name: "Garlic Shrimp",
    description: "North Shore style garlic shrimp with butter and lemon",
    price: "16.99",
    image: garlicShrimp,
    category: "Lunch/Dinner",
    dietaryInfo: ["Gluten-Free"],
  },
  {
    id: "teriyaki-chicken",
    name: "Teriyaki Chicken",
    description: "Grilled chicken glazed with our house teriyaki sauce",
    price: "13.99",
    image: teriyakiChicken,
    category: "Lunch/Dinner",
    isPopular: true,
  },
  {
    id: "spicy-poke",
    name: "Spicy Ahi Poke",
    description: "Fresh ahi tuna with spicy mayo, green onions, and sesame",
    price: "17.99",
    image: spicyPoke,
    category: "Lunch/Dinner",
    spicyLevel: 2,
    dietaryInfo: ["Contains Raw Fish"],
  },
  {
    id: "spam-musubi",
    name: "Spam Musubi",
    description: "Grilled Spam and rice wrapped in nori",
    price: "4.99",
    image: spamMusubi,
    category: "Sides",
    isPopular: true,
  },
  {
    id: "macaroni-salad",
    name: "Mac Salad",
    description: "Classic Hawaiian-style macaroni salad",
    price: "3.99",
    image: macaroniSalad,
    category: "Sides",
    dietaryInfo: ["Vegetarian"],
  },
];

const categories = ["Popular", "Breakfast", "Lunch/Dinner", "Sides"];

export function MenuItems() {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  const filteredItems = menuItems.filter((item) => {
    if (selectedCategory === "Popular") {
      return item.isPopular;
    }
    return item.category === selectedCategory;
  });

  return (
    <section className="relative w-full py-24 pb-52">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "brand" : "soft"}
              onClick={() => setSelectedCategory(category)}
              className="font-medium text-lg px-8"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="w-full h-full object-cover"
                />
                {item.isPopular && (
                  <div className="absolute top-2 right-2">
                    <Badge variant="brand" className="font-medium">
                      Popular
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-yellow-600">
                    ${item.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.dietaryInfo && item.dietaryInfo.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.dietaryInfo.map((info) => (
                      <Badge key={info} variant="outline" className="text-xs">
                        {info}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
