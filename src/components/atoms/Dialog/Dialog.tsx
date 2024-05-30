import { forwardRef } from "react";

type DialogProps = Omit<React.DialogHTMLAttributes<HTMLDialogElement>, "ref" | "onMouseDown"> & {
  children?: React.ReactNode;
};

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(({ children, ...props }, ref) => (
  <dialog
    ref={ref}
    onMouseDown={(event) => {
      if (typeof ref !== "function" && event.target === ref?.current) ref.current.close();
    }}
    {...props}
  >
    {children}
  </dialog>
));
Dialog.displayName = "Dialog";
