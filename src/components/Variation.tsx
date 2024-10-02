import { StratVariant } from '../data/strategies';

interface VariationProps {
  variation: StratVariant;
}

const Variation = ({ variation }: VariationProps) => {
  return (
    <div className="m-5 p-3 bg-neutral-800 border-green border rounded-xl shadow-green shadow-md">
      <h4 className="text-xl text-green font-bold py-3">
        {variation.name}
      </h4>
      <p className="h-9">{variation.description}</p>
      <div className="flex justify-center items-center mt-4">
        {variation.image && (
          <img
            className="rounded-xl max-h-xl w-full max-w-2xl"
            src={variation.image}
            alt={variation.name}
          />
        )}
      </div>
    </div>
  );
};

export default Variation;
