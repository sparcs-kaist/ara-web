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

export const content = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    gap: "sm",
  }),
]);

export const title = style([
  sprinkles({
    color: "neutral",
    typeScale: "bannerTitle",
  }),
]);

export const icon = style([
  sprinkles({
    color: "neutralLight1",
  }),
  {
    width: "2.4rem",
    height: "2.4rem",
  },
]);

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
