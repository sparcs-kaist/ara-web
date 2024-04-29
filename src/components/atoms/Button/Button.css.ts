import { style } from "@vanilla-extract/css";

import { sprinkles } from "@/styles/sprinkles.css";

/**
 * Buttons are used to trigger actions or events.
 */

const iconButton = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    padding: "none",
    border: "none",
    backgroundColor: "transparent",
  }),
  {
    cursor: "pointer",
  },
]);

const Buttons = {
  iconButton,
};

export default Buttons;
