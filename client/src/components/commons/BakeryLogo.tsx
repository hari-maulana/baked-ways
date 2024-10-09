interface BakeryLogoProps {
  source: string;
  bakeryName: string;
}

export const BakeryLogo: React.FC<BakeryLogoProps> = ({
  source,
  bakeryName,
}) => {
  return (
    <>
      <div className="w-[210px] h-[60px] px-1 py-4 rounded-md bg-white flex items-center justify-start gap-2">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={source}
          alt={bakeryName}
        />
        <p className="text-lg font-weight-300 font-serif">{bakeryName}</p>
      </div>
    </>
  );
};
