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
    <li
      data-testid={`music-link`}
      ref={wrapperRef}
      id={`music-link`}
      className="flex flex-col"
    >
      <Button data-testid={`music-link-button`} onClick={onClickMusicHandler}>
        {children}
      </Button>
      <div className={`dropdown-container ${!isMusicOpen ? "hidden" : "block"}`}>
        <ul
          data-testid={
            isMusicOpen ? "song-dropdown-active" : "song-dropdown-inactive"
          }
          className={` 
            ${isMusicOpen ? "dropdown-ul-active" : "dropdown-ul-inactive"}`}
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
    </li>
  );
};

export default MusicLink;
