import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode, forwardRef } from "react";

interface headingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof variants> {
  children: ReactNode;
}

const variants = cva("font-semibold opacity-80 text-[17px]", {
  variants: {
    prominence: {
      normal: "text-zinc-950",
      muted: "text-zinc-600",
    },
  },
  defaultVariants: {
    prominence: "normal",
  },
});

const Title = forwardRef<HTMLHeadingElement, headingProps>(
  ({ children, prominence, className }, ref) => {
    return (
      <h1 ref={ref} className={cn(variants({ prominence, className }))}>
        {children}
      </h1>
    );
  }
);

export default Title;
