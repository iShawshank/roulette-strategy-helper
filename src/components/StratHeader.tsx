interface StratHeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const StratHeader = ({ data }: StratHeaderProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-4xl text-green font-bold">{data?.name}</h3>
      <div className="flex flex-col justify-center items-center text-center px-2 lg:px-10">
        <p className="p-4 lg:p-10 text-xl text-center max-w-2xl">
          {data.description}
        </p>
        {data.baseImg && (
          <img
            className="max-w-2xl w-full"
            src={data.baseImg}
            alt={data.name}
          />
        )}
      </div>
    </div>
  );
};

export default StratHeader;
