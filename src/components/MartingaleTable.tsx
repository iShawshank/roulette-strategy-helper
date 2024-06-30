import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import MartingaleRow from './MartingaleRow';
import { calculateTable } from '../utils/martingale';
import { IRow } from '../interfaces/Row';

interface IProps {
  tableName: string;
  multiplier: number;
  win: number;
  lossMultiplier?: number;
  bankroll: number;
}

const MartingaleTable = ({
  tableName,
  multiplier = 1,
  win = 1,
  lossMultiplier = 2,
  bankroll,
}: IProps) => {
  const [unit, setUnit] = useState(1);
  const [rows, setRows] = useState<IRow[]>([]);

  // Handle change to unit
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    console.log(event.target.value);
    setUnit(Number(event.target.value));
  };

  useEffect(() => {
    setRows(calculateTable(unit, multiplier, win, lossMultiplier));
  }, [unit, multiplier, win, lossMultiplier]);

  return (
    <div className="martingale-table max-w-2xl flex flex-col justify-center items-center p-4 border-green border rounded-xl">
      <p className="text-xl font-bold">{tableName}</p>
      <div className="flex gap-4">
        <label htmlFor="unit">Unit size</label>
        <input
          type="text"
          name="unit"
          id="unit"
          onChange={debounce(handleChange, 1000)}
          placeholder="1"
        />
      </div>
      {rows.length && (
        <div className="flex flex-col">
          <div className="w-full grid grid-cols-5 text-center">
            <p className="flex-wrap progression">Progressions</p>
            <p className="flex-wrap total-bet">Total Bet</p>
            <p className="flex-wrap loss">Total Loss</p>
            <p className="profit">Profit</p>
            <p className="flex-wrap recover">Spins to recover</p>
          </div>
          <div className="overflow-y-scroll max-h-72">
            {rows.map((row, index) => (
              <MartingaleRow
                row={row}
                key={index}
                index={index + 1}
                bankroll={bankroll}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MartingaleTable;
