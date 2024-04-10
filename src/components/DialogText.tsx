import React from 'react';

type DialogTextProps = {
  text: string;
};

// eslint-disable-next-line react/display-name
const DialogText = React.memo(({ text }: DialogTextProps) => {
  return (
    <div>
      <div className="ml-24 mt-12 p-1 w-80 h-16 bg-lime-50 border border-blue-400  rounded-md">
        <p className="whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
});
export default DialogText;
