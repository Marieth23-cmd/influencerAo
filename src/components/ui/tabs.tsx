"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

type TabsContextType = { active: string; setActive: (v: string) => void };
const TabsContext = React.createContext<TabsContextType>({ active: "", setActive: () => {} });

const Tabs = ({ children, defaultValue, ...props }: React.HTMLAttributes<HTMLDivElement> & { defaultValue?: string }) => {
  const [active, setActive] = React.useState(defaultValue ?? "");
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div {...props}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className)} {...props} />
  )
);
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }>(
  ({ className, value, ...props }, ref) => {
    const { active, setActive } = React.useContext(TabsContext);
    return (
      <button
        ref={ref}
        type="button"
        data-state={active === value ? "active" : "inactive"}
        onClick={() => setActive(value)}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
          className
        )}
        {...props}
      />
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value?: string }>(
  ({ className, value, ...props }, ref) => {
    const { active } = React.useContext(TabsContext);
    if (active !== value) return null;
    return (
      <div ref={ref} className={cn("mt-2 focus-visible:outline-none", className)} {...props} />
    );
  }
);
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };