import React, { FC, useRef, useState } from "react";
import Image from "next/image";
import Button from "@components/Button";
import { ISong, IPlatformDetails, IMusic } from "../types/User";
import PlatformLink from "@components/ExternalLink";
import SvgIcon from "./SvgIcon";
import { useClickOutsideComponent } from "@hooks/ClickOutsideComponent";

interface Props {
  music: IMusic;
  children?: React.ReactNode;
}

const MusicLink: FC<Props> = ({ music, children }) => {
  const wrapperRef = useRef(null);

  const [isMusicOpen, setIsMusicOpen] = useState<boolean>(false);
  const [currentSong, setCurrentSong] = useState<string>("");

  const onClickMusicHandler = () => {
    setIsMusicOpen(!isMusicOpen);
    setCurrentSong("");
  };

  useClickOutsideComponent(
    wrapperRef,
    "music-link",
    isMusicOpen,
    onClickMusicHandler
  );

  return (
    <div ref={wrapperRef} id="music-link" className="flex flex-col">
      <Button onClick={onClickMusicHandler}>{children}</Button>
      <ul
        className={`p-2.5 mt-2 w-full ${
          isMusicOpen ? "flex flex-col divide-y divide-gray-300" : "hidden"
        } bg-gray-200 rounded-xl `}
      >
        {music.map((e: ISong) => (
          <MusicPlayer
            key={e.songName}
            song={e}
            expandPlayer={currentSong === e.songName}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </ul>
    </div>
  );
};

const SongDetails = ({
  songName,
  artistName,
  expandPlayer = false,
  onClick,
}: {
  songName: string;
  artistName: string;
  expandPlayer?: boolean;
  onClick?: () => void;
}) => (
  <div
    className={`flex 
      ${
        expandPlayer ? `flex-col` : `justify-center items-center space-x-1.5`
      } cursor-pointer w-full`}
    onClick={onClick}
  >
    <h2>{songName}</h2>
    <span className="text-gray-500">by {artistName}</span>
  </div>
);

const ProgressLine = () => (
  <div className="relative w-full h-1 bg-gray-400 rounded-xl">
    <div className="absolute w-2/3 h-full bg-green-500 rounded-xl" />
  </div>
);

const MusicPlayer = ({
  song,
  setCurrentSong,
  expandPlayer,
}: {
  song: ISong;
  setCurrentSong: (e: string) => void;
  expandPlayer: boolean;
}) => {
  //const [expandPlayer, setExplandPlayer] = useState<boolean>(false);

  const onClickSong = () => {
    setCurrentSong(song.songName);
    //setExplandPlayer(!expandPlayer);
  };

  const onClickPlay = () => {
    console.log("playing music");
  };

  const { songName, thumbnail, artistName, platforms } = song;
  return (
    <li key={songName} className="flex flex-col p-2.5 gap-4 w-full">
      <div className="flex items-center gap-4">
        {expandPlayer ? (
          <>
            <Image
              className="rounded-md"
              src={thumbnail}
              height={72}
              width={72}
              alt={songName}
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
          />
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
                styles="flex items-center justify-between py-2"
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

export default MusicLink;
