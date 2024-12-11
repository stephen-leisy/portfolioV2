'use client';
import {
  useState,
  useEffect,
  RefObject,
  Dispatch,
  SetStateAction,
} from 'react';
import { usePathname } from 'next/navigation';

export const useScrolledToBottom = (
  scrollBoxRef: RefObject<HTMLDivElement>
): {
  handleScroll: () => void;
  setIsAtBottom: Dispatch<SetStateAction<boolean>>;
  isAtBottom: boolean;
} => {
  const pathname = usePathname();
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    if (scrollBoxRef?.current) {
      if (
        Math.trunc(
          scrollBoxRef.current.scrollHeight - scrollBoxRef.current.scrollTop
        ) === scrollBoxRef.current.clientHeight
      ) {
        setIsAtBottom(true);
      } else setIsAtBottom(false);
    }
  };

  useEffect(() => {
    if (
      scrollBoxRef?.current &&
      scrollBoxRef?.current.scrollHeight === scrollBoxRef?.current.clientHeight
    ) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  }, [pathname]);

  return {
    handleScroll,
    setIsAtBottom,
    isAtBottom,
  };
};
