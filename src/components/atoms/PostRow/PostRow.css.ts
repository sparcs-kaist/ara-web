import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";

export const row = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    gap: "sm",
    padding: "none",
  }),
  {
    alignSelf: "stretch",
  },
]);

export const rank = style([
  sprinkles({
    typeScale: "bannerTitle",
    color: "brand",
  }),
  {
    width: "1.6rem",
  },
]);

export const previewImage = style({
  position: "relative",
  width: "3.6rem",
  height: "3.6rem",
});

export const primaryImage = recipe({
  base: style({
    objectFit: "cover",
  }),
  variants: {
    borderRadius: {
      little: sprinkles({
        borderRadius: "little",
      }),
      full: style({
        borderRadius: "50%",
      }),
    },
  },
  defaultVariants: {
    borderRadius: "little",
  },
});

export const secondaryImage = style({
  position: "absolute",
  top: "1.8rem",
  left: "1.8rem",
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
  borderRadius: "50%",
  objectFit: "cover",
});

export const content = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  }),
  {
    flex: "1 0 0",
    overflow: "hidden",
  },
]);

export const title = sprinkles({
  display: "flex",
  alignItems: "center",
  gap: "xs",
  width: "fill",
});

export const titleText = style([
  sprinkles({
    typeScale: "default",
    color: "neutral",
  }),
  {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
]);

export const titleImage = style([
  sprinkles({
    color: "neutralLight1",
  }),
  {
    flexShrink: 0,
  },
]);

export const infoes = style([
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
  typeScale: "smallCaption",
  color: "neutralLight1",
});

globalStyle(`${subInfo} > span:not(:last-child)::after`, {
  content: "·",
  marginLeft: "0.5rem",
  color: vars.color.neutralLight1,
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

const countItem = sprinkles({
  display: "flex",
  alignItems: "center",
  gap: "xs",
});
export const likes = style([countItem, sprinkles({ color: "brand" })]);
export const dislikes = style([countItem, sprinkles({ color: "negative" })]);
export const comments = style([countItem, sprinkles({ color: "neutral" })]);

export const counts = sprinkles({
  typeScale: "smallCaption",
  color: "inherit",
});
