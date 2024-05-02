import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

export const headerWrapper = sprinkles({
  backgroundColor: "layerHeader",
});

export const header = style([
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginX: {
      underDesktop: "lg",
      desktop: "3xl",
      wide: "auto",
    },
    paddingY: "md",
  }),
  {
    "@media": {
      "screen and (min-width: 1081px)": {
        maxWidth: "93.6rem",
      },
    },
    backdropFilter: "blur(5rem)",
  },
]);

export const logo = sprinkles({
  display: "flex",
  alignItems: "center",
});
