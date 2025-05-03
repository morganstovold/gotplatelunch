"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const giftCardOptions = [
  { value: 25, popular: false },
  { value: 50, popular: true },
  { value: 75, popular: false },
  { value: 100, popular: false },
  { value: 200, popular: false },
];

export function GiftCardOptions() {
  const [selectedOption, setSelectedOption] = useState(50);
  const [deliveryMethod, setDeliveryMethod] = useState<"email" | "print">(
    "email"
  );

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
              Purchase a Gift Card
            </h2>
            <p className="text-zinc-500 md:text-lg">
              Select an amount and delivery method for your perfect Hawaiian
              gift.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Choose Amount</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {giftCardOptions.map((option) => (
                  <Button
                    key={option.value}
                    onClick={() => setSelectedOption(option.value)}
                    variant={
                      selectedOption === option.value
                        ? "outline-brand"
                        : "outline"
                    }
                  >
                    <span className="font-bold">${option.value}</span>
                    {option.popular && (
                      <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-400 to-orange-400 text-white text-xs px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium">Delivery Method</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setDeliveryMethod("email")}
                  className={`px-4 py-3 border-2 rounded-lg flex items-center space-x-3 transition-all ${
                    deliveryMethod === "email"
                      ? "border-red-400 bg-red-400/10"
                      : "border-neutral-200 hover:border-red-200"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-zinc-500">
                      Send directly to recipient
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => setDeliveryMethod("print")}
                  className={`px-4 py-3 border-2 rounded-lg flex items-center space-x-3 transition-all ${
                    deliveryMethod === "print"
                      ? "border-red-400 bg-red-400/10"
                      : "border-neutral-200 hover:border-red-200"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="font-medium">Print at Home</div>
                    <div className="text-sm text-zinc-500">
                      Print and give in person
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium">Gift Details</h3>
              <div className="grid gap-3">
                <div className="border-2 border-neutral-200 rounded-lg p-4">
                  <div className="flex justify-between mb-4">
                    <div className="font-medium">Amount</div>
                    <div className="font-bold">${selectedOption}</div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="font-medium">Delivery</div>
                    <div>
                      {deliveryMethod === "email" ? "Email" : "Print at Home"}
                    </div>
                  </div>
                  <div className="flex justify-between font-medium">
                    <div>Total</div>
                    <div className="font-bold">${selectedOption}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/checkout"
                className={cn(
                  buttonVariants({ variant: "brand", size: "lg" }),
                  "w-full hover:scale-101 hover:shadow-lg transition-all text-base"
                )}
              >
                Proceed to Checkout
              </Link>
              <p className="text-xs text-zinc-500 mt-3 text-center">
                Gift cards are non-refundable and expire 1 year from purchase
                date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
