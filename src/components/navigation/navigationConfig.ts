'use strict';

interface INavigationConfig {
  display: string;
  link: string;
}

export const navigationConfig: INavigationConfig[] = [
  {
    display: 'Home',
    link: '/',
  },
  {
    display: 'Projects',
    link: '/projects',
  },
  {
    display: 'Links',
    link: '/links',
  },
  {
    display: 'Tunes',
    link: '/tunes',
  },
];
