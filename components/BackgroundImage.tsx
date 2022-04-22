import { FC } from "react";
import Image from "next/image";

interface Props {
  backgroundImageUrl?: string;
}

const BackgroundImage: FC<Props> = ({ backgroundImageUrl }) => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {backgroundImageUrl && (
        <Image src={backgroundImageUrl} layout="fill" alt="background-image" />
      )}
    </div>
  );
};

export default BackgroundImage;
