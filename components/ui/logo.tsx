export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#E8A33D" />
        <path
          d="M8 22V13.5L16 9l8 4.5V22"
          stroke="#111418"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M8 22h16" stroke="#111418" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-extrabold text-lg text-[#111418]">خبراء الإيبوكسي</span>
    </div>
  );
}