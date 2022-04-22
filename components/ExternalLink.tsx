import React, { FC } from "react";
import Button from "@components/Button";
import { IPlatformDetails, ISocialLink } from "../types/User";
import NextLink from "./NextLink";
import SvgIcon from "./SvgIcon";

interface Props {
  linkDetails: ISocialLink | IPlatformDetails;
  children?: React.ReactNode;
  onClick?: () => void;
  isButton?: boolean;
  styles?: string;
}

const ExternalLink: FC<Props> = ({
  linkDetails,
  children,
  onClick = () => {},
  isButton = true,
  styles,
}) => {
  let { url, name } = linkDetails;

  return (
    <NextLink href={url} target="_blank">
      {isButton ? (
        <Button>
          <SvgIcon name={name?.replace(/\s/g, "").toLocaleLowerCase()}>
            {name}
          </SvgIcon>
        </Button>
      ) : (
        <div className={styles}>
          <SvgIcon
            styles="mr-2"
            name={name?.replace(/\s/g, "").toLocaleLowerCase()}
          >
            {name}
          </SvgIcon>
          {children}
        </div>
      )}
    </NextLink>
  );
};

export default ExternalLink;
