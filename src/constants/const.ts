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
  BEFORE_UPVOTES: "before_upvotes",
  BEFORE_RESPONSE: "before_response",
  AFTER_RESPONSE: "after_response",
} as const;
export type ResponseStatusVal = (typeof ResponseStatus)[keyof typeof ResponseStatus];
