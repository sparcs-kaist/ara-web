import type { Preview } from "@storybook/react";
import React from "react";

import "@/styles/global.css";

import { sprinkles } from "../src/styles/sprinkles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      // TODO: Use className={pretendard.className} after the issue is resolved
      // https://github.com/storybookjs/storybook/issues/26845
      <div
        className={sprinkles({ typeScale: "default" })}
        style={{ fontFamily: "Pretendard Variable" }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
