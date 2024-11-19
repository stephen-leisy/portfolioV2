'use client';
import { FullPageCenter } from '@/components/FullPageCenter';
import { LargeInfoCard } from '@/components/LargeInfoCard';

export const LandingPage = () => {
  return (
    <FullPageCenter>
      <LargeInfoCard
        imagePath="https://portfolio-v2-ivory-omega.vercel.app/siteimages1234/bathroom-selfie"
        header="Hi I'm Stephen!"
        subHeader="I am a full-stack software engineer"
        text="This site is currently under construction (hence the Mineragua, bathroom selfie), please check back again
          soon!"
      />
    </FullPageCenter>
  );
};
