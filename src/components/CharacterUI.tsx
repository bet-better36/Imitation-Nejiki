import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

// eslint-disable-next-line react/display-name
const CharacterUI = React.memo(({ chara, imagePos }) => {
  const green = 'bg-green-600';
  const red = 'bg-red-600';
  // const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  let isChangeColorByHP = false;
  let barColor = green;
  if (chara.currentHP < 8) {
    isChangeColorByHP = true;
    barColor = red;
  }
  // useEffect(() => {
  //   // timerRef.current = setInterval(attack2, 1500);

  //   return () => {
  //     if (timerRef.current) {
  //       clearInterval(timerRef.current);
  //     }
  //   };
  // }, [isChangeColorByHP]);

  // if (chara.currentHP <= 0) {
  //   if (timerRef.current) clearInterval(timerRef.current);
  //   console.log(432);
  // }
  return (
    <div className="">
      <Image
        src={chara.image}
        alt="charaImage"
        className={`size-52 fixed ${imagePos.horizontal} ${imagePos.vertical}`}
      />
      HP:{chara.currentHP}/{chara.maxHP}
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
    </div>
  );
});
export default CharacterUI;
