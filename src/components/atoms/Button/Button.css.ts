import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

export const iconButton = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    border: "none",
    padding: "none",
    backgroundColor: "transparent",
  }),
  {
    cursor: "pointer",
  },
]);
