import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex w-full bg-light-black border-green border-b-2 pb-2 sticky top-0 z-10 shadow-green shadow-md">
      <Link
        to="/roulette-strategy-helper/"
        className="header-title flex gap-2 pl-2 pt-2 items-center w-full"
      >
        <img
          className="header-logo"
          src="/roulette-strategy-helper/roulette-wheel.png"
          alt="roulette wheel"
        />
        <h2 className="text-green text-xl xl:text-2xl font-bold">
          Roulette Strategy Helper
        </h2>
      </Link>
      <div className="w-full justify-center items-center text-green text-xl divide-x-2 flex">
        <Link
          className="link text-xl hidden sm:block"
          to="/roulette-strategy-helper/"
        >
          Home
        </Link>
        {/* <Link
          className="link text-xl hidden sm:block"
          to="/roulette-strategy-helper/aob"
        >
          All On Black
        </Link> */}
        <Link
          className="link text-xl"
          to="/roulette-strategy-helper/donate"
        >
          Buy me a 🍺
        </Link>
      </div>
    </div>
  );
};

export default Header;
