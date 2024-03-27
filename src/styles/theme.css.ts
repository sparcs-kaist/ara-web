import { createGlobalTheme } from "@vanilla-extract/css";

import { primitiveColors } from "@/styles/primitives.css";

export const vars = createGlobalTheme(":root", {
  color: {
    white: primitiveColors.white,

    brand: primitiveColors.red400,
    brandLight1: primitiveColors.red300,
    brandLight2: primitiveColors.red100,
    brandDark: primitiveColors.red500,

    neutral: primitiveColors.black,
    neutralSub: primitiveColors.gray600,
    neutralLight1: primitiveColors.gray500,
    neutralLight2: primitiveColors.gray300,
    neutralLight3: primitiveColors.gray50,

    negative: primitiveColors.blue500,
    negativeLight: primitiveColors.blue100,
    negativeDark: primitiveColors.blue800,

    layerImage: primitiveColors.blackAlpha10,
    layerHeader: primitiveColors.whiteAlpha10,
  },
  space: {
    none: "0",
    xs: "0.4rem",
    sm: "0.8rem",
    md: "1.2rem",
    lg: "1.6rem",
    xl: "2.0rem",
    xxl: "2.4rem",
  },
  round: {
    none: "0",
    sm: "0.8rem",
    md: "1.2rem",
    lg: "1.6rem",
    half: "50%",
  },
});
