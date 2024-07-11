import Image from "next/image";
import { Image as ImageIcon, MessageSquare, ThumbsDown, ThumbsUp } from "react-feather";
import { useTranslation } from "react-i18next";
import { match } from "ts-pattern";

import type { ResponseStatusVal } from "@/constants/const";

import * as styles from "./PostRow.css";

type PostRowProps = {
  title: string;

  hasImage?: boolean;
  hasFile?: boolean;

  subInfo?: {
    author: string;
    responseStatus?: ResponseStatusVal;
    board?: string;
    views?: number;
    date?: string;
  };
  counts?: {
    likes: number;
    dislikes: number;
    comments: number;
  };
} & (
  | { type: "withRank"; rank: number }
  | { type: "withPreview"; profileImage: string; previewImage?: string }
  | { type?: undefined }
);

export const PostRow: React.FC<PostRowProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.row}>
      {match(props)
        .with({ type: "withRank" }, ({ rank }) => <div className={styles.rank}>{rank}</div>)
        .with({ type: "withPreview" }, ({ profileImage, previewImage }) => (
          <div className={styles.previewImage}>
            <Image
              src={previewImage ?? profileImage}
              className={styles.primaryImage({
                borderRadius: previewImage ? "little" : "full",
              })}
              alt="preview"
              width={36}
              height={36}
            />
            {previewImage && (
              <Image
                src={profileImage}
                className={styles.secondaryImage}
                alt="preview"
                width={20}
                height={20}
              />
            )}
          </div>
        ))
        .otherwise(() => null)}
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleText}>{props.title}</div>
          {props.hasImage && <ImageIcon size={16} className={styles.titleImage} />}
        </div>
        <div className={styles.infoes}>
          {props.subInfo && (
            <div className={styles.subInfo}>
              {props.subInfo.responseStatus && (
                <span className={styles.responseStatus}>
                  {t(`responseStatus.${props.subInfo.responseStatus}`)}
                </span>
              )}
              {props.subInfo.board && <span className={styles.board}>{props.subInfo.board}</span>}
              <span>{props.subInfo.author}</span>
              {props.subInfo.views && (
                <span>
                  {t("view")} {props.subInfo?.views}
                </span>
              )}
              {props.subInfo.date && <span>{props.subInfo.date}</span>}
            </div>
          )}
          {props.counts && (
            <div className={styles.count}>
              <div className={styles.likes}>
                <ThumbsUp size={14} />
                <div className={styles.counts}>{props.counts.likes}</div>
              </div>
              <div className={styles.dislikes}>
                <ThumbsDown size={14} />
                <div className={styles.counts}>{props.counts.dislikes}</div>
              </div>
              <div className={styles.comments}>
                <MessageSquare size={14} />
                <div className={styles.counts}>{props.counts.comments}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
