import { FC } from "react";

interface Props {
  children?: React.ReactNode;
}

const Avatar: FC<Props> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="flex flex-col items-center mb-6 gap-2 justify-center w-full max-h-28"
    >
      {children}
    </div>
  );
};

export default Avatar;
