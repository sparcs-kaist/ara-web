import { defineProperties } from "@vanilla-extract/sprinkles";

import { vars } from "@/styles/theme.css";

const colors = { ...vars.color, transparent: "transparent", inherit: "inherit" };

export const colorProperties = defineProperties({
  properties: {
    borderColor: colors,
    backgroundColor: colors,
    color: colors,
  },
});
