import { useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";

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
    staleTime: Infinity,
  });
};

export const useBoardGroups = () =>
  useSuspenseQuery({
    queryKey: ["boardGroups"],
    queryFn: getBoardGroups,
    staleTime: Infinity,
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
    staleTime: Infinity,
  });
};
