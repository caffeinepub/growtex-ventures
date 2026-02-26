import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-green-500 transition-none origin-left"
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 8px oklch(0.55 0.18 145 / 0.6)',
        }}
      />
    </div>
  );
}
