import * as React from "react";
import type { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props} />
));
Avatar.displayName = "Avatar";

export interface AvatarImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string | StaticImageData;
}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(({ className, src, ...props }, ref) => {
  const imageSrc = typeof src === "string" ? src : src.src;

  return (
    <img
      ref={ref}
      className={cn("aspect-square h-full w-full object-cover", className)}
      src={imageSrc}
      {...(props as Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src">)}
    />
  );
});
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)} {...props} />
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
