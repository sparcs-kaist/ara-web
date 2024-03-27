import { defineProperties } from "@vanilla-extract/sprinkles";

export const textProperties = defineProperties({
  properties: {
    textAlign: ["left", "center", "right"],
    textWrap: ["balance"],
    typeScale: {
      bannerTitle: {
        fontSize: "1.8rem",
        lineHeight: 1.4,
        fontWeight: 800,
      },
      title: {
        fontSize: "1.6rem",
        lineHeight: 1.4,
        fontWeight: 700,
      },
      defaultBold: {
        fontSize: "1.4rem",
        lineHeight: 1.4,
        fontWeight: 700,
      },
      default: {
        fontSize: "1.4rem",
        lineHeight: 1.4,
        fontWeight: 400,
      },
      small: {
        fontSize: "1.2rem",
        lineHeight: 1.4,
        fontWeight: 400,
      },
      smallCaption: {
        fontSize: "1.0rem",
        lineHeight: 1.4,
        fontWeight: 500,
      },
      navigation: {
        fontSize: "1.4rem",
        fontWeight: 500,
      },
    },
  },
});
