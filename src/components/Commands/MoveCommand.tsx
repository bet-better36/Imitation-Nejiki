import React from 'react';
import { useRecoilState } from 'recoil';
import { systemState } from '@/recoil/systemState';
import { enemyState } from '@/recoil/parameter';

function MoveCommand() {
  const [system, setSystem] = useRecoilState(systemState);
  const [enemy, setEnemy] = useRecoilState(enemyState);

  const goToAciton = () => {
    setSystem((pre) => ({
      ...pre,
      isReadyForSelectMove: false,
      isReadyForSelectAction: true
    }));
    console.log('goToAciton', system);
  };

  const atk = () => {
    setSystem({
      ...system,
      isReadyForSelectMove: false,
      isPlayerSelectedMove: true
    });
    console.log(system);
  };

  return (
    <div className="m-2">
      <div className="grid grid-cols-2 gap-4">
        <button onClick={atk} className="bg-green-500 rounded-md text-center ">
          たいあたり
        </button>
        <button className="bg-green-500 rounded-md text-center ">
          でんこうせっか
        </button>
        <button className="bg-green-500 rounded-md text-center ">
          のしかかり
        </button>
        <button className="bg-green-500 rounded-md text-center ">
          かまいたち
        </button>
        <button
          onClick={goToAciton}
          className="col-span-2 bg-cyan-400 rounded-md text-center "
        >
          もどる
        </button>
      </div>
    </div>
  );
}

export default MoveCommand;
