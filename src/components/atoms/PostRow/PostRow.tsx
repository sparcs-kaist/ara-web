import React from "react";
import { Image as ImageIcon } from "react-feather";
import { MessageSquare, ThumbsDown, ThumbsUp } from "react-feather";
import { useTranslation } from "react-i18next";

import * as styles from "./PostRow.css";

type PostRowProps = {
  id: number;
  title: string;
  hasImage: boolean; // default: false
  hasFile: boolean; // default: false
  hasRank: boolean; // default: false
  isMainPagePost: boolean; // default: false
  isMessageToSchoolBoard: boolean; // default: false
  subInfo?: {
    responseStatus?: boolean;
    board?: string;
    author: string;
    views?: number;
    date?: string;
  };
  counts: {
    likes: number;
    dislikes: number;
    comments: number;
  };
  rank?: number;
  previewImage?: ImageBitmap;
  profileImage?: ImageBitmap;
};

export const PostRow: React.FC<{
  PostInfo: PostRowProps;
}> = ({ PostInfo }) => {
  const { t } = useTranslation();

  const ConditionalSubInfo = () => {
    const activeSubInfo = [];

    if (PostInfo.isMessageToSchoolBoard !== false) {
      activeSubInfo.push(
        <div key="responseStatus">
          <span className={styles.responseStatus}>{PostInfo.subInfo?.responseStatus}</span>
        </div>
      );
    }

    if (PostInfo.subInfo?.board !== undefined) {
      activeSubInfo.push(
        <div key="board">
          <span className={styles.board}>{PostInfo.subInfo?.board}</span>
        </div>
      );
    }

    if (PostInfo.subInfo?.author !== undefined) {
      activeSubInfo.push(<span key="author">{PostInfo.subInfo?.author}</span>);
    }

    if (PostInfo.subInfo?.views !== undefined) {
      activeSubInfo.push(
        <span key="views">
          {t("view")}
          {PostInfo.subInfo?.views}
        </span>
      );
    }

    if (PostInfo.subInfo?.date !== undefined) {
      activeSubInfo.push(<span key="date">{PostInfo.subInfo?.date}</span>);
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
      {PostInfo.hasRank ? (
        <div className={styles.rank}>{PostInfo.rank}</div>
      ) : PostInfo.isMainPagePost ? null : PostInfo.hasImage ? (
        <img className={styles.previewImage}>previewImage</img>
      ) : (
        <img className={styles.profileImage}>profileImage</img>
      )}
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleText}>{PostInfo.title}</div>
          {PostInfo.hasImage ? <ImageIcon size={16} className={styles.titleImage} /> : null}
        </div>
        <div className={styles.infoes}>
          <ConditionalSubInfo />
          <div className={styles.count}>
            <div className={styles.likes}>
              <ThumbsUp size={14} />
              <div className={styles.likeCount}>{PostInfo.counts.likes}</div>
            </div>
            <div className={styles.dislikes}>
              <ThumbsDown size={14} />
              <div className={styles.dislikeCount}>{PostInfo.counts.dislikes}</div>
            </div>
            <div className={styles.comments}>
              <MessageSquare size={14} />
              <div className={styles.commentCount}>{PostInfo.counts.comments}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
