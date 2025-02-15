import { motion } from 'motion/react';

interface DetailedAnalysisCollapsibleProps {
  open?: boolean;
  content?: React.ReactNode | string;
}
function DetailedAnalysisCollapsible({
  open,
  content,
}: DetailedAnalysisCollapsibleProps) {
  return (
    <motion.div
      initial={false}
      animate={{ height: open ? 'auto' : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{ overflow: 'hidden' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="p-2 border border-gray-300 rounded-b-md border-t-0"
        style={{
          marginTop: '-1px',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      >
        {content}
      </motion.div>
    </motion.div>
  );
}

export default DetailedAnalysisCollapsible;
