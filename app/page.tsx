import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { LandPlot, PawPrint, ScissorsSquare, ShieldCheck, Sparkles, Store } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const features = [
  {
    name: "Indoor and outdoor play areas",
    icon: PawPrint,
    description: "We know our pet's can get dirty and be more cleanup especially on rainy days. Therefore we have an indoor for rainy days or for those who want to minimize cleanup of their dog's paws. And an outdoor for the days were the sun shines bright, or if you prefer the outdoors!"
  },
  {
    name: "Big and small dog areas, trained and certified areas",
    icon: LandPlot,
    description: "We acknowledge big dogs may not get along with smaller dogs, so we have separate areas for your pets to ensure their safety and reduce the chance for altercations. In addition, an extra area for big and small dogs for pets who have been trained and known to have a good track record."
  },
  {
    name: "A separate area for dogs in training",
    icon: ShieldCheck,
    description: "Equipped with skilled trainers, an area for skilled pets to be trained and treated with the utmost care!"
  },
  {
    name: "Shop for dog food, toys, accessories, and more!",
    icon: Store,
    description: "Our dog shop contains the highest quality products!"
  },
  {
    name: "Grooming for your pet",
    icon: ScissorsSquare,
    description: "Subscription or no subscription, we offer grooming for pets next to our store"
  },
  {
    name: "Cleanliness",
    icon: Sparkles,
    description: "Keeping the park clean is a shared responsibility between our custodiants and the owners! We do our best to keep our park clean but we want to mitigate the work for our staff as well."
  }
];

export default function NavigationMenuDemo() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
          Your{" "}
          <span className="text-blue-600">park </span>
          and{" "}
          <span className="text-blue-600">market </span>
          for all you and your dog's needs!
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to Mochi's Dogpark! We offer many plans for your dogs including access to our indoor and outdoor parks 
          for rainy days or beautiful sunny days. We also have an indoor shop for dog accessories, toys, food, and more!

        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>View plans</Link>
          <Button variant="ghost">Our quality promise &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
          {features.map((feature) => (
            <div key={feature.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  {<feature.icon className="w-1/3 h-1/3" />}
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </MaxWidthWrapper>
    </section>

    </>
  )
}