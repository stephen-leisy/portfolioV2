import { PageTemplate } from '@/components/PageTemplate';
import { loremIpsum } from '@/utils/loremIpsum';

const page = () => (
  <PageTemplate
    pageName="Playlists Coming Soon"
    columnOne={loremIpsum[0]}
    columnTwo={loremIpsum[1]}
    imgUrl="https://images.squarespace-cdn.com/content/v1/586b53778419c244de1d3c4a/1595559236219-89MYVO4GR9TYRX64MC5T/red%2Bceiling.jpg"
  />
);

export default page;
