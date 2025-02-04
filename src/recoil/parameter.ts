import { atom } from 'recoil';
import player from '../data/image/player.png';
import enemy from '../data/image/enemy.png';
import { StaticImageData } from 'next/image';

export type Chara = {
  maxHP: number;
  currentHP: number;
  speed: number;
  image: StaticImageData;
};
export const playerState = atom<Chara>({
  key: 'enemy',
  default: { maxHP: 10, currentHP: 10, speed: 2, image: player }
});

export const enemyState = atom<Chara>({
  key: 'player',
  default: { maxHP: 10, currentHP: 4, speed: 3, image: enemy }
});
