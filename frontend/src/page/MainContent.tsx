import { usePatientContext } from "../context/PatientContext";

function MainContent() {
  const { patient } = usePatientContext();
  return (
    <div className="px-10 mt-10">
      <p>
        You are currently viewing for{" "}
        <span className="text-blue-600">{patient.name}</span>
      </p>
    </div>
  );
}

export default MainContent;
