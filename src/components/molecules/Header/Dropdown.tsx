import { useState } from "react";
import Skeleton from "react-loading-skeleton";

import { Dropdown, Item } from "@/components/atoms";
import { useBoardGroups } from "@/lib/queries";
import i18n from "@/utils/i18n";

import * as styles from "./Dropdown.css";

export const HoverDropdowns: React.FC = () => {
  const { data: boardGroups } = useBoardGroups();

  return (
    <>
      {boardGroups.map(({ id, koName, enName, boards }) => (
        <Item key={id}>
          <Dropdown
            title={i18n.language === "ko_KR" ? koName : enName}
            boards={boards}
            openOnHover={true}
          />
        </Item>
      ))}
    </>
  );
};

export const ClickableDropdowns: React.FC = () => {
  const [openedGroupId, setOpenedGroupId] = useState<number | null>(null);
  const { data: boardGroups } = useBoardGroups();

  return (
    <>
      {boardGroups?.map(({ id, koName, enName, boards }) => (
        <Item key={id}>
          <Dropdown
            title={i18n.language === "ko_KR" ? koName : enName}
            boards={boards}
            openOnHover={false}
            isOpened={openedGroupId === id}
            onClick={() => setOpenedGroupId((curr) => (curr === id ? null : id))}
          />
        </Item>
      ))}
    </>
  );
};

export const DropdownSkeletons: React.FC<{ num: number }> = ({ num }) => (
  <>
    {[...Array(num)].map((_, idx) => (
      <Item key={idx}>
        <Skeleton className={styles.dropdownSkeleton} />
      </Item>
    ))}
  </>
);
