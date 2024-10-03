export interface StratVariant {
  name: string;
  description?: string;
  image?: string;
}

export interface Progression {
  name: string;
  multi: number;
  win: number;
  lossMulti: number;
  showLossMulti?: boolean;
}

export interface Strategy {
  name: string;
  description: string;
  videoLink: string;
  baseImg: string;
  variations: StratVariant[];
  progressions: Progression[];
}

export const stratData = {
  '9-streets': {
    name: '9 streets',
    description:
      '27 number system where you place 9 street bets (covering 3 numbers each). Basic layout is called 123 where you place a street bet on the 1st, 2nd, and 3rd street in each dozen.',
    videoLink: '7sHn9Of1vCY?si=tGXD8pyNMtO9rd8k',
    baseImg: '/roulette-strategy-helper/strats/9-streets/123.png',
    variations: [
      {
        name: 'Reverse',
        description:
          'Place your units on the 2, 3, 4 streets in each dozen.',
        image:
          '/roulette-strategy-helper/strats/9-streets/reverse.png',
      },
      {
        name: '1,3,4',
        description:
          'Place your units on the 1, 3, and 4th street in each dozen.',
        image: '/roulette-strategy-helper/strats/9-streets/134.png',
      },
      {
        name: 'Centipede',
        description:
          'Place 9 street bets all consecutive next to each other.',
        image:
          '/roulette-strategy-helper/strats/9-streets/centipede.png',
      },
    ],
    progressions: [
      {
        name: '9 streets',
        multi: 9,
        win: 3,
      },
    ],
  },
  'double-streets': {
    name: '5 Double Streets',
    baseImg:
      '/roulette-strategy-helper/strats/double-streets/goalPosts.png',
    description:
      '30 number system where you place your bet on 5 Double Streets (6 number coverage for each). Basic layout is called Goal Posts, where losses are 0, 1-3, 34-36',
    videoLink: 'FVXN7sAK7F0?si=HexIxaurTMOQArq_',
    variations: [
      {
        name: 'Slut',
        description:
          'Leave open the 1-4 Double Street to start, then rotate the open double street to the right each spin (no matter the result).',
        image:
          '/roulette-strategy-helper/strats/double-streets/slut.png',
      },
      {
        name: 'La Partage',
        description:
          'Takes advantage of getting half your 1:1 bet back on a 0. 3 units on either low (1-18) or high (19-36) and 2 units on the opposite dozen.',
        image:
          '/roulette-strategy-helper/strats/double-streets/french.png',
      },
      {
        name: 'Plague',
        description:
          'Leave open the double street that last hit. Ex: If 13 last hit you would do the following.',
        image:
          '/roulette-strategy-helper/strats/double-streets/plague.png',
      },
    ],
    progressions: [
      {
        name: '5 Double Streets',
        multi: 5,
        win: 1,
        lossMulti: 2,
        showLossMulti: true,
      },
    ],
  },
  'one-to-one': {},
  'one-to-one-plus-one': {},
  'mickey-mouse': {},
  'spread-your-streets': {},
  'spread-eagle': {},
  cya: {},
};
