import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

export const row = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    gap: "lg",
    padding: "none",
  }),
  {
    alignSelf: "stretch",
  },
]);

export const rank = style([
  sprinkles({
    color: "brand",
  }),
  {
    width: "1.6rem",
    fontFamily: "Pretendard",
    fontSize: "2.2rem",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
]);

export const previewImage = style([
  {
    width: "3.6rem",
    height: "3.6rem",
  },
]);

export const profileImage = style([
  {
    width: "3.6rem",
    height: "3.6rem",
  },
]);

export const content = style([
  sprinkles({
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
  }),
  {
    flex: "1 0 0",
  },
]);

export const title = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    gap: "xs",
  }),
]);

export const titleText = style([
  sprinkles({
    display: "WebkitBox",
    color: "neutral",
    typeScale: "default",
  }),
  {
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
]);

export const titleImage = style([
  sprinkles({
    color: "neutralLight1",
  }),
]);

export const infoes = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
  {
    height: "2.0rem",
    alignSelf: "stretch",
  },
]);

export const subInfo = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    gap: "xs",
    color: "neutralLight1",
    typeScale: "smallCaption",
  }),
]);

export const responseStatus = style([
  sprinkles({
    color: "brand",
  }),
]);

export const board = style([
  sprinkles({
    color: "neutralSub",
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

export const commentCount = style([
  sprinkles({
    color: "neutral",
    typeScale: "smallCaption",
  }),
]);
