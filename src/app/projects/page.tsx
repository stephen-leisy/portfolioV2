import { Box } from '@chakra-ui/react';
import { projectConfig } from '@/configs/portfolioProjectConfig';
import { ProjectCard } from '@/components/ProjectCard';
import { PageWrapper } from '@/components/PageWrapper';

const page: React.FC = () => (
  <PageWrapper header="Projects">
    {projectConfig.map((props) => (
      <ProjectCard {...props} key={props.title + props.img1} />
    ))}
    <Box h={2}></Box>
  </PageWrapper>
);

export default page;
