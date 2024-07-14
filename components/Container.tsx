import { cn } from "@/lib/utils";

const containerSizes = {
  base: "max-w-[1040px]",
};

export default function Container({
  as: Component = "div",
  className,
  size = "base",
  children,
}: {
  as?: React.ElementType;
  size?: "base";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes) {
  return (
    <Component
      className={cn("mx-auto w-full", containerSizes[size], className)}
    >
      {children}
    </Component>
  );
}
