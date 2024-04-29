import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

export const contentInfo = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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

export const writer = style([
  sprinkles({
    color: "neutralLight1",
    typeScale: "smallCaption",
  }),
]);

export const count = style([
  sprinkles({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "sm",
  }),
]);

export const likes = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    gap: "xs",
    color: "brand",
  }),
]);

export const likeIcon = style([
  sprinkles({
    color: "brand",
  }),
  {
    width: "1.4rem",
    height: "1.4rem",
  },
]);

export const likeCount = style([
  sprinkles({
    color: "brand",
    typeScale: "smallCaption",
  }),
]);

export const dislikes = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    gap: "xs",
    color: "negative",
  }),
]);

export const dislikeIcon = style([
  sprinkles({
    color: "negative",
  }),
  {
    width: "1.4rem",
    height: "1.4rem",
  },
]);

export const dislikeCount = style([
  sprinkles({
    color: "negative",
    typeScale: "smallCaption",
  }),
]);

export const comments = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    gap: "xs",
    color: "neutral",
  }),
]);

export const commentIcon = style([
  sprinkles({
    color: "neutral",
  }),
  {
    width: "1.4rem",
    height: "1.4rem",
  },
]);

export const commentCount = style([
  sprinkles({
    color: "neutral",
    typeScale: "smallCaption",
  }),
]);
