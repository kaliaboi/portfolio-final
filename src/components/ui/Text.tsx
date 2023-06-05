import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode, forwardRef } from "react";

interface textProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof variants> {
  children: ReactNode;
}

const variants = cva("font-normal opacity-80 text-[17px]", {
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

const Text = forwardRef<HTMLParagraphElement, textProps>(
  ({ children, prominence, className }, ref) => {
    return (
      <p ref={ref} className={cn(variants({ prominence, className }))}>
        {children}
      </p>
    );
  }
);

export default Text;
