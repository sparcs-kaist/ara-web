import { client } from "@/lib/axios";
import { notificationSchema, paginationSchema } from "@/types";

export type GetNotificationsOptions = {
  page?: number;
  unread?: boolean;
};

export const getNotifications = async (options?: GetNotificationsOptions) => {
  const notifications = (
    await client.get("notifications/", {
      params: {
        page: options?.page,
        is_read: options?.unread === undefined ? undefined : !options.unread,
      },
    })
  ).data;
  return paginationSchema(notificationSchema).parse(notifications);
};

export const readNotification = async (id: number) => {
  await client.post(`notifications/${id}/read/`);
};
