'use strict';

export interface IProjectConfig {
  title: string;
  link: string;
  displayLink: string;
  img1: string;
  img2?: string;
}

export const projectConfig: IProjectConfig[] = [
  {
    title: 'BrewMenu (Part of BrewLogix Co-Location App)',
    link: 'https://app.brewlogix.com',
    displayLink: 'app.brewlogix.com',
    img1: 'https://i.ibb.co/2kZ7Rfh/Dec-09-2024-13-58-20.gif',
  },
  {
    title: 'Performance Platform (Part of BrewLogix Co-Location App)',
    link: 'https://app.brewlogix.com',
    displayLink: 'app.brewlogix.com',
    img1: 'https://i.ibb.co/Yk8VqD1/PP-demo-video.gif',
  },
  {
    title: 'Socket Jockey',
    link: 'https://socketjockey.netlify.app/',
    displayLink: 'socketjockey.com',
    img1: 'https://i.ibb.co/VmwqHjz/socketjockey-demo-2.gif',
    img2: 'https://i.ibb.co/Ldh3vDN/socket-jockey-demo-1.gif',
  },
];
