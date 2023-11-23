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

export const Navbar = () => {
    return (
        <MaxWidthWrapper className="border-b border-gray-200">
            <NavigationMenu className="h-12">
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
                                        <div key={feature.name} className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                            <NavigationMenuLink href={feature.href}>{feature.name}</NavigationMenuLink>
                                            <Image 
                                                src={feature.imageSrc}
                                                alt="feature-img"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    ))}
                                    {/* <NavigationMenuLink
                                        href="/indoor-park"
                                    >
                                        Indoor Park
                                    </NavigationMenuLink> */}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        
        </MaxWidthWrapper>
        // <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
        //     <header className="relative bg-white">
        //         <MaxWidthWrapper>
        //             <div className="border-b border-gray-200">
        //                 <div className="flex h-16 items-center">
        //                     {/* TODO: Mobile navbar */}

                            // <div className="ml-4 flex lg:ml-0">
                            //     <Link href="/">
                            //         <Image 
                            //             src="/assets/logo.png"
                            //             alt="shiba"
                            //             height={40}
                            //             width={40}
                            //         />
                            //     </Link>
                            // </div>
        //                     <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                
        //                     <NavigationMenu>
        //                             <NavigationMenuList>
        //                                 <NavigationMenuItem>
        //                                 <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        //                                 <NavigationMenuContent>
        //                                     <NavigationMenuLink>Link</NavigationMenuLink>
        //                                 </NavigationMenuContent>
        //                                 </NavigationMenuItem>
        //                             </NavigationMenuList>
        //                     </NavigationMenu>
        //                     </div>
        //                 </div>
        //             </div>
        //         </MaxWidthWrapper>
        //     </header>
        // </div>
    )
}