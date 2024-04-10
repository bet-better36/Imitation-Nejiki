import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { playerState } from '@/recoil/parameter';

import CharacterUI from './CharacterUI';

// eslint-disable-next-line react/display-name
const Player = React.memo(() => {
  const [player, setPlayer] = useRecoilState(playerState);
  const playerPos = {
    vertical: 'top-0',
    Horizontal: 'right-0'
  };

  return (
    <div className="mt-52">
      <CharacterUI chara={player} imagePos={playerPos} />
    </div>
  );
});

export default Player;
