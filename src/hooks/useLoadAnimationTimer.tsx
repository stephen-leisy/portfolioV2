'use client';

import { useEffect, useState } from 'react';

export const useLoadAnimationTimer = () => {
  const [loadAnimationInProgress, setLoadAnimationInProgress] =
    useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadAnimationInProgress(false);
    }, 100);
    return () => {
      clearTimeout(timer);
      setLoadAnimationInProgress(true);
    };
  }, []);

  return loadAnimationInProgress;
};
