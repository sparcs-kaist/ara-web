// FIXME: Use better way to define enum
export const NameType = {
  NICKNAME: 1,
  ANONYMOUS: 2,
  NICKNAME_ANONYMOUS: 3,
  REALNAME: 4,
  NICKNAME_REALNAME: 5,
  ANONYMOUS_REALNAME: 6,
  NICKNAME_ANONYMOUS_REALNAME: 7,
} as const;

export const ResponseStatusType = {
  BEFORE_UPVOTES: "before_upvotes",
  BEFORE_RESPONSE: "before_response",
  AFTER_RESPONSE: "after_response",
} as const;
