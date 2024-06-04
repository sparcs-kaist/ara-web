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

export const title = sprinkles({
  display: "flex",
  alignItems: "center",
  gap: "sm",
  color: "neutral",
  typeScale: "bannerTitle",
});

export const icon = sprinkles({
  color: "neutralLight1",
});
