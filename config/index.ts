export const CATEGORIES = [
    {
        label: "Our Parks",
        value: "parks" as const,
        featured: [
            {
                name: "Outdoor parks",
                href: "/outdoor-parks",
                imageSrc: "/assets/nav/parks/outdoor-parks.jpg"
            },
            {
                name: "Indoor parks",
                href: "/indoor-parks",
                imageSrc: "/assets/nav/parks/indoor-parks.jpg"
            }
        ]
    },
    {
        label: "Plans",
        value: "plans" as const,
        featured: [
            {
                name: "Basic",
                href: "/basic-plan",
                imageSrc: "/assets/nav/plans/basic.png"
            },
            {
                name: "Premium",
                href: "/premium-plan",
                imageSrc: "/assets/nav/plans/premium.png"
            }
        ]
    },
    {
        label: "Shop",
        value: "shop" as const,
        featured: [
            {
                name: "Toys",
                href: "/shop/toys",
                imageSrc: "/assets/nav/shop/toys.jpg"
            },
            {
                name: "Food",
                href: "/shop/food",
                imageSrc: "/assets/nav/shop/food.png"
            },
            {
                name: "Accessories",
                href: "/shop/accessories",
                imageSrc: "/assets/nav/shop/accessories.png"
            }
        ]
    },

]