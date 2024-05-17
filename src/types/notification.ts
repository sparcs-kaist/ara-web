import { z } from "zod";

import { NameType } from "@/constants/enum";

const baseSchema = z.object({
  id: z.number(),
  createdAt: z.coerce.date(),
  title: z.string(),
  content: z.string(),
  isRead: z.boolean(),
  relatedArticle: z.object({
    id: z.number(),
    createdAt: z.coerce.date(),
    createdBy: z.number(),
    title: z.string(),
    nameType: z.nativeEnum(NameType),
    parentBoard: z.number(),
    parentTopic: z.number().nullable(),
  }),
});
const commentNotificationSchema = baseSchema
  .extend({
    type: z.literal("article_commented"),
    relatedComment: z.null(),
  })
  .transform(({ type, ...data }) => ({ type: "comment" as const, ...data }));
const replyNotificationSchema = baseSchema
  .extend({
    type: z.literal("comment_commented"),
    relatedComment: z.object({
      id: z.number(),
      createdAt: z.coerce.date(),
      createdBy: z.number(),
      content: z.string(),
      nameType: z.nativeEnum(NameType),
    }),
  })
  .transform(({ type, ...data }) => ({ type: "reply" as const, ...data }));
export const notificationSchema = z.union([commentNotificationSchema, replyNotificationSchema]);
export type Notification = z.infer<typeof notificationSchema>;
