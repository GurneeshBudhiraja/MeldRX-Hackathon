import PatientInfoCard from "./patientInfoCard/PatientInfoCard";
import PatientInfoSummary from "./patientInfoSummary/PatientInfoSummary";

function PatientInfo() {
  return (
    <div className="grid grid-flow-col gap-4">
      <PatientInfoCard />
      <PatientInfoSummary />
    </div>
  );
}

export default PatientInfo;
