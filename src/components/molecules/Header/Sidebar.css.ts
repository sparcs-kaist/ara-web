import { style } from "@vanilla-extract/css";

import * as listStyles from "@/components/atoms/List/List.css";
import { sprinkles } from "@/styles/sprinkles.css";

export const sidebar = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    gap: "xl",
    position: "absolute",
    backgroundColor: "white",
    padding: "xl",
    boxShadow: "banner",
  }),
  {
    top: 0,
    right: 0,
    width: "30rem",
    height: "100%",
    borderTopLeftRadius: "1.6rem",
  },
]);

export const closeButton = style({
  width: "fit-content",
});

export const navigation = style([
  listStyles.list({ gap: "xl", direction: "y", alignItems: "flex-start" }),
]);
