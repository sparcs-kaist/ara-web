import * as styles from "./Invisible.css";

interface InvisibleProp {
  wide?: boolean;
  desktop?: boolean;
  tablet?: boolean;
  mobile?: boolean;
  underWide?: boolean;
  underDesktop?: boolean;
  underTablet?: boolean;
  children: React.ReactNode;
}

export const Invisible: React.FC<InvisibleProp> = ({
  wide,
  desktop,
  tablet,
  mobile,
  underWide,
  underDesktop,
  underTablet,
  children,
}) => {
  return (
    <div
      className={styles.invisible({
        wide,
        desktop,
        tablet,
        mobile,
        underWide,
        underDesktop,
        underTablet,
      })}
    >
      {children}
    </div>
  );
};
