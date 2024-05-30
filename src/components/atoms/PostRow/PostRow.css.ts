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
    typeScale: "bannerTitle",
  }),
  {
    width: "1.6rem",
  },
]);

export const previewImage = style([
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

export const title = sprinkles({
  display: "flex",
  alignItems: "center",
  gap: "xs",
});

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

export const titleImage = sprinkles({
  color: "neutralLight1",
});

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

export const subInfo = sprinkles({
  display: "flex",
  alignItems: "center",
  gap: "xs",
  color: "neutralLight1",
  typeScale: "smallCaption",
});

export const responseStatus = sprinkles({
  color: "brand",
});

export const board = sprinkles({
  color: "neutralSub",
});

export const count = sprinkles({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "sm",
});

export const likes = sprinkles({
  display: "flex",
  alignItems: "center",
  gap: "xs",
  color: "brand",
});

export const likeCount = sprinkles({
  color: "brand",
  typeScale: "smallCaption",
});

export const dislikes = sprinkles({
  display: "flex",
  alignItems: "center",
  gap: "xs",
  color: "negative",
});

export const dislikeCount = sprinkles({
  color: "negative",
  typeScale: "smallCaption",
});

export const comments = sprinkles({
  display: "flex",
  alignItems: "center",
  gap: "xs",
  color: "neutral",
});

export const commentCount = sprinkles({
  color: "neutral",
  typeScale: "smallCaption",
});
