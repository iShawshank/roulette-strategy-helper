import { useState } from 'react';
import { IRow } from '../interfaces/Row';

interface IProps {
  row: IRow;
  index: number;
  bankroll: number;
  handleClick: (index: number) => void;
  selectedId: number | null;
}

const MartingaleRow = ({
  row,
  index,
  bankroll,
  selectedId,
  handleClick,
}: IProps) => {
  const isTooMuch =
    row.loss + row.currentBet > bankroll ? true : false;

  const selected = selectedId === index;

  return (
    <div
      className={`martingale-row w-full divide-x-2 grid grid-cols-5 text-center ${
        isTooMuch ? 'bg-red-900' : ''
      } ${selected ? 'focused-row' : ''}`}
      onClick={() => handleClick(index)}
    >
      <p className="progression">{index}</p>
      <p className="total-bet">{row.currentBet}</p>
      <p className={isTooMuch ? 'text-white' : 'text-red-500'}>
        {row.loss}
      </p>
      <p className={isTooMuch ? 'text-white' : 'text-green'}>
        {row.profit}
      </p>
      <p className="recover">{row.recover}</p>
    </div>
  );
};

export default MartingaleRow;
