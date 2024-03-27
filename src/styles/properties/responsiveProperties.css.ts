import { defineProperties } from "@vanilla-extract/sprinkles";

import { vars } from "@/styles/theme.css";

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: { "@media": "screen and (max-width: 420px)" },
    tablet: { "@media": "screen and (max-width: 729px)" },
    desktop: {},
  },
  defaultCondition: "desktop",
  properties: {
    display: ["none", "block", "inline", "inline-block", "flex", "grid"],

    flexDirection: ["row", "column"],
    justifyContent: ["center", "space-around", "space-between"],
    alignItems: ["center", "baseline"],
    flex: [1, "auto"],
    gap: vars.space,

    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    border: ["none"],
    borderWidth: { thin: "1px", thick: "2px" },
    borderRadius: vars.round,
    width: { fill: "100%", min: "1px" },
    height: { fill: "100%", min: "1px" },
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
  },
  shorthands: {
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});
