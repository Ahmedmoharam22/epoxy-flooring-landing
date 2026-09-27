const POINTS = [
  "توريد وتركيب",
  "حلول للمشروعات الصناعية",
  "تنفيذ احترافي",
  "حلول حسب احتياج المشروع",
];

export function TrustBar() {
  return (
    <section className="bg-[#F5F6F7] border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {POINTS.map((point) => (
            <li
              key={point}
              className="flex flex-col items-center gap-2 text-[#111418] font-bold text-sm md:text-base"
            >
              <CheckIcon />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E8A33D"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}