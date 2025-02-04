import React, { use, useCallback, useEffect, useRef, useState } from 'react';
import DialogText from './DialogText';
import ActionCommand from './Commands/ActionCommand';
import MoveCommand from './Commands/MoveCommand';
import { useRecoilState } from 'recoil';
import { systemState } from '@/recoil/systemState';
import { enemyState } from '@/recoil/parameter';
import { playerState } from '@/recoil/parameter';
import { resolve } from 'path';
import { count } from 'console';

// eslint-disable-next-line react/display-name
const BattleSystem = React.memo(() => {
  const [dialogText, setDialogText] = useState('');
  const [system, setSystem] = useRecoilState(systemState);
  const [enemy, setEnemy] = useRecoilState(enemyState);
  const [player, setPlayer] = useRecoilState(playerState);

  const [turnCount, setTurnCount] = useState(0);

  const promiseFunc = useCallback((func: () => void, time: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        func();
        resolve();
      }, time * 1000);
    });
  }, []);

  const waitForClickMove = useCallback(() => {
    console.log('waitForClick');
    return new Promise<void>((resolve) => {
      // if (system.isPlayerSelectedMove === true) {
      if (system.isPlayerSelectedMove) {
        resolve();
      }
    });
  }, [system.isPlayerSelectedMove]);

  const actionSelection = useCallback(() => {
    setSystem((prevSystem) => ({
      ...prevSystem,
      isReadyForSelectAction: true
    }));
    setDialogText('どうする？');
    console.log('actionSelection');
  }, []);

  const playerAttack = useCallback(() => {
    setEnemy((params) => {
      return { ...params, currentHP: params.currentHP - 1 };
    });
    console.log('playerAttack');
  }, []);

  const enemyAttack = useCallback(() => {
    setPlayer((params) => {
      return { ...params, currentHP: params.currentHP - 1 };
    });
    console.log('enemyAttack');
  }, []);

  let firstPerformUnit: () => void = playerAttack;
  let secondPerformUnit: () => void = enemyAttack;

  const decidePerformPriority = () => {
    if (player.speed < enemy.speed) {
      firstPerformUnit = enemyAttack;
      secondPerformUnit = playerAttack;
    }
  };

  const attack = () => {};

  useEffect(() => {
    const setUpBattle = () => {
      setDialogText('たんぱんこぞうが\nしょうぶをしかけてきた！');
      // setDialogText('あいてはコラッタをくりだした');
      // setTextWithTimer('とべ、くぼずか', 0);
    };
    setUpBattle();
  }, []);

  useEffect(() => {
    console.table(enemy);
    if (system.isPlayerSelectedMove) {
      setTurnCount((count) => count + 1);
    }

    const startBattle = async () => {
      // あいてが繰り出す
      // 自分が出す

      // スタンバイフェイズ　特性の処理

      // コマンド選択
      // アクション（たたかう、ポケモン、どうぐ(かいふくのくすり、げんきのかけら、ドーピング剤)、にげる(ピッピ)）

      await promiseFunc(actionSelection, 1);
      // 技選択
      await waitForClickMove();

      // すばやさ等を参照して行動優先順位を決定

      decidePerformPriority();

      // アクション
      firstPerformUnit();
      // await promiseFunc(firstPerformUnit, 1);
      setDialogText('player 攻撃');
      await promiseFunc(secondPerformUnit, 2);
      setDialogText('enemy 攻撃');

      // 戦闘処理

      // 残数判定=>いずれかの手持ちが0ならEnd Elseなら再びコマンド選択にループ
      await promiseFunc(() => {
        setDialogText('ran turn');
        setSystem((prevSystem) => ({
          ...prevSystem,
          isPlayerSelectedMove: false
        })); // この行を追加
        console.log(system);
      }, 2);
    };
    if (enemy.currentHP <= 0) {
      setDialogText('you win');
      return;
    }

    startBattle();
  }, [system.isPlayerSelectedMove]);

  const stateReload = () => {
    console.log(system);
  };

  return (
    <div className="relative">
      <DialogText text={dialogText} />
      {system.isReadyForSelectAction ? <ActionCommand /> : ''}
      {system.isReadyForSelectAction ? <MoveCommand /> : ''}
      <MoveCommand />
      <button onClick={stateReload}>a</button>
      <br />
      <a href="">{turnCount}</a>
    </div>
  );
});

export default BattleSystem;
