import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import MartingaleRow from './MartingaleRow';
import { calculateTable } from '../utils/martingale';
import { IRow } from '../interfaces/Row';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

interface IProps {
  tableName: string;
  multiplier: number;
  win: number;
  lossMultiplier?: number;
  bankroll: number;
  unitCookie: string;
  additionalUnit?: number;
  showProfit?: boolean;
  tenRows?: boolean;
  context?: string;
  showGuide?: boolean;
  showLossMultiText?: boolean;
}

const MartingaleTable = ({
  tableName,
  multiplier = 1,
  win = 1,
  lossMultiplier = 2,
  bankroll,
  unitCookie,
  additionalUnit = 0,
  tenRows = false,
  showProfit = true,
  context = '/roulette-strategy-helper/',
  showGuide = false,
  showLossMultiText = false,
}: IProps) => {
  const lossCookie = `${unitCookie}-loss-multi`;
  const [lossMulti, setLossMulti] = useState(
    Number(Cookies.get(lossCookie) ?? 2)
  );
  const [unit, setUnit] = useState(
    Number(Cookies.get(unitCookie) ?? 1)
  );
  const [rows, setRows] = useState<IRow[]>([]);
  const [selectedRowId, setSelectedRowId] = useState<number | null>(
    null
  );

  // Handle change to unit
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    Cookies.set(unitCookie, event.target.value, { expires: 365 });

    setUnit(Number(event.target.value));
  };

  const handleLossMultiplieChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    Cookies.set(lossCookie, event.target.value, { expires: 365 });
    setLossMulti(Number(event.target.value));
  };

  const handleSelectedRow = (index: number) => {
    if (selectedRowId !== index) {
      setSelectedRowId(index);
    } else {
      setSelectedRowId(null);
    }
  };

  useEffect(() => {
    setRows(
      calculateTable(unit, multiplier, win, lossMulti, additionalUnit)
    );
  }, [unit, multiplier, win, lossMulti, tenRows, additionalUnit]);

  return (
    <div
      className={`martingale-table max-w-2xl flex flex-col justify-center items-center p-4 border-green border rounded-xl shadow-green shadow-md`}
    >
      <p className="text-xl font-bold mb-4">{tableName}</p>
      {showGuide && (
        <Link
          to={`/roulette-strategy-helper/strategy/${unitCookie}`}
          state={{ from: context }}
          className="pb-4 cursor-pointer text-blue-400"
        >
          Detailed Strategy Guide
        </Link>
      )}
      <div className="flex gap-4 lg:gap-10">
        {showLossMultiText && (
          <div className="flex gap-4">
            <label htmlFor="loss">Loss Multiplier</label>
            <input
              type="text"
              name="loss"
              id="loss"
              onChange={debounce(handleLossMultiplieChange, 500)}
              placeholder={lossMulti.toString()}
            />
          </div>
        )}
        <div className="flex gap-4">
          <label htmlFor="unit">Unit size</label>
          <input
            type="text"
            name="unit"
            id="unit"
            onChange={debounce(handleChange, 500)}
            placeholder={unit.toString()}
          />
        </div>
      </div>
      {rows.length && (
        <div className="flex flex-col mt-5">
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
                selectedId={selectedRowId}
                handleClick={handleSelectedRow}
                showProfit={showProfit}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MartingaleTable;
