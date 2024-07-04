import { client } from "@/lib/axios";
import { boardGroupSchema, boardSchema } from "@/types";

export const getBoards = async () => {
  const boards = (await client.get("boards/")).data;
  return boardSchema.array().parse(boards);
};

export const getBoardBySlug = async (slug: string) => {
  const board = (await client.get(`boards/${slug}/`)).data;
  return boardSchema.parse(board);
};

export const getBoardGroups = async () => {
  const boardGroups = (await client.get("board_groups/")).data;
  return boardGroupSchema.array().parse(boardGroups);
};

export const getBoardGroupBySlug = async (slug: string) => {
  const boardGroup = (await client.get(`board_groups/${slug}/`)).data;
  return boardGroupSchema.parse(boardGroup);
};
