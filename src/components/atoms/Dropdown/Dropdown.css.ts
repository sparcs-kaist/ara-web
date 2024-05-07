import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";

import Anchors from "../Anchor/Anchor.css";

export const dropdown = sprinkles({
  position: "relative",
});

export const dropdownButton = style([
  Anchors.textAnchor,
  sprinkles({
    display: "flex",
    alignItems: "center",
  }),
  {
    background: "none",
    border: "none",
    cursor: "pointer",
    selectors: {
      '&[aria-checked="true"]': {
        color: `${vars.color.brand}`,
      },
    },
  },
]);

export const dropdownOpen = style([
  sprinkles({
    display: "none",
  }),
  {
    selectors: {
      [`${dropdown}:hover &`]: {
        display: "flex",
      },
    },
  },
]);

export const dropdownClose = style([
  sprinkles({
    display: "flex",
  }),
  {
    selectors: {
      [`${dropdown}:hover &`]: {
        display: "none",
      },
    },
  },
]);

export const dropdownAnchorListWrapper = sprinkles({
  position: { wide: "absolute" },
  paddingTop: "sm",
});

export const dropdownAnchorList = style([
  sprinkles({
    display: "none",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "xs",
    borderRadius: "sm",
    boxShadow: "banner",
  }),
  {
    width: "15rem",
    selectors: {
      [`${dropdown}:hover &`]: {
        display: "flex",
      },
    },
  },
]);

export const dropdownAnchorWrapper = sprinkles({
  display: "flex",
});

export const dropdownAnchor = style([
  sprinkles({
    paddingX: "sm",
    paddingY: "xs",
    typeScale: "small",
    backgroundColor: "white",
    borderRadius: "sm",
  }),
  {
    flex: 1,
    ":hover": {
      backgroundColor: vars.color.neutralLight3,
    },
  },
]);
