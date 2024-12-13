'use client';
import { Image, Skeleton } from '@chakra-ui/react';
import { useState } from 'react';

export const MainImage: React.FC<{ imageWidth: string; imgUrl: string }> = ({
  imageWidth,
  imgUrl,
}) => {
  const [imageIsLoaded, setImageIsLoaded] = useState<boolean>(false);

  const handleImageLoad = () => setImageIsLoaded(true);

  return (
    <Skeleton loading={!imageIsLoaded}>
      <Image
        w={{ base: '80%', lg: imageWidth }}
        src={imgUrl}
        alt="images for portfolio site"
        loading="lazy"
        borderRadius="xl"
        onLoad={handleImageLoad}
      />
    </Skeleton>
  );
};
