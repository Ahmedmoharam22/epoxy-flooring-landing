import { AccordionItem } from "@/components/ui/AccordionItem";

const FAQS = [
  {
    question: "ما أنواع المشاريع التي تخدمونها؟",
    answer:
      "نخدم المصانع، الهناجر، الورش، والمستودعات، وأي مشروع صناعي أو تجاري يحتاج أرضيات إيبوكسي.",
  },
  {
    question: "هل الخدمة تشمل التوريد والتركيب؟",
    answer: "نعم، نوفر خدمة توريد وتركيب أعمال أرضيات الإيبوكسي بشكل كامل.",
  },
  {
    question: "كيف يمكنني طلب عرض سعر؟",
    answer:
      "يمكنك التواصل معنا مباشرة عبر واتساب، وسنرد عليك بأقرب وقت لمناقشة تفاصيل مشروعك.",
  },
  {
    question: "هل يمكن معاينة الموقع؟",
    answer:
      "يمكن ترتيب ذلك بعد التواصل معنا ومناقشة تفاصيل المشروع حسب الموقع والحاجة.",
  },
  {
    question: "ما المعلومات المطلوبة لتحديد السعر؟",
    answer:
      "غالبًا نحتاج معرفة مساحة الأرضية، طبيعة المكان (مصنع/ورشة/مستودع/هنجر)، والاستخدام المتوقع للمساحة.",
  },
];

export function Faq() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-[#111418] mb-10">
          الأسئلة الشائعة
        </h2>

        <div>
          {FAQS.map((faq) => (
            <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}