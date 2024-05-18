import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

export const dropdownSkeleton = style([
  sprinkles({
    alignItems: "center",
  }),
  {
    width: "7rem",
    height: "2rem",
  },
]);
