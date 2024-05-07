import { recipe } from "@vanilla-extract/recipes";

import { sprinkles } from "@/styles/sprinkles.css";

export const list = recipe({
  base: sprinkles({
    display: "flex",
    gap: "md",
    alignItems: "center",
  }),
  variants: {
    gap: {
      xs: sprinkles({ gap: "xs" }),
      sm: sprinkles({ gap: "sm" }),
      md: sprinkles({ gap: "md" }),
      lg: sprinkles({ gap: "lg" }),
      xl: sprinkles({ gap: "xl" }),
    },
    direction: {
      x: sprinkles({ flexDirection: "row" }),
      y: sprinkles({ flexDirection: "column" }),
    },
    alignItems: {
      center: sprinkles({ alignItems: "center" }),
      baseline: sprinkles({ alignItems: "baseline" }),
      "flex-start": sprinkles({ alignItems: "flex-start" }),
    },
  },
});
