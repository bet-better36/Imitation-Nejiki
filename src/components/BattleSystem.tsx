import React, { useCallback, useEffect, useRef, useState } from 'react';
import DialogText from './DialogText';
import ActionCommand from './Commands/ActionCommand';
import MoveCommand from './Commands/MoveCommand';
import { useRecoilState } from 'recoil';
import { systemState } from '@/recoil/systemState';
import { enemyState } from '@/recoil/parameter';
import { resolve } from 'path';

function BattleSystem() {
  const [dialogText, setDialogText] = useState('');
  const [system, setSystem] = useRecoilState(systemState);
  const [enemy, setEnemy] = useRecoilState(enemyState);

  const promiseFunc = useCallback((func, time) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        func();
        resolve();
      }, time * 1000);
    });
  }, []);

  const waitForClickAction = useCallback(() => {
    return new Promise((resolve) => {
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
  }, [setSystem, setDialogText]);

  const playerAttack = useCallback(() => {
    setEnemy((params) => {
      return { ...params, currentHP: params.currentHP - 1 };
    });
  }, [setEnemy]);

  useEffect(() => {
    const setUpBattle = () => {
      setDialogText('たんぱんこぞうが\nしょうぶをしかけてきた！');
      // setDialogText('あいてはコラッタをくりだした');
      // setTextWithTimer('とべ、くぼずか', 0);
    };
    setUpBattle();
  }, []);

  useEffect(() => {
    const startBattle = async () => {
      // あいてが繰り出す
      // 自分が出す

      // スタンバイフェイズ　特性の処理

      // コマンド選択
      // アクション（たたかう、ポケモン、どうぐ(かいふくのくすり、げんきのかけら、ドーピング剤)、にげる(ピッピ)）
      await promiseFunc(actionSelection, 1);

      // 技選択
      await waitForClickAction();

      // すばやさ等を参照して行動優先順位を決定

      // アクション

      setDialogText('player 攻撃');
      await promiseFunc(playerAttack, 1);

      await promiseFunc(() => {
        setDialogText('enemy 攻撃');
      }, 2);

      // 戦闘処理

      // 残数判定=>いずれかの手持ちが0ならEnd Elseなら再びコマンド選択にループ
      // setSystemStateForNextTurn();
      await promiseFunc(() => {
        setDialogText('ran turn');
        setSystem((prevSystem) => ({
          ...prevSystem,
          isPlayerSelectedMove: false
        })); // この行を追加
      }, 2);
      // console.log(system);
      // startBattle();
    };

    startBattle();
  }, [
    actionSelection,
    playerAttack,
    waitForClickAction,
    promiseFunc, // この行を追加
    system.isPlayerSelectedMove
  ]);

  return (
    <div className="relative">
      <DialogText text={dialogText} />
      {system.isReadyForSelectAction ? <ActionCommand /> : ''}
      {system.isReadyForSelectMove ? <MoveCommand /> : ''}
    </div>
  );
}

export default BattleSystem;
