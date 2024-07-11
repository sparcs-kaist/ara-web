import { style } from "@vanilla-extract/css";

import { textLink } from "@/components/atoms/Link/Link.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";

export const dropdown = style([
  sprinkles({
    position: "relative",
  }),
  {
    "@media": {
      "screen and (max-width: 1080px)": {
        width: "100%",
      },
    },
  },
]);

export const dropdownButton = style([
  textLink,
  sprinkles({
    display: "flex",
    alignItems: "center",
  }),
  {
    border: "none",
    background: "none",
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
    boxShadow: "banner",
    borderRadius: "little",
    padding: "xs",
    backgroundColor: "white",
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
    borderRadius: "little",
    paddingX: "sm",
    paddingY: "xs",
    backgroundColor: "white",
    typeScale: "small",
  }),
  {
    flex: 1,
    ":hover": {
      backgroundColor: vars.color.neutralLight3,
    },
  },
]);
