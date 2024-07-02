import { useState } from 'react';
import MartingaleTable from '../components/MartingaleTable';
import debounce from 'lodash/debounce';
import Cookies from 'js-cookie';

const Home = () => {
  const [bankroll, setBankroll] = useState(
    Number(Cookies.get('bankroll') ?? 1000)
  );

  const handleBankroll = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    Cookies.set('bankroll', event.target.value, { expires: 365 });
    setBankroll(Number(event.target.value));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <h2 className="text-xl font-semibold text-green text-center w-full">
        Roulette Martingale Tables
      </h2>
      <div className="flex gap-4">
        <label htmlFor="bankroll">Bankroll</label>
        <input
          type="text"
          name="bankroll"
          id="bankroll"
          onChange={debounce(handleBankroll, 500)}
          placeholder={bankroll.toString()}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <MartingaleTable
          tableName="9 streets"
          multiplier={9}
          win={3}
          bankroll={bankroll}
          unitCookie="9-streets"
        />

        <MartingaleTable
          tableName="5 Doublestreets"
          multiplier={5}
          win={1}
          lossMultiplier={3}
          bankroll={bankroll}
          unitCookie="double-streets"
        />

        <MartingaleTable
          tableName="Outside 1:1 bets"
          multiplier={1}
          win={1}
          bankroll={bankroll}
          unitCookie="one-to-one"
        />
      </div>
    </div>
  );
};

export default Home;
