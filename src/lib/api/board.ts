import { client } from "@/lib/axios";
import type { Board, BoardGroup } from "@/types";

export const getBoards = async () => (await client.get<Board[]>("boards/")).data;

export const getBoardBySlug = async (slug: string) =>
  (await client.get<Board>(`boards/${slug}/`)).data;

export const getBoardGroups = async () => (await client.get<BoardGroup[]>("board_groups/")).data;

export const getBoardGroupBySlug = async (slug: string) =>
  (await client.get<BoardGroup>(`board_groups/${slug}/`)).data;
