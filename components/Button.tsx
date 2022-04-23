import { useUserPerferences } from "contexts/UserPreferenceContext";
import { FC, MouseEvent, useContext } from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: (event: MouseEvent) => void;
}

const Button: FC<Props> = ({ children, onClick }) => {
  const { designPreferences } = useUserPerferences();

  const { primaryColor } = designPreferences;

  const styles = `flex flex-col items-center justify-center w-full py-2.5 ${
    primaryColor !== "" ? `bg-${primaryColor}` : "bg-pink-500"
  } rounded-xl ${
    primaryColor !== "" ? `hover:bg-${primaryColor}/75` : "hover:bg-pink-500/75"
  } focus:ring-2 focus:ring-offset-2 ${
    primaryColor !== "" ? `ring-${primaryColor}` : `ping-pink-500`
  } shadow-md`;

  console.log(primaryColor);
  console.log(styles);

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
