import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";

export const textLink = style([
  sprinkles({
    paddingX: "xs",
    typeScale: "navigation",
  }),
  {
    ":hover": {
      color: vars.color.brand,
    },
  },
]);

export const outlinedLink = style([
  sprinkles({
    border: "solid",
    borderWidth: "thin",
    borderColor: "brand",
    borderRadius: "sm",
    paddingX: "md",
    paddingY: "xs",
    backgroundColor: "white",
    typeScale: "small",
    color: "brand",
  }),
  {
    cursor: "pointer",
    ":hover": {
      backgroundColor: vars.color.brand,
      color: vars.color.white,
    },
  },
]);
