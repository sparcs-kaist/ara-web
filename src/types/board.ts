import type { NameType } from "@/constants/enum";

export type BaseBoard = {
  id: number;
  slug: string;
  koName: string;
  enName: string;
};

export type Board = BaseBoard & {
  isReadonly: boolean;
  nameType: NameType;
  group: BaseBoardGroup;
  topics: {
    id: number;
    slug: string;
    koName: string;
    enName: string;
  }[];
  bannerImage: string;
  koBannerDescription: string;
  enBannerDescription: string;
  topThreshold: number;
  userReadable: boolean;
  userWritable: boolean;
};

type BaseBoardGroup = {
  id: number;
  slug: string;
  koName: string;
  enName: string;
};

export type BoardGroup = BaseBoardGroup & {
  boards: BaseBoard[];
};
