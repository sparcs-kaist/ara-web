import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

export const card = style([
  sprinkles({
    display: "flex",
    padding: "xl",
    alignItems: "flex-start",
    gap: "xl",
    borderRadius: "rounded",
  }),
  {
    width: "61.6rem",
    border: "0.1rem solid neutralLight3",
    boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.10)",
    backgroundColor: "white",
  },
]);
