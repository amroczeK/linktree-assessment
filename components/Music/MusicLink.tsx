import React, { FC, useRef, useState } from "react";
import Button from "@components/Button";
import { ISong, IPlatformDetails, IMusic } from "../../types/User";
import { useClickOutsideComponent } from "@hooks/ClickOutsideComponent";
import { MusicPlayer } from "./MusicPlayer";

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
    <div
      data-testid={`music-link`}
      ref={wrapperRef}
      id={`music-link`}
      className="flex flex-col"
    >
      <Button data-testid={`music-link-button`} onClick={onClickMusicHandler}>
        {children}
      </Button>
      <ul
        data-testid={
          isMusicOpen ? "song-dropdown-active" : "song-dropdown-inactive"
        }
        className={`mt-2 w-full max-h-96 overflow-y-scroll ${
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

export default MusicLink;
