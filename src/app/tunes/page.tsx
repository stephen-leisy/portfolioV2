import { PageWrapper } from '@/components/PageWrapper';
import { Box, Text } from '@chakra-ui/react';
import { tunesConfig } from '@/configs/tunesConfig';
import { ProjectCard } from '@/components/ProjectCard';

const page: React.FC = () => (
  <PageWrapper header="Tunes">
    <Text fontSize="xs" fontWeight={500}>
      Outside of development & design, music holds one of the largest spots in
      my heart. I&apos;ve been playing in bands, touring in ancient vans (not so
      much these days, tho), and recording/producing/mixing songs since I was a
      teenager and am still gigging around town in Portland, OR with my current
      project &apos;Sherbet Tone&apos;. Here&apos;s a sampling of some of my
      favorite tunes from bands I&apos;ve been in.
    </Text>
    {tunesConfig.map((props) => (
      <ProjectCard {...props} key={props.iframeSource} />
      // <TunesIframe {...props} key={props.source} />
    ))}
    <Box h={2}></Box>
  </PageWrapper>
);

export default page;
