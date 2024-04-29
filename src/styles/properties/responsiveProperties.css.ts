import { defineProperties } from "@vanilla-extract/sprinkles";

import { vars } from "@/styles/theme.css";

export const responsiveProperties = defineProperties({
  conditions: {
    underTablet: { "@media": "screen and (max-width: 420px)" },
    underDesktop: { "@media": "screen and (max-width: 729px)" },
    underWide: { "@media": "screen and (max-width: 1080px)" },
    mobile: { "@media": "screen and (max-width: 420px)" },
    tablet: { "@media": "screen and (min-width: 421px) and (max-width: 729px)" },
    desktop: { "@media": "screen and (min-width: 730px) and (max-width: 1080px)" },
    wide: { "@media": "screen and (min-width: 1081px)" },
    default: {},
  },
  defaultCondition: "default",
  properties: {
    position: ["relative", "absolute"],
    display: ["none", "block", "inline", "inline-block", "flex", "grid", "WebkitBox"],
    flexDirection: ["row", "column"],
    justifyContent: ["center", "space-around", "space-between", "flex-end"],
    alignItems: ["center", "baseline", "flex-start"],
    flex: [1, "auto"],
    gap: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    border: ["none", "solid"],
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
