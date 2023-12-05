"use client"

import Link from "next/link";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import Image from "next/image";

import { CATEGORIES } from "@/config";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { buttonVariants } from "./ui/button";

export const Navbar = () => {
    return (
        <MaxWidthWrapper className="border-b border-gray-200">
            <NavigationMenu className="h-20 w-full flex justify-between items-center max-w-none">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/">
                            <Image 
                                src="/assets/logo.png"
                                alt="shiba"
                                height={40}
                                width={40}
                            />
                        </Link>
                    </NavigationMenuItem>
                    {CATEGORIES.map((category) => (
                        <NavigationMenuItem key={category.value}>
                            <NavigationMenuTrigger>{category.label}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                    {category.featured.map((feature) => (
                                        <div key={feature.name} className="grid gap-3 grid-cols-2 p-6 md:w-[350px] lg:w-[350px] items-center">
                                                <div className="text-lg font-semibold">
                                                    {feature.name}
                                                </div>
                                                <div className="overflow-hidden rounded-md">
                                                    <Image 
                                                        src={feature.imageSrc}
                                                        className=""
                                                        alt="feature-img"
                                                        width={350}
                                                        height={350}
                                                    />
                                                </div>
                                        </div>
                                    ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/sign-up" className={buttonVariants()}>
                            Sign up
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/login" className={buttonVariants()}>
                            Login
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        
        </MaxWidthWrapper>
    )
}