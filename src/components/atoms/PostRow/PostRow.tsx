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
          <div className={styles.subInfo}>
            {PostInfo.isMessageToSchoolBoard === false ? null : (
              <div>
                <span className={styles.responseStatus}>{PostInfo.subInfo?.responseStatus}</span>·
              </div>
            )}
            {PostInfo.subInfo?.board === undefined ? null : (
              <div>
                <span className={styles.board}>{PostInfo.subInfo?.board}</span>·
              </div>
            )}
            {PostInfo.subInfo?.author === undefined ? null : (
              <span>{PostInfo.subInfo?.author} ·</span>
            )}
            {PostInfo.subInfo?.views === undefined ? null : (
              <span>
                {t("view")}
                {PostInfo.subInfo?.views} ·
              </span>
            )}
            {PostInfo.subInfo?.date === undefined ? null : <span>{PostInfo.subInfo?.date}</span>}
          </div>
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
