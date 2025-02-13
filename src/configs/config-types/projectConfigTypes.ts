'use strict';

export interface IProjectConfig {
  id: number;
  title: string;
  link: string;
  linkDisplayTitle: string;
  isVisible?: boolean;
  img1?: string;
  img2?: string;
  iframeSource?: string;
}
