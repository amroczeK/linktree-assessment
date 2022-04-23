import React, { FC } from "react";
import NextLink from "./NextLink";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 flex justify-center items-center w-full bg-gray-50">
      <NextLink href="/">
        <Image
          src="/assets/logo.svg"
          height={64}
          width="100%"
          alt="linktree-logo"
        />
      </NextLink>
    </div>
  );
};

export default Footer;
