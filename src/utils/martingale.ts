import { IRow } from '../interfaces/Row';

const MAX_ROWS = 20;

export const calculateTable = (
  unit: number,
  multiplier: number,
  win: number,
  lossMultiplier: number
): IRow[] => {
  const tableRows = [];
  let currentBet = unit * multiplier;
  let loss = 0;
  let currentUnit = 1;

  for (let i = 1; i < MAX_ROWS; i++) {
    const currentProfit = unit * currentUnit * win;
    const recover = Number((loss / currentProfit).toFixed(2));

    tableRows.push({
      profit: Number(currentProfit.toFixed(2)),
      currentBet: Number(currentBet),
      loss: Number(loss.toFixed(2)),
      recover: recover !== 0 && recover < 1 ? 1 : recover,
    });
    loss += currentBet;
    currentBet *= lossMultiplier;
    currentUnit *= lossMultiplier;
  }
  return tableRows;
};
