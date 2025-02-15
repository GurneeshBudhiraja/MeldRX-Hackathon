import { Loader, Cross, CircleArrowRightIcon, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from '../button/Button';
import { motion } from 'motion/react';
import { useAppStateContext } from '../../context/AppStateContext';
import { cn } from '../../utils/cn';

interface Step {
  title: string;
  content: string;
  locked: boolean;
  loading: boolean;
}

const PatientWorkflow = () => {
  const { setAppState } = useAppStateContext();
  const [currentStep, setCurrentStep] = useState(null);

  const steps: Array<Step> = [
    {
      title: 'Gathering Patient Info',
      content: 'Form to gather patient information',
      locked: false,
      loading: true,
    },
    {
      title: 'Organize Details',
      content: 'Section to organize patient details',
      locked: true,
      loading: false,
    },
    {
      title: 'Scan Documents',
      content: 'Section to scan and upload documents',
      locked: true,
      loading: false,
    },
    {
      title: 'Find Discrepancies',
      content: 'Section to identify discrepancies',
      locked: true,
      loading: false,
    },
  ];

  useEffect(() => {});

  const handleStepClick = (index: any) => {
    if (steps[index].locked || steps[index].loading) return;
    setCurrentStep(index === currentStep ? null : index);
  };

  return (
    <motion.div
      className="w-1/2 max-h-screen ml-4 px-3 flex flex-col"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {' '}
      <div className="bg-white w-full rounded-xl p-3 h-4/5  drop-shadow-2xl border border-gray-500/50 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <p>Detailed Analysis</p>
          <span
            className="self-end rotate-45 cursor-pointer bg-blue-400 rounded-full p-2 hover:bg-blue-500 active:bg-blue-600 duration-75 ease-in-out transition-colors"
            onClick={() => setAppState((prev) => ({ ...prev, scanner: false }))}
          >
            <Cross className="text-white " />
          </span>
        </div>

        <div className="flex flex-col h-full">
          <div className="space-y-2">
            {steps.map((step: Step, index: number) => (
              <div key={index}>
                <Button
                  onClick={() => handleStepClick(index)}
                  className={cn(
                    'w-full text-left px-4 py-4 rounded-md flex gap-2 text-white ',
                    {
                      'bg-blue-500': !step.locked,
                      'bg-blue-300': step.locked,
                    }
                  )}
                >
                  <span>
                    {!step.loading ? (
                      <CircleArrowRightIcon />
                    ) : (
                      <Loader2 className="animate-spin" />
                    )}
                  </span>
                  {step.title}
                </Button>

                {currentStep === index && (
                  <div className="p-2 border border-gray-300 rounded-md mt-2">
                    {step.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PatientWorkflow;
