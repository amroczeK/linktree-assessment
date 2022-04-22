import { FC } from "react";

interface Props {
  children?: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className="w-32 h-32 bg-fuchsia-50"></div>;
};

export default Container;
