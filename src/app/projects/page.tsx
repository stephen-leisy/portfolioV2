import { PageTemplate } from '@/components/PageTemplate';
import { loremIpsum } from '@/utils/loremIpsum';

const page = () => (
  <PageTemplate
    pageName="Projects Coming Soon"
    columnOne={loremIpsum[0]}
    columnTwo={loremIpsum[1]}
    imgUrl="https://www.thedailybeast.com/resizer/v2/PQTI2DXG5VJ55KQARUV6QUYXSQ.jpg?smart=true&auth=367fe58349f6fa5b56551ab39f4ca0e94dc0fe3bb8f6cfa3a99f58b912fe2ed4&width=2560&height=1440"
  />
);

export default page;
