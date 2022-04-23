import { IDesignPreferences } from "../types/User";
import { createContext, FC, ReactNode, useContext, useState } from "react";

type ContextType = {
  designPreferences: IDesignPreferences;
  setUserPreferences: (designPreferences: IDesignPreferences) => void;
};

const contextDefaultValues: ContextType = {
  designPreferences: {
    backgroundColor: "",
    backgroundImageUrl: "",
    primaryColor: "",
    secondaryColor: "",
  },
  setUserPreferences: () => {},
};

const UserPreferencesContext = createContext<ContextType>(contextDefaultValues);

export const useUserPerferences = () => useContext(UserPreferencesContext);

interface Props {
  children: ReactNode;
}

export const UserPreferencesProvider: FC<Props> = ({ children }) => {
  const [designPreferences, setDesignPreferences] =
    useState<IDesignPreferences>(contextDefaultValues.designPreferences);

  const setUserPreferences = (pref: IDesignPreferences) => {
    console.log("SETTING USER PREF", pref)
    setDesignPreferences(pref);
  };
  
  return (
    <UserPreferencesContext.Provider
      value={{
        designPreferences,
        setUserPreferences,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};
