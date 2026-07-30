'use client';

import { useState } from 'react';
import styles from '@/app/page.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "ما هي أنواع اللوحات الإعلانية التي تقومون بتصنيعها؟",
      answer: "نقوم بتصنيع كافة أنواع اللوحات الخارجية والداخلية، بما في ذلك حروف الاكريليك المضيئة، حروف الاستانلس ستيل، لوحات الكلادينج، اللوحات الإرشادية، لوحات النيون، واللوحات المكتبية المخصصة للشركات والبنوك."
    },
    {
      question: "هل تقدمون خدمات تركيب اللوحات في جميع مناطق الرياض؟",
      answer: "نعم، لدينا فريق عمل متكامل ورافعات وأوناش مخصصة لتركيب اللوحات الإعلانية في جميع أحياء الرياض ومناطق المملكة العربية السعودية مع ضمان جودة التركيب ومقاومة الظروف الجوية."
    },
    {
      question: "ما هي المدة المستغرقة لتجهيز وتصنيع اللوحات؟",
      answer: "تختلف المدة بحسب حجم ونوع العمل، ولكننا نلتزم دائماً بالمعادلة الثلاثية (الجودة - الوقت - السعر)، حيث يتم إنجاز معظم المشاريع المتوسطة خلال 3 إلى 7 أيام عمل من تاريخ اعتماد التصميم."
    },
    {
      question: "هل تشمل خدماتكم تصميم الهويات والشعارات أم التنفيذ فقط؟",
      answer: "نقدم حلولاً متكاملة تشمل تصميم الهوية البصرية للشركات والمؤسسات بالكامل من شعارات، بطاقات أعمال، ومطبوعات، ومن ثم تنفيذها وتصنيع اللوحات والملصقات الخاصة بها لضمان اتساق الهوية."
    },
    {
      question: "كيف يمكنني طلب معاينة مجانية لموقعي أو شركتي؟",
      answer: "يمكنك طلب معاينة مجانية مباشرة عبر الضغط على أزرار الاتصال أو الواتساب بالموقع، أو ملء نموذج الطلب أدناه وسيتواصل معك فني المعاينة لتحديد الموعد وأخذ المقاسات الدقيقة مجاناً."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            className={`${styles.faqItem} ${isActive ? styles.faqItemActive : ''}`}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
              aria-expanded={isActive}
            >
              <span>{faq.question}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.faqIcon}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={styles.faqAnswer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
