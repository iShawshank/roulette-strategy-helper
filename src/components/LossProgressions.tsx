import { LossProgression } from '../data/strategies';

interface VariationProps {
  lossProgression: LossProgression;
}

const LossProgressions = ({ lossProgression }: VariationProps) => {
  return (
    <div className="m-5 p-3 bg-neutral-800 border-green border rounded-xl shadow-green shadow-md">
      <h4 className="text-xl text-green font-bold py-3">
        {lossProgression.text}
      </h4>
      {lossProgression.description && (
        <p className="h-9 px-10">{lossProgression.description}</p>
      )}
      <div className="flex justify-center items-center mt-4">
        {lossProgression.image && (
          <img
            className="rounded-xl max-h-xl w-full max-w-2xl"
            src={lossProgression.image}
            alt={lossProgression.text}
          />
        )}
      </div>
    </div>
  );
};

export default LossProgressions;
