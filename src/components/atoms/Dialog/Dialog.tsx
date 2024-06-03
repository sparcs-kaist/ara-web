import { forwardRef } from "react";

type DialogProps = Omit<React.DialogHTMLAttributes<HTMLDialogElement>, "ref" | "onMouseDown"> & {
  close: () => void;
  children: React.ReactNode;
  innerClassName?: string;
};

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ close, children, innerClassName, ...props }, ref) => (
    <dialog
      ref={ref}
      onMouseDown={(event) => {
        if (typeof ref !== "function" && event.target === ref?.current) close();
      }}
      {...props}
    >
      <div className={innerClassName}>{children}</div>
    </dialog>
  )
);
Dialog.displayName = "Dialog";
