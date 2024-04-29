import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

export const card = style([
  sprinkles({
    padding: "xl",
    gap: "xl",
    color: "white",
    backgroundColor: "neutralLight3",
    borderWidth: "thin",
    borderRadius: "rounded",
    display: "flex",
  }),
  {
    alignItems: "flex-start",
    boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.10)",
  },
]);
