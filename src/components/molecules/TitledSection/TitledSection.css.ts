import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

export const layout = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "md",
  }),
  {
    overflow: "hidden",
  },
]);

export const header = sprinkles({
  display: "flex",
  alignItems: "center",
});

export const title = sprinkles({
  marginRight: "xs",
  typeScale: "bannerTitle",
  color: "neutral",
});

export const icon = sprinkles({
  color: "neutralLight1",
});
