import { projectConfig } from '@/configs/portfolioProjectConfig';
import { PageWrapper } from '@/components/PageWrapper';
import { ScrollEffectPage } from '@/components/ScrollEffectPage';

const page: React.FC = () => (
  <PageWrapper header="Projects">
    <ScrollEffectPage configData={projectConfig} />
  </PageWrapper>
);

export default page;
