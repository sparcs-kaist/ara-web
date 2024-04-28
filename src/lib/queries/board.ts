import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getBoardBySlug, getBoardGroupBySlug, getBoardGroups, getBoards } from "@/lib/api/board";
import type { Board, BoardGroup } from "@/types";

export const useBoards = () =>
  useQuery({
    queryKey: ["boards"],
    queryFn: getBoards,
  });

export const useBoardBySlug = (slug: string) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["board", slug],
    queryFn: () => getBoardBySlug(slug),
    initialData: () =>
      queryClient.getQueryData<Board[]>(["boards"])?.find((board) => board.slug === slug),
  });
};

export const useBoardGroups = () =>
  useQuery({
    queryKey: ["boardGroups"],
    queryFn: getBoardGroups,
  });

export const useBoardGroupBySlug = (slug: string) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["boardGroup", slug],
    queryFn: () => getBoardGroupBySlug(slug),
    initialData: () =>
      queryClient
        .getQueryData<BoardGroup[]>(["boardGroups"])
        ?.find((boardGroup) => boardGroup.slug === slug),
  });
};
