import React, { useContext, useState } from "react";

// The Patient type
export type PatientType = {
  name: string;
  id: string;
};

// The PatientContext type
export type PatientContextType = {
  patient: PatientType;
  setPatient: React.Dispatch<React.SetStateAction<PatientType>>;
};

// TODO: REMOVE THIS IN PROD
const TESTING_ID = "testingID";
const TESTING_NAME = "John Doe";

const PatientContext = React.createContext<PatientContextType>({
  patient: {
    id: "",
    name: "",
  },
  setPatient: () => {},
});

export default function PatientContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [patient, setPatient] = useState<PatientType>({
    id: TESTING_ID,
    name: TESTING_NAME,
  });
  return (
    <PatientContext.Provider value={{ patient, setPatient }}>
      {children}
    </PatientContext.Provider>
  );
}

function usePatientContext() {
  const patientContext = useContext(PatientContext);
  if (!patientContext) {
    throw new Error(
      "usePatientContext must be used within a PatientContextWrapper"
    );
  }
  return patientContext;
}

export { usePatientContext };
