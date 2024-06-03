import { recipe } from "@vanilla-extract/recipes";

import { sprinkles } from "@/styles/sprinkles.css";

export const invisible = recipe({
  variants: {
    wide: {
      true: sprinkles({ display: { wide: "none" } }),
    },
    desktop: {
      true: sprinkles({ display: { desktop: "none" } }),
    },
    tablet: {
      true: sprinkles({ display: { tablet: "none" } }),
    },
    mobile: {
      true: sprinkles({ display: { mobile: "none" } }),
    },
    underWide: {
      true: sprinkles({ display: { underWide: "none" } }),
    },
    underDesktop: {
      true: sprinkles({ display: { underDesktop: "none" } }),
    },
    underTablet: {
      true: sprinkles({ display: { underTablet: "none" } }),
    },
  },
});
