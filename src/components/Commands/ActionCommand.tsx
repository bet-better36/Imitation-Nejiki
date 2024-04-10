import React from 'react';

import { useRecoilState } from 'recoil';
import { systemState } from '@/recoil/systemState';
import { log } from 'console';

function ActionCommand() {
  const [system, setSystem] = useRecoilState(systemState);

  const goToMove = () => {
    setSystem((pre) => ({
      ...pre,
      isReadyForSelectAction: false,
      isReadyForSelectMove: true
    }));
    console.log('goToMove', system);
  };

  return (
    <div className="m-2 ">
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={goToMove}
          className="col-span-3 bg-red-400 rounded-md text-center "
        >
          たたかう
        </button>
        <button className="bg-yellow-400 rounded-md text-center ">
          ポケモン
        </button>
        <button className="bg-violet-400 rounded-md text-center ">
          ぴっぴ
        </button>
        <button className="bg-lime-400 rounded-md text-center ">どうぐ</button>
      </div>
    </div>
  );
}

export default ActionCommand;
