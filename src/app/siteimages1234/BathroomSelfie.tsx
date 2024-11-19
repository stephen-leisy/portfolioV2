import Image from 'next/image';

export const BathroomSelfie = () => (
  <Image
    src="/bathroomselfie.jpg"
    quality={100}
    width={500}
    height={500}
    alt="bathroom selfie of portfolio author"
  />
);
