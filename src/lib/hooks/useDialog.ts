import { useRef, useState } from "react";

export const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return {
    ref,
    isOpened,
    open: () => {
      ref.current?.showModal();
      setIsOpened(true);
    },
    close: () => {
      ref.current?.close();
      setIsOpened(false);
    },
  };
};
