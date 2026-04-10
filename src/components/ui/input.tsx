
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
       className={cn(
          "flex h-10 w-full rounded-md border z-20  bg-white dark:bg-zinc-900 px-3 py-2 text-base text-gray-900 dark:text-white ring-offset-white file:border-0 file:bg-white dark:file:bg-black file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
