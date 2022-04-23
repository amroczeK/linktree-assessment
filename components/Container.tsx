import { FC } from "react";

interface Props {
  children?: React.ReactNode;
  backgroundColor?: string;
  backgroundImageUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

const Container: FC<Props> = ({ children, backgroundColor }) => {
  return <div className={`relative container p-6 max-w-md w-full h-full bg-${backgroundColor}`}>
    {children}
  </div>;
};

export default Container;
