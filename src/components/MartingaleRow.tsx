import { IRow } from '../interfaces/Row';

interface IProps {
  row: IRow;
  index: number;
  bankroll: number;
}

const MartingaleRow = ({ row, index, bankroll }: IProps) => {
  const isTooMuch = row.loss > bankroll ? true : false;

  return (
    <div
      className={`martingale-row w-full divide-x-2 grid grid-cols-5 text-center ${
        isTooMuch ? 'bg-red-900' : ''
      }`}
    >
      <p className="progression">{index}</p>
      <p className="total-bet">{row.currentBet}</p>
      <p className={isTooMuch ? 'text-white' : 'text-red-500'}>{row.loss}</p>
      <p className={isTooMuch ? 'text-white' : 'text-green'}>{row.profit}</p>
      <p className="recover">{row.recover}</p>
    </div>
  );
};

export default MartingaleRow;
