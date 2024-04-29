import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";

/**
 * Anchors are used to navigate between pages or sections of a page.
 */

const textAnchor = style([
  sprinkles({
    paddingX: "xs",
    typeScale: "navigation",
  }),
  {
    ":hover": {
      color: vars.color.brand,
    },
  },
]);

const outlinedAnchor = style([
  sprinkles({
    color: "brand",
    paddingX: "md",
    paddingY: "xs",
    border: "solid",
    borderWidth: "thin",
    borderColor: "brand",
    backgroundColor: "white",
    typeScale: "small",
    borderRadius: "sm",
  }),
  {
    cursor: "pointer",
    ":hover": {
      backgroundColor: vars.color.brand,
      color: vars.color.white,
    },
  },
]);

const Anchors = {
  textAnchor,
  outlinedAnchor,
};

export default Anchors;
