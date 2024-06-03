import { keyframes, style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";

export const headerWrapper = sprinkles({
  backgroundColor: "layerHeader",
});

export const header = style([
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginX: {
      underDesktop: "lg",
      desktop: "3xl",
      wide: "auto",
    },
    paddingY: "md",
  }),
  {
    "@media": {
      "screen and (min-width: 1081px)": {
        maxWidth: "93.6rem",
      },
    },
    backdropFilter: "blur(5rem)",
  },
]);

export const logo = sprinkles({
  display: "flex",
  alignItems: "center",
});

const slideInLeft = keyframes({
  "0%": {
    transform: "translateX(100%)",
  },
});

export const dialog = style([
  sprinkles({
    marginRight: "none",
    boxShadow: "banner",
  }),
  {
    animation: `${slideInLeft} 0.2s ease-out`,
    borderTopLeftRadius: "1.6rem",
    width: "min(calc(100vw - 2rem), 24rem)",
    minWidth: "20rem",
    height: "100svh",
    maxHeight: "none",
    "::backdrop": {
      backgroundColor: vars.color.layerImage,
    },
  },
]);

export const dialogInner = sprinkles({
  display: "flex",
  flexDirection: "column",
  height: "fill",
});

export const closeButtonWrapper = style([
  sprinkles({
    padding: "xl",
  }),
]);

export const navigation = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "xl",
    flex: 1,
    paddingX: "xl",
    paddingBottom: "xl",
  }),
  {
    overflow: "auto",
  },
]);
