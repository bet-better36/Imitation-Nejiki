import { atom } from 'recoil';
import player from '../data/image/player.png';
import enemy from '../data/image/enemy.png';

export type Chara = {
  maxHP: number;
  currentHP: number;
  image: HTMLImageElement;
};
export const playerState = atom<Chara>({
  key: 'player',
  default: { maxHP: 10, currentHP: 10, image: player }
});

export const enemyState = atom<Chara>({
  key: 'enemy',
  default: { maxHP: 10, currentHP: 10, image: enemy }
});
