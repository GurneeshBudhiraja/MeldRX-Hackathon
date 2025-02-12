// Shows the patient personal info
import { UserCircleIcon } from "lucide-react";
import { usePatientContext } from "../../../context/PatientContext";

function PatientInfoCard() {
  const { patient } = usePatientContext();
  return (
    <div className="bg-white rounded-lg shadow-md p-6 col-span-1 ">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {patient.name}
          </h2>
          <p className="text-gray-600">Patient ID: {patient.id}</p>
        </div>
        <div className="bg-blue-100 rounded-full p-2">
          <UserCircleIcon className="w-6 h-6 text-blue-600" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Age</span>
          <span className="font-medium">45 years</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Blood Type</span>
          <span className="font-medium">O+</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Next Appointment</span>
          <span className="font-medium">Dec 15, 2023</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Active Patient</span>
        </div>
      </div>
    </div>
  );
}

export default PatientInfoCard;
