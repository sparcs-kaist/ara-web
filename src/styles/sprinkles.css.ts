import { createSprinkles } from "@vanilla-extract/sprinkles";

import { colorProperties, responsiveProperties, textProperties } from "@/styles/properties";

export const sprinkles = createSprinkles(colorProperties, responsiveProperties, textProperties);
