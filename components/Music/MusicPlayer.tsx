import Image from "next/image";
import { IPlatformDetails, ISong } from "../../types/User";
import { SongDetails } from "./SongDetails";
import SvgIcon from "../SvgIcon";
import PlatformLink from "@components/Links/ExternalLink";

export const MusicPlayer = ({
  song,
  setCurrentSong,
  expandPlayer,
}: {
  song: ISong;
  setCurrentSong: (e: string) => void;
  expandPlayer: boolean;
}) => {
  const onClickSong = () => {
    setCurrentSong(song.songName);
  };

  const onClickPlay = () => {
    console.log("playing music");
  };

  const { songName, thumbnail, artistName, platforms } = song;
  return (
    <li
      data-testid={`song-link-${songName}`}
      key={songName}
      className="dropdown-li"
    >
      <div className="flex items-center gap-4">
        {expandPlayer ? (
          <>
            <Image
              className="rounded-md"
              src={thumbnail}
              height={72}
              width={72}
              alt={songName}
              priority
            />
            <div className="flex justify-center items-center gap-2.5">
              <SvgIcon
                styles="cursor-pointer"
                name={"play"}
                onClick={onClickPlay}
              />
              <SongDetails
                songName={songName}
                artistName={artistName}
                expandPlayer={expandPlayer}
                onClick={onClickSong}
              />
            </div>
          </>
        ) : (
          <SongDetails
            songName={songName}
            artistName={artistName}
            onClick={onClickSong}
          >
            <SvgIcon name="arrow" />
          </SongDetails>
        )}
      </div>
      {expandPlayer && <ProgressLine />}
      {expandPlayer && (
        <ul className="divide-y divide-gray-300">
          {platforms.map((e: IPlatformDetails) => (
            <li key={e.name}>
              <PlatformLink
                linkDetails={e}
                isButton={false}
                styles="flex items-center justify-between p-2.5 hover:bg-gray-300 rounded-lg"
              >
                <SvgIcon styles="-rotate-90" name="arrow" />
              </PlatformLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const ProgressLine = () => (
  <div className="relative w-full h-1 bg-gray-400 rounded-xl">
    <div className="absolute w-2/3 h-full bg-green-500 rounded-xl" />
  </div>
);
