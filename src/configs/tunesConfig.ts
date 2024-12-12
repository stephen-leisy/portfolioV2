'use strict';

export interface ITunesConfig {
  source: string;
  bandName: string;
  songName: string;
  songLink: string;
}

export const tunesConfig: ITunesConfig[] = [
  {
    bandName: 'Genders',
    songName: 'Life Is But A Dream',
    songLink: 'https://soundcloud.com/genderspdx/life-is-but-a-dream',
    source:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/273085255&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  },
  {
    bandName: 'Sherbet Tone',
    songName: "Late Summer's Eve; Rustling Leaves",
    songLink: 'https://soundcloud.com/sherbettone/late-summers-eve-rustling',
    source:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/930964594%3Fsecret_token%3Ds-EysjuPJOnMA&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  },
  {
    bandName: 'Moon Shy',
    songName: 'Fantasies',
    songLink: 'https://moonshy.bandcamp.com/track/fantasies',
    source:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/632351130&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
  },
];
