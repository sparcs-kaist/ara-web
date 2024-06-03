import { recipe } from "@vanilla-extract/recipes";

import { sprinkles } from "@/styles/sprinkles.css";

export const list = recipe({
  base: sprinkles({
    display: "flex",
  }),
  variants: {
    gap: {
      none: sprinkles({ gap: "none" }),
      xs: sprinkles({ gap: "xs" }),
      sm: sprinkles({ gap: "sm" }),
      md: sprinkles({ gap: "md" }),
      lg: sprinkles({ gap: "lg" }),
      xl: sprinkles({ gap: "xl" }),
    },
    dir: {
      x: sprinkles({ flexDirection: "row" }),
      y: sprinkles({ flexDirection: "column" }),
    },
  },
  defaultVariants: {
    gap: "none",
    dir: "y",
  },
});
