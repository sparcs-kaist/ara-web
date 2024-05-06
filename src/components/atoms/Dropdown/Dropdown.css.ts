import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";

import Anchors from "../Anchor/Anchor.css";

export const dropdown = style([]);

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
  },
]);

export const dropdownAnchorList = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "xs",
    borderRadius: "sm",
    marginTop: "sm",
  }),
  {
    position: "absolute",
    width: "15rem",
    boxShadow: `0rem 0.2rem 0.8rem 0rem ${vars.color.layerImage}`,
  },
]);

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
