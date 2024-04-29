import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";

export const header = style([
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingY: "md",
    backgroundColor: "layerHeader",
  }),
  {
    paddingLeft: "7.2rem",
    paddingRight: "7.2rem",
    backdropFilter: "blur(5rem)",
  },
]);

export const logo = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
  }),
]);

export const anchorList = style([
  sprinkles({
    display: "flex",
    gap: "xl",
  }),
]);

export const buttonList = style([
  sprinkles({
    display: "flex",
    gap: "md",
    alignItems: "center",
  }),
]);
