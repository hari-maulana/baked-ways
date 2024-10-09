interface BakeryLogoProps {
  source: string;
}

export const BakeryLogo: React.FC<BakeryLogoProps> = ({ source }) => {
  return (
    <>
      <img
        className="w-[210px] h-[60px] px-2 py-4 rounded-md bg-white object-contain"
        src={source}
        alt=""
      />
    </>
  );
};
