import React, { FC, useRef, useState } from "react";
import Button from "@components/Button";
import { IShowDetails, IShows } from "../../types/User";
import SvgIcon from "../SvgIcon";
import { useClickOutsideComponent } from "@hooks/ClickOutsideComponent";
import NextLink from "../Links/NextLink";
import { ShowDetails } from "./ShowDetails";

interface Props {
  shows: IShows;
  children?: React.ReactNode;
}

const ShowsLink: FC<Props> = ({ shows, children }) => {
  const wrapperRef = useRef(null);

  const [isShowsOpen, setShowsOpen] = useState<boolean>(false);

  const onClickShowsHandler = () => {
    setShowsOpen(!isShowsOpen);
  };

  useClickOutsideComponent(
    wrapperRef,
    "shows-link",
    isShowsOpen,
    onClickShowsHandler
  );

  return (
    <li ref={wrapperRef} id={`shows-link`} className="flex flex-col">
      <Button onClick={onClickShowsHandler}>{children}</Button>
      <div
        className={`dropdown-container ${!isShowsOpen ? "hidden" : "block"}`}
      >
        <ul
          className={`${
            isShowsOpen ? "dropdown-ul-active" : "dropdown-ul-inactive"
          }`}
        >
          {shows.map((e: IShowDetails) => (
            <ShowDetails key={e.location} show={e} />
          ))}
          <NextLink href="https://www.songkick.com/" target="_blank">
            <div className="flex w-full justify-center items-center py-6">
              <SvgIcon name="bysongkickwordmark" />
            </div>
          </NextLink>
        </ul>
      </div>
    </li>
  );
};

export default ShowsLink;
