import React from "react";
import { Image as ImageIcon } from "react-feather";
import { MessageSquare, ThumbsDown, ThumbsUp } from "react-feather";
import { useTranslation } from "react-i18next";

import type { ResponseStatusType } from "@/constants/const";

import * as styles from "./PostRow.css";

type PostRowProps = {
  id: number;
  title: string;

  hasImage: boolean; // default: false
  hasFile: boolean; // default: false

  subInfo?: {
    responseStatus?: ResponseStatusType;
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
  | { type: "board" }
  | { type?: undefined }
);

export const PostRow: React.FC<PostRowProps> = (props) => {
  const { t } = useTranslation();

  const ConditionalSubInfo = () => {
    const activeSubInfo = [];

    if (props.subInfo?.responseStatus !== undefined) {
      activeSubInfo.push(
        <div key="responseStatus">
          <span className={styles.responseStatus}>{String(props.subInfo?.responseStatus)}</span>
        </div>
      );
    }

    if (props.subInfo?.board !== undefined) {
      activeSubInfo.push(
        <div key="board">
          <span className={styles.board}>{props.subInfo?.board}</span>
        </div>
      );
    }

    if (props.subInfo?.author !== undefined) {
      activeSubInfo.push(<span key="author">{props.subInfo?.author}</span>);
    }

    if (props.subInfo?.views !== undefined) {
      activeSubInfo.push(
        <span key="views">
          {t("view")}
          {props.subInfo?.views}
        </span>
      );
    }

    if (props.subInfo?.date !== undefined) {
      activeSubInfo.push(<span key="date">{props.subInfo?.date}</span>);
    }

    return (
      <div className={styles.subInfo}>
        {activeSubInfo.map((div, index) => (
          <React.Fragment key={index}>
            {div}
            {index < activeSubInfo.length - 1 && " · "}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.row}>
      {props.type === "withRank" ? (
        <div className={styles.rank}>{props.rank}</div>
      ) : props.type !== "board" ? null : props.hasImage ? (
        <img className={styles.previewImage}>previewImage</img>
      ) : (
        <img className={styles.profileImage}>profileImage</img>
      )}
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleText}>{props.title}</div>
          {props.hasImage ? <ImageIcon size={16} className={styles.titleImage} /> : null}
        </div>
        <div className={styles.infoes}>
          <ConditionalSubInfo />
          {props.counts === undefined ? null : (
            <div className={styles.count}>
              <div className={styles.likes}>
                <ThumbsUp size={14} />
                <div className={styles.likeCount}>{props.counts?.likes}</div>
              </div>
              <div className={styles.dislikes}>
                <ThumbsDown size={14} />
                <div className={styles.dislikeCount}>{props.counts?.dislikes}</div>
              </div>
              <div className={styles.comments}>
                <MessageSquare size={14} />
                <div className={styles.commentCount}>{props.counts?.comments}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
