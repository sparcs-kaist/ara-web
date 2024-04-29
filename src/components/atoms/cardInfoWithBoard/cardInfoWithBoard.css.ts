import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

export const contentInfo = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
  }),
  {
    alignSelf: "stretch",
    height: "2.0rem",
  },
]);

export const infoes = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    gap: "xs",
  }),
]);

export const board = style([
  sprinkles({
    color: "neutralSub",
    typeScale: "smallCaption",
  }),
]);

export const divider = style([
  sprinkles({
    color: "neutralLight1",
    typeScale: "smallCaption",
  }),
]);

export const writer = style([
  sprinkles({
    color: "neutralLight1",
    typeScale: "smallCaption",
  }),
]);

export const time = style([
  sprinkles({
    color: "neutralLight1",
    typeScale: "smallCaption",
  }),
]);
