'use client';

import AA from '@/components/AA';
import BattleSystem from '@/components/BattleSystem';
import Enemy from '@/components/Enemy';
import Player from '@/components/Player';
import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';

type p = {};

const Home: React.FC<p> = () => {
  return (
    <>
      <RecoilRoot>
        <div className="flex">
          <Player />
          <Enemy />
        </div>
        <BattleSystem />
      </RecoilRoot>
    </>
  );
};

export default Home;
