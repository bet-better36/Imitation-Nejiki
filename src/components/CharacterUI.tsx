import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Chara } from '@/recoil/parameter';

type Props = {
  chara: Chara;
  imagePos: {
    vertical: string;
    horizontal: string;
  };
};

// eslint-disable-next-line react/display-name
const CharacterUI = React.memo(({ chara, imagePos }: Props) => {
  const green = 'bg-green-600';
  const red = 'bg-red-600';
  // const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  let isChangeColorByHP = false;
  let barColor = green;
  if (chara.currentHP < chara.maxHP / 3) {
    isChangeColorByHP = true;
    barColor = red;
  }
  return (
    <div className="">
      <Image
        src={chara.image}
        alt="charaImage"
        className={`size-52  ${imagePos.horizontal} ${imagePos.vertical}`}
      />
      <div className="w-52 bg-gray-500   rounded-full dark:bg-gray-700">
        <div
          className={`${barColor} leading-none rounded-full
    `}
          style={{
            width: `${(chara.currentHP / chara.maxHP) * 100}%`
          }}
        >
          <p>ㅤ</p>
        </div>
      </div>
      HP:{chara.currentHP}/{chara.maxHP}
    </div>
  );
});
export default CharacterUI;
