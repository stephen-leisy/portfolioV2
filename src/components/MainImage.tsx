'use client';
import { Image, Skeleton } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export const MainImage: React.FC<{ imgUrl: string }> = ({ imgUrl }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    console.log('on load running current state is: ', imageIsLoaded);
    setImageIsLoaded(true);
  };

  useEffect(() => {
    console.log('use effect running loading state is: ', imageIsLoaded);
    if (imageIsLoaded) console.log('loaded now?');
  }, [imageIsLoaded]);

  return (
    <Skeleton loading={!imageIsLoaded}>
      <Image
        w={{ base: '60vw', lg: '32vw' }}
        maxW="600px"
        src={imgUrl}
        alt="images for portfolio site"
        // loading="lazy"
        borderRadius="xl"
        onLoad={handleImageLoad}
      />
    </Skeleton>
  );
};
