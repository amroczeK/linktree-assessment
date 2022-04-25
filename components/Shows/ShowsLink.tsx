import React, { FC, useRef, useState } from "react";
import Button from "@components/Button";
import { IShowDetails, IShows } from "../../types/User";
import SvgIcon from "../SvgIcon";
import { useClickOutsideComponent } from "@hooks/ClickOutsideComponent";
import NextLink from "../Links/NextLink";
import { format } from "date-fns";

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
    <div ref={wrapperRef} id={`shows-link`} className="flex flex-col">
      <Button onClick={onClickShowsHandler}>{children}</Button>
      <div className="dropdown-container">
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
    </div>
  );
};

const ShowDetails = ({
  show,
  onClick,
}: {
  show: IShowDetails;
  onClick?: () => void;
}) => {
  let date = format(new Date(show.date), "MMMM dd, yyyy");
  return (
    <li className="dropdown-li">
      <NextLink href={show.url} target="_blank">
        <div className="flex justify-center items-center p-2.5 hover:bg-gray-300 rounded-lg">
          <div
            className={`flex flex-col cursor-pointer w-full`}
            onClick={onClick}
          >
            <h2 className="">{show.showName}</h2>
            {show?.artistName && (
              <span className="text-gray-600">{show.artistName}</span>
            )}
            <span className="text-gray-500">{date.toString()}</span>
          </div>
          <SvgIcon styles="-rotate-90" name="arrow" />
        </div>
      </NextLink>
    </li>
  );
};

export default ShowsLink;
