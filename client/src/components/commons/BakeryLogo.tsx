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
      <a
        href="/menu"
        className="w-[210px] h-[60px] px-1 py-4 rounded-md bg-white flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-50 hover:border border-gray-300 transition-all duration-100 ease-in-out active:text-gray-400 active:scale-95"
      >
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={source}
          alt={bakeryName}
        />
        <p className="text-lg font-weight-300 font-serif">{bakeryName}</p>
      </a>
    </>
  );
};
