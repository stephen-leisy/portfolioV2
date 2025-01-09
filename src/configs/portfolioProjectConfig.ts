'use strict';

import { IProjectConfig } from './config-types/projectConfigTypes';

export const projectConfig: IProjectConfig[] = [
  {
    id: 1,
    title: 'BrewMenu (Part of BrewLogix Co-Location App)',
    link: 'https://app.brewlogix.com',
    linkDisplayTitle: 'app.brewlogix.com',
    img1: 'https://i.ibb.co/2kZ7Rfh/Dec-09-2024-13-58-20.gif',
  },
  {
    id: 2,
    title: 'Performance Platform (Part of BrewLogix Co-Location App)',
    link: 'https://app.brewlogix.com',
    linkDisplayTitle: 'app.brewlogix.com',
    img1: 'https://i.ibb.co/Yk8VqD1/PP-demo-video.gif',
  },
  {
    id: 3,
    title: 'Socket Jockey',
    link: 'https://socketjockey.netlify.app/',
    linkDisplayTitle: 'socketjockey.com',
    img1: 'https://i.ibb.co/VmwqHjz/socketjockey-demo-2.gif',
    // Two images makes the scroll fade animation look weird. Commenting out for now.
    // img2: 'https://i.ibb.co/Ldh3vDN/socket-jockey-demo-1.gif',
  },
  {
    id: 4,
    title: 'Dash Comm Mobile App',
    link: 'https://apps.apple.com/us/app/dashcomm/id1619369014',
    linkDisplayTitle: 'apps.apple.com/dashcomm',
    img1: 'https://i.ibb.co/3F9VkkR/Screen-Shot-2024-11-06-at-9-48-28-AM.png',
  },
];
