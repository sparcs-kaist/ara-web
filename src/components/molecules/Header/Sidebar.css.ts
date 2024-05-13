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
    bottom: 0,
    right: "-50rem",
    width: "20rem",
    borderTopLeftRadius: "1.6rem",
    transition: "transform 0.2s ease-out",
  },
]);

export const opened = style([
  {
    transform: "translateX(-50rem)",
  },
]);

export const closeButton = style({
  width: "fit-content",
});

export const navigation = style([
  listStyles.list({ gap: "xl", direction: "y", alignItems: "flex-start" }),
  {
    overflow: "scroll",
  },
]);

export const backdrop = style([
  sprinkles({
    backgroundColor: "layerImage",
  }),
  { position: "fixed", top: 0, bottom: 0, right: 0, left: 0 },
]);
