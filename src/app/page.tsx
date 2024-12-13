import { PageTemplate } from '@/components/PageTemplate';

const Home: React.FC = () => (
  <PageTemplate
    pageName="Home"
    columnOne=" Hello there and welcome to my small portion of the internet! Im a curious
      person who likes to build things with code. I believe web development is
      creative at its core and enjoy utilizing my technical skill and artistic
      background to build practical, scalable applications with elegant, clean code. IM open to work and would love to collaborate and build something fun."
    columnTwo="Technical things I like using ('Tech Stack' if you will): Typescript, Next.js, Chakra UI, Tailwind, Storybook, RTK Query, Redux, Zustand, Jest, GraphQl, Node.js, Python (still very much learning!), and MongoDb. Im definitely more about the journey than the destination, but fingers crossed the journey is never longer than it needs to be."
    imgUrl="https://i.ibb.co/SJKP0MY/Untitled-1400-x-1165-px.jpg"
  />
);

export default Home;
