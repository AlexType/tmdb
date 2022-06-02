import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
): void => {
  const handleClick = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return (): void => document.removeEventListener("click", handleClick);
  });
};
