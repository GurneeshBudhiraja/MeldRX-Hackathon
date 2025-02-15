import { useAppStateContext } from '../../context/AppStateContext';
import { cn } from '../../utils/cn';
import PatientInfoCard from './patientInfoCard/PatientInfoCard';
import PatientInfoSummary from './patientInfoSummary/PatientInfoSummary';

function PatientInfo() {
  const { appState } = useAppStateContext();
  return (
    <div
      className={cn('grid grid-flow-col gap-4', {
        'flex flex-col ': appState.scanner,
      })}
    >
      <PatientInfoCard />
      <PatientInfoSummary />
    </div>
  );
}

export default PatientInfo;
