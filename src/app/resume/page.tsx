import { PageTemplate } from '@/components/PageTemplate';
import { loremIpsum } from '@/utils/loremIpsum';

const page: React.FC = () => (
  <PageTemplate
    pageName="Resume Coming Soon"
    columnOne={loremIpsum[0]}
    columnTwo={loremIpsum[1]}
    imgUrl="https://www.theparisreview.org/blog/wp-content/uploads/2013/04/IMG_5084.jpg"
  />
);

export default page;
