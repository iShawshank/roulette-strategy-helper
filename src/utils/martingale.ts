import { IRow } from '../interfaces/Row';

const MAX_ROWS = 20;

export const calculateTable = (
  unit: number,
  multiplier: number,
  win: number,
  lossMultiplier: number,
  additionalUnit: number
): IRow[] => {
  const tableRows = [];
  let currentBet = unit * multiplier;
  let loss = 0;
  let currentUnit = 1;

  for (let i = 1; i < MAX_ROWS; i++) {
    const previousLoss = loss;
    loss += currentBet;
    const currentProfit = unit * currentUnit * win;
    const recover = Number((previousLoss / currentProfit).toFixed(2));

    tableRows.push({
      profit: Number(currentProfit.toFixed(2)),
      currentBet: Number(currentBet.toFixed(2)),
      loss: Number(loss.toFixed(2)),
      recover: recover !== 0 && recover < 1 ? 1 : recover,
    });
    currentBet = currentBet * lossMultiplier + additionalUnit * unit;
    currentUnit =
      currentUnit * lossMultiplier + additionalUnit * unit;
  }
  return tableRows;
};
