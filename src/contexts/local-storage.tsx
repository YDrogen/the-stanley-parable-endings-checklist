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
};

const LocalStorageContext = createContext<LocalStorageValue>({
  savedState: [],
  updateEndingState: () => {},
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

  const value = useMemo(
    () => ({
      savedState,
      updateEndingState,
    }),
    [savedState]
  );

  return (
    <LocalStorageContext.Provider value={value}>
      {children}
    </LocalStorageContext.Provider>
  );
}

export function useLocalStorage() {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      "useLocalStorage must be used within a LocalStorageProvider"
    );
  }
  return context;
}
