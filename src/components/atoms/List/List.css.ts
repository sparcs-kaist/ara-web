import { recipe } from "@vanilla-extract/recipes";

import { sprinkles } from "@/styles/sprinkles.css";

export const list = recipe({
  base: sprinkles({
    display: "none",
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
    wide: {
      flex: sprinkles({ display: { wide: "flex" } }),
      none: sprinkles({ display: { wide: "none" } }),
    },
    desktop: {
      flex: sprinkles({ display: { desktop: "flex" } }),
      none: sprinkles({ display: { desktop: "none" } }),
    },
    tablet: {
      flex: sprinkles({ display: { tablet: "flex" } }),
      none: sprinkles({ display: { tablet: "none" } }),
    },
    mobile: {
      flex: sprinkles({ display: { mobile: "flex" } }),
      none: sprinkles({ display: { mobile: "none" } }),
    },
  },
});
