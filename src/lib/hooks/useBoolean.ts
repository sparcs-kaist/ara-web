import { useState } from "react";

export const useBoolean = (initialValue: boolean) => {
  const [value, setValue] = useState<boolean>(initialValue);

  return {
    value,
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
    toggle: () => setValue((curr) => !curr),
  };
};
