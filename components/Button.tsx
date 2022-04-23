import { useUserPerferences } from "contexts/UserPreferenceContext";
import { FC, MouseEvent, useContext } from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: (event: MouseEvent) => void;
}

const Button: FC<Props> = ({ children, onClick }) => {
  const { designPreferences } = useUserPerferences();

  const { primaryColor, hoverColor, ringColor } =
    designPreferences;

  let styles = {
    backgroundColor:
      primaryColor === "" ? "bg-green-500" : `bg-${primaryColor}`,
    ringColor: ringColor === "" ? "ring-green-500" : ringColor,
    hoverColor: hoverColor === "" ? "hover:bg-green-300" : hoverColor,
  };

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full py-2.5 rounded-xl shadow-md focus:ring-2 ho focus:ring-offset-2 ${styles.ringColor} ${styles.backgroundColor} ${styles.hoverColor}`}
    >
      {children}
    </button>
  );
};

export default Button;
