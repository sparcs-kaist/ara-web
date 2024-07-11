import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

export const card = style([
  sprinkles({
    display: "flex",
    alignItems: "flex-start",
    gap: "xl",
    borderRadius: "rounded",
    padding: "xl",
  }),
  {
    boxShadow: "0 2px 8px 0 rgb(0 0 0 / 0.1)",
    border: "0.1rem solid neutralLight3",
    // width: "61.6rem",
    backgroundColor: "white",
  },
]);
