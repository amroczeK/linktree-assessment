import React, { FC } from "react";
import NextLink from "../Links/NextLink";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <NextLink href="/">
        <Image
          src="/assets/logo.svg"
          height={64}
          width="100%"
          alt="linktree-logo"
          priority
        />
      </NextLink>
    </div>
  );
};

export default Footer;
