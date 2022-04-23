import { useUserPerferences } from "contexts/UserPreferenceContext";
import { FC, MouseEvent, useContext } from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: (event: MouseEvent) => void;
}

const Button: FC<Props> = ({ children, onClick }) => {
  const { designPreferences } = useUserPerferences();

  const { primaryColor } = designPreferences;

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full py-2.5 bg-${primaryColor} rounded-xl hover:bg-${primaryColor}/75 focus:ring-2 focus:ring-offset-2 ring-${primaryColor} shadow-md`}
    >
      {children}
    </button>
  );
};

export default Button;
