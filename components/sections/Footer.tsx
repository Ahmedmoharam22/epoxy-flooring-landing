import { COMPANY } from "@/lib/constants";
import { buildCallLink } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0D0F] text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          <div>
            <p className="text-white font-extrabold text-lg mb-1">{COMPANY.name}</p>
            <p className="text-sm">{COMPANY.serviceArea}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 text-sm">
            <a
              href={`https://wa.me/${COMPANY.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-industrial-gold focus-visible:ring-offset-2 rounded"
              aria-label={`تواصل عبر واتساب +${COMPANY.whatsappNumber} (يفتح في نافذة جديدة)`}
            >
              واتساب: +{COMPANY.whatsappNumber}
            </a>
            <a
              href={buildCallLink()}
              className="hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-industrial-gold focus-visible:ring-offset-2 rounded"
              aria-label={`اتصل بنا عبر الهاتف +${COMPANY.phoneNumber}`}
            >
              اتصال: +{COMPANY.phoneNumber}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-xs text-center space-y-1">
          <p>
            © {year} {COMPANY.name}. جميع الحقوق محفوظة.
          </p>
          <p>
            صُمم وطُوّر بواسطة{" "}
            <a
              href="https://ahmedmoharam.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E8A33D] font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-industrial-gold focus-visible:ring-offset-2 rounded"
              aria-label="Ahmed Moharam (يفتح في نافذة جديدة)"
            >
              Ahmed Moharam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}