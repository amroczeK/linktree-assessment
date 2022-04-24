export const SongDetails = ({
  songName,
  artistName,
  expandPlayer = false,
  onClick,
  children,
}: {
  songName: string;
  artistName: string;
  expandPlayer?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}) => (
  <div
    data-testid={`song-details-${songName}`}
    className={`flex 
      ${
        expandPlayer ? `flex-col` : `justify-start items-center space-x-1.5`
      } cursor-pointer w-full hover:bg-gray-300 p-2.5 rounded-lg`}
    onClick={onClick}
  >
    <div className="flex flex-col w-full">
      <h2>{songName}</h2>
      <span className="text-gray-500">by {artistName}</span>
    </div>
    {children && (
      <div className="flex justify-end items-center">{children}</div>
    )}
  </div>
);