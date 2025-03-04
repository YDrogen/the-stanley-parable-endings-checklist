import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type LocalStorageValue = {
  savedState: string[];
  updateEndingState: (key: string, state: boolean) => void;
  overrideState: (state: string[]) => void;
  exportString: string;
};

const LocalStorageContext = createContext<LocalStorageValue>({
  savedState: [],
  updateEndingState: () => {},
  overrideState: () => {},
  exportString: "",
});

type LocalStorageProviderProps = PropsWithChildren<object>;

export function LocalStorageProvider({ children }: LocalStorageProviderProps) {
  const [savedState, setSavedState] = useState<string[]>([]);

  useEffect(() => {
    const lsItem = localStorage.getItem("saved");
    if (lsItem) {
      const json = JSON.parse(lsItem);

      setSavedState(json);
    }
  }, []);

  const updateEndingState = (key: string, state: boolean) => {
    setSavedState((prev) => {
      const newState = [];

      if (!state) {
        newState.push(...prev.filter((p) => p !== key));
      } else {
        newState.push(...prev, key);
      }

      const str = JSON.stringify(newState);
      localStorage.setItem("saved", str);

      return newState;
    });
  };

  const overrideState = (state: string[]) => {
    setSavedState(state);
    localStorage.setItem("saved", JSON.stringify(state));
  };

  const exportString = btoa(JSON.stringify(savedState));

  const value = useMemo(
    () => ({
      savedState,
      updateEndingState,
      overrideState,
      exportString,
    }),
    [savedState, exportString]
  );

  return (
    <LocalStorageContext.Provider value={value}>
      {children}
    </LocalStorageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLocalStorage() {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      "useLocalStorage must be used within a LocalStorageProvider"
    );
  }
  return context;
}
