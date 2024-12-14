'use client';
import { Image, Skeleton } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export const MainImage: React.FC<{ imgUrl: string }> = ({ imgUrl }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setImageIsLoaded(true);
  };

  useEffect(() => {
    //@TODO: Fix this weird loading bug in a way that does not require useTimeout
    const timer = setTimeout(() => {
      setImageIsLoaded(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
      setImageIsLoaded(false);
    };
  }, []);

  return (
    <Skeleton loading={!imageIsLoaded}>
      <Image
        w={{ base: '60vw', lg: '32vw' }}
        maxW="600px"
        src={imgUrl}
        alt="images for portfolio site"
        loading="lazy"
        borderRadius="xl"
        onLoad={handleImageLoad}
      />
    </Skeleton>
  );
};
