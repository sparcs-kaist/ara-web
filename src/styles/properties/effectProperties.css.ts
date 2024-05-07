import { defineProperties } from "@vanilla-extract/sprinkles";

import { vars } from "../theme.css";

export const effectProperties = defineProperties({
  properties: {
    boxShadow: {
      banner: `0rem 0.2rem 0.8rem 0rem ${vars.color.layerImage}`,
    },
  },
});
