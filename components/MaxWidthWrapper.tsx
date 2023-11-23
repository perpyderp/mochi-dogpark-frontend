
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const MaxWidthWrapper = ({
    className,
    children
}: {
    className?: string,
    children: ReactNode
}) => {
    return (
        <div className={cn("max-auto w-full max-w-screen-3xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    )
}