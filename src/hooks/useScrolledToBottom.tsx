'use client';
import {
  useState,
  useEffect,
  RefObject,
  Dispatch,
  SetStateAction,
} from 'react';
import { usePathname } from 'next/navigation';

/**
 * Custom hook utilizing useRef to determine if a scrollable div has reached the bottom of its content
 * @param scrollBoxRef The ref associated with a scrollable div
 */
export const useScrolledToBottom = (
  scrollBoxRef: RefObject<HTMLDivElement>
): {
  handleScroll: () => void;
  setIsAtBottom: Dispatch<SetStateAction<boolean>>;
  isAtBottom: boolean;
} => {
  const pathname = usePathname();
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

  // Function that listens onScroll and if user has reached the bottom of the scrollable div we set 'isAtBottom' to true, otherwise 'isAtBottom' is set to false
  const handleScroll = () => {
    if (scrollBoxRef?.current) {
      if (
        // checking basically is its within 2 pixels of the bottom. Close enough to not have the scroll down icon show.
        Math.trunc(
          scrollBoxRef.current.scrollHeight - scrollBoxRef.current.scrollTop
        ) <
        scrollBoxRef.current.clientHeight + 2
      ) {
        setIsAtBottom(true);
      } else setIsAtBottom(false);
    }
  };

  /**
   * This use effect runs when pathname changes. Since this hook is used within the Next.js layout page, we are not rerendering the nav bar when the user clicks to navigate to other pages.
   * This is ideal that the nav bar only renders once, but means that we need to listen for router changes to reset the 'isAtBottom' boolean.
   */
  useEffect(() => {
    if (
      scrollBoxRef?.current &&
      scrollBoxRef?.current.scrollHeight === scrollBoxRef?.current.clientHeight
    ) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return {
    handleScroll,
    setIsAtBottom,
    isAtBottom,
  };
};
