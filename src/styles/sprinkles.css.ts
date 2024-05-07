import { createSprinkles } from "@vanilla-extract/sprinkles";

import {
  colorProperties,
  effectProperties,
  responsiveProperties,
  textProperties,
} from "@/styles/properties";

export const sprinkles = createSprinkles(
  colorProperties,
  effectProperties,
  responsiveProperties,
  textProperties
);
