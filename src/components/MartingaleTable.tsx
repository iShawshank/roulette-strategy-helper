import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import MartingaleRow from './MartingaleRow';
import {
  calculateTable,
} from '../utils/martingale';
import { IRow } from '../interfaces/Row';
import Cookies from 'js-cookie';

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
}: IProps) => {
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

  const handleSelectedRow = (index: number) => {
    if (selectedRowId !== index) {
      setSelectedRowId(index);
    } else {
      setSelectedRowId(null);
    }
  };

  useEffect(() => {
    if (tenRows) {
      setRows(
        calculateTenRowsTable(
          unit,
          multiplier,
          win,
          lossMultiplier,
          additionalUnit
        )
      );
    } else {
      setRows(
        calculateTable(
          unit,
          multiplier,
          win,
          lossMultiplier,
          additionalUnit
        )
      );
    }
  }, [
    unit,
    multiplier,
    win,
    lossMultiplier,
    tenRows,
    additionalUnit,
  ]);

  return (
    <div
      className={`martingale-table max-w-2xl flex flex-col justify-center items-center p-4 border-green border rounded-xl`}
    >
      <p className="text-xl font-bold mb-4">{tableName}</p>
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
