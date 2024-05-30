import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

export const box = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "lg",
  }),
  {
    alignItems: "flex-start",
    flex: "1 0 0",
  },
]);

export const content = sprinkles({
  display: "flex",
  alignItems: "center",
  gap: "sm",
});

export const title = sprinkles({
  color: "neutral",
  typeScale: "bannerTitle",
});

export const icon = sprinkles({
  color: "neutralLight1",
});

export const posts = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "md",
  }),
  {
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
]);
