import { Link, useLocation, useParams } from 'react-router-dom';
import {
  Progression,
  stratData,
  StratVariant,
} from '../data/strategies';
import Variation from '../components/Variation';
import StratHeader from '../components/StratHeader';
import VideoEmbed from '../components/VideoEmbed';
import MartingaleTable from '../components/MartingaleTable';
import { useState } from 'react';
import Cookies from 'js-cookie';
import debounce from 'lodash/debounce';

const Strategy = () => {
  const [bankroll, setBankroll] = useState(
    Number(Cookies.get('bankroll') ?? 1000)
  );
  const [showVideo, setShowVideo] = useState(false);
  const location = useLocation();
  const previous =
    location?.state?.from ?? '/roulette-strategy-helper/';
  const { strat } = useParams();
  const slug = strat ?? 'none';
  const data = stratData[slug] ?? null;

  const handleBankroll = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    Cookies.set('bankroll', event.target.value, { expires: 365 });
    setBankroll(Number(event.target.value));
  };

  const handleShowVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <>
      <div className="flex justify-left justify-items-center font-semibold text-center w-full text-green divide-x-2 divide-green">
        <Link to={previous} className="px-5">
          {'< Back'}
        </Link>
        {data.variations && (
          <a href="#variations" className="px-5">
            Variations
          </a>
        )}
        {data.progressions && (
          <a href="#progressions" className="px-5">
            Progressions
          </a>
        )}
      </div>
      {data ? (
        <div className="strategy w-full flex flex-col justify-center items-center px-4">
          <StratHeader data={data} />
          {!showVideo && (
            <button
              className="mt-6 py-2 px-4 border-green text-green border rounded-xl"
              onClick={handleShowVideo}
            >
              Show video walkthrough
            </button>
          )}
          {/* Video walkthrough */}
          {data.videoLink && showVideo && (
            <div className="flex flex-col bg-light-black text-center items-center justify-center w-full my-5 py-10">
              <VideoEmbed videoLink={data.videoLink} />
              <button
                className="mt-6 py-2 px-4 border-green text-green border rounded-xl"
                onClick={handleShowVideo}
              >
                Hide video walkthrough
              </button>
            </div>
          )}
          {/* Progressions */}
          {data.progressions?.length && (
            <>
              <div id="progressions" className="-top-10 relative" />
              <div className="flex flex-col items-center py-4">
                <h3 className="text-green text-3xl my-4 font-bold">
                  Progressions
                </h3>
                <div className="flex gap-4 py-4">
                  <label htmlFor="bankroll">Bankroll</label>
                  <input
                    type="text"
                    name="bankroll"
                    id="bankroll"
                    onChange={debounce(handleBankroll, 500)}
                    placeholder={bankroll.toString()}
                  />
                </div>
                <div
                  className={`grid grid-cols-1 gap-4 ${
                    data.progressions.length > 1
                      ? ' lg:grid-cols-2'
                      : ''
                  }`}
                >
                  {data.progressions.map(
                    (progression: Progression) => (
                      <MartingaleTable
                        key={progression.name}
                        tableName={progression.name}
                        unitCookie={slug}
                        multiplier={progression.multi}
                        win={progression.win}
                        lossMultiplier={progression.lossMulti}
                        bankroll={bankroll}
                      />
                    )
                  )}
                </div>
              </div>
            </>
          )}
          {/* Variations */}
          {data.variations.length && (
            <>
              <div id="variations" className="-top-10 relative" />
              <div className="flex flex-col w-full justify-center items-center text-center mt-10">
                <h3 className="text-3xl text-green font-semibold">
                  Variations
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {data.variations.map((variation: StratVariant) => (
                    <Variation
                      variation={variation}
                      key={variation.name}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <p className="py-5 text-3xl">Error: Invalid strategy</p>
      )}
    </>
  );
};

export default Strategy;
