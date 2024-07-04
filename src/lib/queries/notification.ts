import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  type GetNotificationsOptions,
  getNotifications,
  readNotification,
} from "@/lib/api/notification";

const NOTIFICATION_QUERY_KEY = "notifications";

export const useNotifications = (options?: GetNotificationsOptions) =>
  useQuery({
    queryKey: [NOTIFICATION_QUERY_KEY, options],
    queryFn: () => getNotifications(options),
  });

export const useReadNotification = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: readNotification,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [NOTIFICATION_QUERY_KEY] });
    },
  });
};
