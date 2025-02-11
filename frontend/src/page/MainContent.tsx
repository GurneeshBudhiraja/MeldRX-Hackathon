import { usePatientContext } from "../context/PatientContext";
import ShortSummary from "../components/shortSummary/ShortSummary";
function MainContent() {
  const { patient } = usePatientContext();
  return (
    <div className="px-10 mt-10 h-full">
      <p>
        You are currently viewing for{" "}
        <span className="text-blue-600">{patient.name}</span>
      </p>
      <ShortSummary />
    </div>
  );
}

export default MainContent;
