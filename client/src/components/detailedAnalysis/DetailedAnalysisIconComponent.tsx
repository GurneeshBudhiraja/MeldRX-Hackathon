import {
  CircleArrowDownIcon,
  CircleArrowRightIcon,
  Loader2,
} from 'lucide-react';

interface DetailedAnalysisIconComponentProps {
  loading?: boolean;
  open?: boolean;
}

export default function DetailedAnalysisIconComponent({
  loading,
  open,
}: DetailedAnalysisIconComponentProps) {
  return (
    <span>
      {!loading && (!open ? <CircleArrowRightIcon /> : <CircleArrowDownIcon />)}
      {loading && <Loader2 className="animate-spin" />}
    </span>
  );
}
