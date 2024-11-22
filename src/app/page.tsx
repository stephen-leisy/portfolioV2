import { PageTemplate } from '@/components/PageTemplate';
import { loremIpsum } from '@/utils/loremIpsum';

const Home: React.FC = () => (
  <PageTemplate
    pageName="Home"
    columnOne=" Hello there and welcome to my small portion of the internet! Im a curious
      person who likes to build things with code. I believe web development is
      creative at its core and enjoy utilizing my technical skill and artistic
      background to build practical applications with elegant, clean code."
    columnTwo={loremIpsum[1]}
    imgUrl="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/465715123_10106632498412008_8522622303362615847_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=b04a48&_nc_ohc=TG47aDD44OgQ7kNvgHaeFu5&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=AwYPdGqR5kT72JsxTHaW3hG&oh=00_AYDK9lOKxmng83aOCHBbN2058biJeoKppV63l6M3xfqnsA&oe=6746CFFA"
  />
);

export default Home;
