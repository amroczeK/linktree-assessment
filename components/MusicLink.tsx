import React, { FC, useRef, useState } from "react";
import Image from "next/image";
import Button from "@components/Button";
import { IMusic, IPlatformDetails } from "../types/User";
import PlatformLink from "@components/ExternalLink";
import SvgIcon from "./SvgIcon";
import { useClickOutsideComponent } from "@hooks/ClickOutsideComponent";

interface Props {
  musicDetails: IMusic;
  children?: React.ReactNode;
}

const MusicLink: FC<Props> = ({ musicDetails, children }) => {
  const wrapperRef = useRef(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  let { songName, artistName, thumbnail, platforms } = musicDetails;

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const onClickPlay = () => {
    console.log("playing music");
  };

  useClickOutsideComponent(wrapperRef, "music-link", isOpen, onClickHandler);

  return (
    <div ref={wrapperRef} id="music-link" className="flex flex-col">
      <Button onClick={onClickHandler}>{children}</Button>
      <div
        className={`mt-2 w-full ${
          isOpen
            ? "translate-y-0 opacity-100 z-0"
            : "-translate-y-full opacity-100 -z-10"
        } bg-gray-200 rounded-xl ease-in-out duration-200`}
      >
        <div className="flex flex-col p-2.5 gap-4 w-full">
          <div className="flex items-center gap-4">
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
              <div>
                <h2>{songName}</h2>
                <span className="text-gray-500">by {artistName}</span>
              </div>
            </div>
          </div>
          <ProgressLine />
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
        </div>
      </div>
    </div>
  );
};

const ProgressLine = () => (
  <div className="relative w-full h-1 bg-gray-400 rounded-xl">
    <div className="absolute w-2/3 h-full bg-green-500 rounded-xl" />
  </div>
);

export default MusicLink;
