import type { StorybookConfig } from "@storybook/nextjs";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: (config) => {
    config.plugins?.push(new VanillaExtractPlugin(), new MiniCssExtractPlugin());
    config.module?.rules?.forEach((rule) => {
      if (rule && rule !== "..." && rule.test instanceof RegExp && rule.test.test("test.css")) {
        rule.exclude = /\.vanilla\.css$/i;
      }
    });
    config.module?.rules?.push({
      test: /\.vanilla\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve("css-loader"),
          options: {
            url: false,
          },
        },
      ],
    });
    return config;
  },
};

export default config;
