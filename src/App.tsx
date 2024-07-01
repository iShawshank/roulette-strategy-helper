import { useState } from 'react';
import MartingaleTable from './components/MartingaleTable';
import debounce from 'lodash/debounce';
import Header from './components/Header';

function App() {
  const [bankroll, setBankroll] = useState(1000);

  const handleBankroll = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    console.log(event.target.value);
    setBankroll(Number(event.target.value));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <Header />
      <h2 className="text-2xl font-bold text-green text-center w-full">
        Roulette Martingale Tables
      </h2>
      <div className='flex gap-4'>
        <label htmlFor="bankroll">Bankroll</label>
        <input
          type="text"
          name="bankroll"
          id="bankroll"
          onChange={debounce(handleBankroll, 500)}
          placeholder="1000"
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <MartingaleTable
          tableName="9 streets"
          multiplier={9}
          win={3}
          bankroll={bankroll}
        />

        <MartingaleTable
          tableName="5 Doublestreets"
          multiplier={5}
          win={1}
          lossMultiplier={3}
          bankroll={bankroll}
        />

        <MartingaleTable
          tableName="Outside 1:1 bets"
          multiplier={1}
          win={1}
          bankroll={bankroll}
        />
      </div>
    </div>
  );
}

export default App;
