import { useUserPerferences } from "contexts/UserPreferenceContext";
import { FC, MouseEvent, useContext } from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: (event: MouseEvent) => void;
}

const Button: FC<Props> = ({ children, onClick, ...props }) => {
  const { designPreferences } = useUserPerferences();

  const { primaryColor, hoverColor, ringColor } = designPreferences;

  let styles = {
    backgroundColor: primaryColor === "" ? "bg-blue-400" : `${primaryColor}`,
    ringColor: ringColor === "" ? "ring-blue-400" : ringColor,
    hoverColor: hoverColor === "" ? "hover:bg-blue-300" : hoverColor,
  };

  return (
    <button
      {...props}
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full py-2.5 rounded-xl shadow-md focus:ring-2 focus:ring-offset-2 ${styles.ringColor} ${styles.backgroundColor} ${styles.hoverColor}`}
    >
      {children}
    </button>
  );
};

export default Button;
