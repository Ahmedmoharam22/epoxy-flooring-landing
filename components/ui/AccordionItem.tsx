"use client";

import { useState, useId } from "react";

type Props = {
  question: string;
  answer: string;
};

export function AccordionItem({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();
  const buttonId = useId();

  return (
    <div className="border-b border-gray-200">
      <button
        id={buttonId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between py-5 text-right font-bold text-[#111418] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-industrial-gold-dark focus-visible:ring-offset-2 rounded-md transition-colors hover:text-industrial-gold-dark"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{question}</span>
        <span
          className={`shrink-0 text-[#b08420] text-xl transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {isOpen && (
        <div id={contentId} role="region" aria-labelledby={buttonId}>
          <p className="pb-5 text-sm text-[#4B5563] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}