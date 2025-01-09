'use client';

import { Box, Text, Flex } from '@chakra-ui/react';
import { ProjectCard } from '@/components/ProjectCard';
import { useInView, InView } from 'react-intersection-observer';
import { IProjectConfig } from '@/configs/config-types/projectConfigTypes';
import React, { useState } from 'react';

export const ScrollEffectPage: React.FC<{
  configData: IProjectConfig[];
  extraText?: string;
}> = ({ configData, extraText }) => {
  const [visibleSection, setVisibleSection] = useState<number[]>([]);
  const { ref } = useInView({
    threshold: 0.5,
  });

  const setInView = (id: number) => {
    if (!visibleSection.includes(id) && id === visibleSection.length + 1) {
      setVisibleSection([...visibleSection, id]);
    }
  };

  return (
    <Flex flexDirection="column" ref={ref}>
      {extraText && (
        <Text fontSize="xs" fontWeight={500} pb={{ base: 12, md: 16 }}>
          {extraText}
        </Text>
      )}
      <Flex gap={{ base: 12, md: 16 }} flexDirection="column" ref={ref}>
        {configData.map((props) => (
          <InView
            onChange={() => setInView(props.id)}
            threshold={0.5}
            key={props.id}
          >
            {({ ref }) => {
              return (
                <div ref={ref}>
                  <ProjectCard
                    {...props}
                    isVisible={visibleSection.includes(props.id)}
                  />
                </div>
              );
            }}
          </InView>
        ))}
      </Flex>
      <Box h={8} />
    </Flex>
  );
};
