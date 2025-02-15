import { Loader, Cross, CircleArrowRightIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Button from '../button/Button';
import { motion } from 'motion/react';

const PatientWorkflow = () => {
  const [currentStep, setCurrentStep] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const steps = [
    {
      title: 'Gathering Patient Info',
      content: 'Form to gather patient information',
      locked: false,
    },
    {
      title: 'Organize Details',
      content: 'Section to organize patient details',
      locked: false,
    },
    {
      title: 'Scan Documents',
      content: 'Section to scan and upload documents',
      locked: false,
    },
    {
      title: 'Find Discrepancies',
      content: 'Section to identify discrepancies',
      locked: false,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  });

  const handleStepClick = (index: any) => {
    setCurrentStep(index === currentStep ? null : index);
  };

  return (
    <motion.div
      className="w-1/2 max-h-screen ml-4 px-3 flex flex-col"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {' '}
      <div className="bg-white w-full rounded-xl p-3 h-4/5  drop-shadow-2xl border border-gray-500/50 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <p>Detailed Analysis</p>
          <span className="self-end rotate-45 cursor-pointer bg-blue-400 rounded-full p-2 hover:bg-blue-500 active:bg-blue-600 duration-75 ease-in-out transition-colors">
            <Cross className="text-white " />
          </span>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            {/* You'll need to import the LucideLoading icon */}
            <Loader className="animate-spin text-blue-500" size={32} />
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="space-y-2">
              {steps.map((step, index) => (
                <div key={index}>
                  <Button
                    onClick={() => handleStepClick(index)}
                    className="w-full text-left px-4 py-4 rounded-md bg-blue-500 text-white flex gap-2"
                  >
                    <span>
                      <CircleArrowRightIcon />
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
        )}
      </div>
    </motion.div>
  );
};

export default PatientWorkflow;
