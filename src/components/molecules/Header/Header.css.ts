import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

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

export const logo = sprinkles({
  display: "flex",
  alignItems: "center",
});
