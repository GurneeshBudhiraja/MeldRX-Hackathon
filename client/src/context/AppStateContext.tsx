import React, { useContext, useState } from 'react';

// The Patient type
export type AppStateType = {
  scanner: boolean;
};

// The PatientContext type
export type AppStateContextType = {
  appState: AppStateType;
  setAppState: React.Dispatch<React.SetStateAction<AppStateType>>;
};

const AppStateContext = React.createContext<AppStateContextType>({
  appState: {
    scanner: false,
  },
  setAppState: () => {},
});

export default function AppStateContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [appState, setAppState] = useState<AppStateType>({
    scanner: true,
  });
  return (
    <AppStateContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppStateContext.Provider>
  );
}

function useAppStateContext() {
  const appStateContext = useContext(AppStateContext);
  if (!appStateContext) {
    throw new Error(
      'usePatientContext must be used within a PatientContextWrapper'
    );
  }
  return appStateContext;
}

export { useAppStateContext };
