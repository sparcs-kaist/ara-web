import Image from "next/image";
import React from "react";
import { Image as ImageIcon } from "react-feather";
import { MessageSquare, ThumbsDown, ThumbsUp } from "react-feather";
import { useTranslation } from "react-i18next";

import type { ResponseStatusVal } from "@/constants/const";

import * as styles from "./PostRow.css";

type PostRowProps = {
  id: number;
  title: string;

  hasImage: boolean;
  hasFile: boolean;

  subInfo?: {
    responseStatus?: ResponseStatusVal;
    board?: string;
    author: string;
    views?: number;
    date?: string;
  };
  counts?: {
    likes: number;
    dislikes: number;
    comments: number;
  };
  user: {
    profileImage: string; // URL
  };
} & (
  | { type: "withRank"; rank: number }
  | { type: "withPreview"; previewImage: string }
  | { type?: undefined }
);

export const PostRow: React.FC<PostRowProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.row}>
      {props.type === "withRank" ? (
        <div className={styles.rank}>{props.rank}</div>
      ) : (
        <Image
          width={"36"}
          height={"36"}
          src={props.type === "withPreview" ? props.previewImage : props.user.profileImage}
          className={styles.previewImage}
          alt={"preview image"}
        />
      )}
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleText}>{props.title}</div>
          {props.hasImage ? <ImageIcon size={16} className={styles.titleImage} /> : null}
        </div>
        <div className={styles.infoes}>
          {props.subInfo && (
            <div className={styles.subInfo}>
              {props.subInfo.responseStatus && (
                <span className={styles.responseStatus}>{props.subInfo.responseStatus}</span>
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
                <div className={styles.likeCount}>{props.counts.likes}</div>
              </div>
              <div className={styles.dislikes}>
                <ThumbsDown size={14} />
                <div className={styles.dislikeCount}>{props.counts.dislikes}</div>
              </div>
              <div className={styles.comments}>
                <MessageSquare size={14} />
                <div className={styles.commentCount}>{props.counts.comments}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
