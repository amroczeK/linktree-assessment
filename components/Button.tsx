import { FC } from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<Props> = ({children, onClick = () => {}, }) => {
  return (
    <button  onClick={onClick} className="flex flex-col items-center justify-center w-full py-2.5 bg-green-500 rounded-xl hover:bg-green-500/75 focus:ring-2 focus:ring-offset-2 ring-green-500 shadow-md">
      {children}
    </button>
  );
};

export default Button;
