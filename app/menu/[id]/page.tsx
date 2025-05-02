import Image from "next/image";
import { Footer } from "@/components/footer";
import { CallToAction } from "@/app/_components/CallToAction";
import { buttonVariants } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import seamlessBg from "@/public/palm-pattern.jpg";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id
  const menuItem = siteConfig.menuItems.find((item) => item.id === id);

  if (!menuItem) {
    return {
      title: "Item Not Found | Got Plate Lunch",
      description: "The menu item you're looking for could not be found.",
    };
  }

  return {
    title: `${menuItem.name} | Got Plate Lunch Menu`,
    description: menuItem.longDescription || menuItem.description,
    keywords: [
      "Hawaiian food",
      "plate lunch",
      menuItem.name.toLowerCase(),
      ...(menuItem.dietaryInfo || []),
      menuItem.category.toLowerCase(),
    ],
    alternates: {
      canonical: `/menu/${menuItem.id}`,
    },
    openGraph: {
      title: `${menuItem.name} | Got Plate Lunch Menu`,
      description: menuItem.longDescription || menuItem.description,
      url: `/menu/${menuItem.id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${menuItem.name} | Got Plate Lunch Menu`,
      description: menuItem.longDescription || menuItem.description,
    },
  };
}

// Generate static paths for all menu items
export async function generateStaticParams() {
  return siteConfig.menuItems.map((item) => ({
    id: item.id,
  }));
}

// Make the page component async to properly handle dynamic params
export default async function MenuItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Now we can safely use id in an async function
  const id = (await params).id;
  const menuItem = siteConfig.menuItems.find((item) => item.id === id);

  // If menu item not found, return 404
  if (!menuItem) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center relative min-h-screen">
      <Image
        src={seamlessBg}
        alt="Palm Pattern"
        fill
        className="absolute inset-0 top-0 opacity-10 h-full bg-repeat bg-center bg-cover -z-1"
      />

      <section className="container max-w-5xl py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mb-8">
          <Link
            href="/menu"
            className="flex items-center text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to Menu</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-[350px] sm:h-[450px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src={menuItem.image}
              alt={menuItem.name}
              fill
              priority
              className="object-cover"
            />
            {menuItem.isFeatured && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                {menuItem.name}
              </span>
            </h1>

            <div className="mb-4 text-2xl font-semibold text-gray-800">
              ${menuItem.price}
            </div>

            <p className="text-gray-700 text-lg mb-6">
              {menuItem.longDescription || menuItem.description}
            </p>

            {menuItem.dietaryInfo && menuItem.dietaryInfo.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  Dietary Information
                </h3>
                <div className="flex flex-wrap gap-2">
                  {menuItem.dietaryInfo.map((info) => (
                    <span
                      key={info}
                      className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {info}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {menuItem.ingredients?.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <Link
              href="/locations"
              className={buttonVariants({
                variant: "brand",
                size: "lg",
                className: "w-fit",
              })}
            >
              Order Now
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">Nutritional Information</h2>
          <p className="text-gray-700">{menuItem.nutritionalInfo}</p>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  );
}
