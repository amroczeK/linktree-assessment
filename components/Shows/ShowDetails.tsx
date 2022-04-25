import NextLink from "@components/Links/NextLink";
import SvgIcon from "@components/SvgIcon";
import { IShowDetails } from "../../types/User";
import format from "date-fns/format";

export const ShowDetails = ({
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
