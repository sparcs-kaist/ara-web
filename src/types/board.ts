import { z } from "zod";

import { NameType } from "@/constants/enum";

const baseSchema = z.object({
  id: z.number(),
  slug: z.string(),
  koName: z.string(),
  enName: z.string(),
});
type Base = z.infer<typeof baseSchema>;
const baseTransformer = ({ id, slug, koName, enName }: Base) => ({
  id,
  slug,
  name: {
    ko: koName,
    en: enName,
  },
});

const rawBoardSchema = baseSchema.extend({
  isReadonly: z.boolean(),
  nameType: z.nativeEnum(NameType),
  group: baseSchema,
  topics: baseSchema.array(),
  bannerImage: z.string().url(),
  koBannerDescription: z.string(),
  enBannerDescription: z.string(),
  topThreshold: z.number(),
  userReadable: z.boolean(),
  userWritable: z.boolean(),
});
type RawBoard = z.infer<typeof rawBoardSchema>;
const boardTransformer = (board: RawBoard) => ({
  id: board.id,
  slug: board.slug,
  name: {
    ko: board.koName,
    en: board.enName,
  },
  nameType: board.nameType,
  group: baseTransformer(board.group),
  topics: board.topics.map(baseTransformer),
  banner: {
    image: board.bannerImage,
    description: {
      ko: board.koBannerDescription,
      en: board.enBannerDescription,
    },
  },
  topThreshold: board.topThreshold,
  isReadOnly: board.isReadonly,
  isReadable: board.userReadable,
  isWritable: board.userWritable,
});
export const boardSchema = rawBoardSchema.transform(boardTransformer);
export type Board = z.infer<typeof boardSchema>;

export const boardGroupSchema = baseSchema
  .extend({
    boards: rawBoardSchema.array(),
  })
  .transform(({ boards, ...rest }) => ({
    ...baseTransformer(rest),
    boards: boards.map(boardTransformer),
  }));
export type BoardGroup = z.infer<typeof boardGroupSchema>;
