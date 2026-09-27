import { COMPANY } from "@/lib/constants";
import { buildCallLink } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer dir="rtl" className="bg-industrial-dark-deep text-white/70">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          <div>
            <p className="text-white font-extrabold text-lg mb-1">{COMPANY.name}</p>
            <p className="text-sm text-white/60">{COMPANY.serviceArea}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium">
            <a
              href={`https://wa.me/${COMPANY.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-industrial-gold transition-colors"
            >
              واتساب: +{COMPANY.whatsappNumber}
            </a>
            <a
              href={buildCallLink()}
              className="hover:text-industrial-gold transition-colors"
            >
              اتصال: +{COMPANY.phoneNumber}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-center space-y-1 text-white/50">
          <p>
            © {year} {COMPANY.name}. جميع الحقوق محفوظة.
          </p>
          <p>
            صُمم وطُوّر بواسطة{" "}
            <a
              href="https://ahmedmoharam.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-industrial-gold hover:underline font-bold"
            >
              Ahmed Moharam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}