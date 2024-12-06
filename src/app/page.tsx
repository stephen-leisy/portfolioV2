import { PageTemplate } from '@/components/PageTemplate';

const Home: React.FC = () => (
  <PageTemplate
    pageName="Home"
    columnOne=" Hello there and welcome to my small portion of the internet! Im a curious
      person who likes to build things with code. I believe web development is
      creative at its core and enjoy utilizing my technical skill and artistic
      background to build practical applications with elegant, clean code."
    columnTwo="This site is still heavily under construction so please pardon all the lorem ipsum. Im currently learning GO to add to my stack of faves (Typescript/React/Next.js/Node.js) and neglecting my portfolio duties."
    // imgUrl="https://i.ibb.co/SJKP0MY/Untitled-1400-x-1165-px.jpg"
    imgUrl="https://i.ibb.co/vZrT6JZ/IMG-9611.jpg"
    imageWidth="55%"
  />
);

export default Home;
