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
export type NameTypeVal = (typeof NameType)[keyof typeof NameType];

export const ResponseStatus = {
  BEFORE_UPVOTES: "beforeUpvotes",
  BEFORE_RESPONSE: "beforeResponse",
  AFTER_RESPONSE: "afterResponse",
} as const;
export type ResponseStatusVal = (typeof ResponseStatus)[keyof typeof ResponseStatus];
