"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function MenuItems() {
  const [selectedCategory, setSelectedCategory] = useState(siteConfig.categories[0].id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Filter items by selected category
  const filteredItems = siteConfig.menuItems.filter((item) => {
    return item.categoryId === selectedCategory;
  });

  return (
    <section
      id="menu"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Our Delicious Menu
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our selection of authentic Hawaiian cuisine made with Aloha
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {siteConfig.categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "outline-brand" : "outline"}
              size="lg"
              className="font-medium"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/menu/${item.id}`} className="block">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {item.isFeatured && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="brand" className="font-medium text-sm">
                        Popular
                      </Badge>
                    </div>
                  )}
                </div>
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                  <Link href={`/menu/${item.id}`} className="block">
                    <h3 className="text-xl font-bold hover:underline">
                      {item.name}
                    </h3>
                  </Link>
                  <span className="text-lg font-bold">
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
        </motion.div>
      </div>
    </section>
  );
}
