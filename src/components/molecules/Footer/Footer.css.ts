import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

export const footer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "md",
    color: "neutralLight1",
  }),
  {
    paddingTop: "6.4rem",
    paddingBottom: "3.2rem",
  },
]);

export const linkList = style([
  sprinkles({
    display: "flex",
    justifyContent: "center",
  }),
  {
    flexWrap: "wrap",
  },
]);

export const link = sprinkles({
  display: "inline-block",
  paddingX: "sm",
  textAlign: "center",
});

export const caution = sprinkles({
  textAlign: "center",
  textWrap: "balance",
});
