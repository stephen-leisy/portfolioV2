import { PageTemplate } from '@/components/PageTemplate';
import { loremIpsum } from '@/utils/loremIpsum';

const page: React.FC = () => (
  <PageTemplate
    pageName="Tunes Coming Soon"
    columnOne={loremIpsum[0]}
    columnTwo={loremIpsum[1]}
    imgUrl="https://i.ibb.co/LznG7VG/9-BA46-C93-486-C-443-B-9-ED3-051-D0914-B948.jpg"
    imageWidth="55%"
  />
);

export default page;
