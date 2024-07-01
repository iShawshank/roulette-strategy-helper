import venmo from '../assets/img/MyVenmoQRCode.png';

const Donate = () => {
  return (
    <div className="donate flex flex-col w-full items-center gap-4 p4">
      <h1 className="donate-header text-4xl">Donate</h1>
      <div className="text-center flex justify-start items-start">
        <p className="donate-body text-xl">
          Thank you for considering to buy me a beer! All proceeds
          allow me continue to work on other cool projects.
        </p>
      </div>
      <div className="rightflex flex-col text-center gap-4">
        <a
          href="https://account.venmo.com/u/ishawshank39"
          className="text-3xl font-bold"
        >
          Venmo: @ishawshank39
        </a>
        <div className="donate-qr-code flex justify-center items-center">
          <img
            className="donate-img"
            src={venmo}
            alt="venmo QR code"
          />
          <a
            href="https://account.venmo.com/u/ishawshank39"
            className="sr-only"
          >
            Donate here
          </a>
        </div>
      </div>

      <div className="author mt-4">
        <a
          href="https://ishawshank.github.io/"
          className="about-me italic text-2xl"
        >
          You can learn more about me and my projects{' '}
          <span className="text-blue-500">here</span>.
        </a>
      </div>
    </div>
  );
};

export default Donate;
