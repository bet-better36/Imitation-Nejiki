import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { enemyState } from '@/recoil/parameter';
import CharacterUI from './CharacterUI';

// eslint-disable-next-line react/display-name
const Enemy = React.memo(() => {
  const [enemy, setEnemy] = useRecoilState(enemyState);
  const enemyPos = {
    vertical: 'top-10',
    horizontal: 'right-0'
  };
  // eslint-disable-next-line react/display-name
  return (
    <div className="fixed right-0">
      <CharacterUI chara={enemy} imagePos={enemyPos} />
    </div>
  );
});
export default Enemy;
