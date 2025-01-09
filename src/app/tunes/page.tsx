import { PageWrapper } from '@/components/PageWrapper';
import { tunesConfig } from '@/configs/tunesConfig';
import { ScrollEffectPage } from '@/components/ScrollEffectPage';

const page: React.FC = () => (
  <PageWrapper header="Tunes">
    <ScrollEffectPage
      configData={tunesConfig}
      extraText="Outside of development & design, music holds one of the largest spots in
        my heart. I've been playing in bands, touring in ancient vans (not
        so much these days, tho), and recording/producing/mixing songs since I
        was a teenager and am still gigging around town in Portland, OR with my
        current project 'Sherbet Tone'. Here's a sampling of some
        of my favorite tunes from bands I've been in."
    />
  </PageWrapper>
);

export default page;
