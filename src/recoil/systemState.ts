import { atom } from 'recoil';

export const systemState = atom({
  key: 'systemState',
  default: {
    isReadyForSelectAction: false,
    isReadyForSelectMove: false,
    isPlayerSelectedMove: false
  }
});
