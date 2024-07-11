import type { Meta, StoryObj } from "@storybook/react";

import { PostRow } from "./PostRow";

const meta = {
  title: "PostRow",
  component: PostRow,
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Title",
    hasImage: false,
    hasFile: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PostRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {};

export const Attachments: Story = {
  args: {
    hasImage: true,
    hasFile: true,
  },
};

export const SubInfo: Story = {
  args: {
    subInfo: {
      responseStatus: "beforeResponse",
      board: "자유게시판",
      author: "Ara 관리자",
      views: 42,
      date: "10분 전",
    },
  },
};

export const WithRank: Story = {
  args: {
    type: "withRank",
    rank: 1,
  },
};

export const WithPreview: Story = {
  args: {
    type: "withPreview",
    profileImage: "https://via.placeholder.com/36",
  },
};

export const All: Story = {
  args: {
    hasImage: true,
    hasFile: true,
    subInfo: {
      responseStatus: "beforeResponse",
      board: "자유게시판",
      author: "Ara 관리자",
      views: 42,
      date: "10분 전",
    },
    counts: {
      likes: 42,
      dislikes: 42,
      comments: 42,
    },
  },
};
