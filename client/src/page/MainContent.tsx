import PatientInfo from "../components/patientInfo/PatientInfo";
function MainContent() {
  return (
    <div className="px-10 mt-10 ">
      <div className="max-h-1/3 overflow-auto">
        {/* Left section */}
        <PatientInfo />
      </div>
      {/* Right section */}
      <div></div>
    </div>
  );
}

export default MainContent;
