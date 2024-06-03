import { recipe } from "@vanilla-extract/recipes";

import { sprinkles } from "@/styles/sprinkles.css";

export const divider = recipe({
  base: sprinkles({
    margin: "none",
    border: "none",
    backgroundColor: "neutralLight2",
  }),
  variants: {
    dir: {
      x: sprinkles({ width: "fill", height: "min" }),
      y: sprinkles({ width: "min", height: "fill" }),
    },
  },
  defaultVariants: {
    dir: "x",
  },
});
