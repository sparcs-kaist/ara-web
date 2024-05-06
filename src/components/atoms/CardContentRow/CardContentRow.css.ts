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

export const number = style([
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
  {
    width: "1.6rem",
    height: "1.6rem",
  },
]);
