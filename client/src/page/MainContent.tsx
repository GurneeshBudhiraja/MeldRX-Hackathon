import PatientInfo from '../components/patientInfo/PatientInfo';
import Scanner from '../components/scanner/Scanner';
import { useAppStateContext } from '../context/AppStateContext';

import { cn } from '../utils/cn';
function MainContent() {
  const { appState } = useAppStateContext();
  return (
    <div
      className={cn('px-10 mt-10 h-full', {
        'flex ': appState.scanner,
      })}
    >
      <div    
        className={cn('overflow-auto', {
          'w-1/2 ': appState.scanner,
        })}
      >
        {/* Left section */}
        <PatientInfo />
      </div>
      {/* Right section */}
      {appState.scanner && <Scanner />}
    </div>
  );
}

export default MainContent;
