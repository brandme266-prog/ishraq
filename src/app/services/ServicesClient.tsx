'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  text: string;
  specsTitle: string;
  specs: string[];
  icon: React.ReactNode;
  gallery: string[];
}

export default function ServicesClient() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const servicesList: ServiceItem[] = [
    {
      id: "signboards",
      badge: "اللوحات الخارجية والواجهات",
      title: "اللوحات الإعلانية الخارجية 3D وحروف بارزة مضيئة",
      text: "نحن متخصصون في تصنيع وتركيب اللوحات الإعلانية الخارجية بكافة أنواعها. نستخدم أحدث أجهزة قطع وثني المعادن بالليزر (CNC) لإنتاج حروف بارزة ثلاثية الأبعاد (3D) غاية في الدقة والجمال. نوفر حلول الإضاءة الخلفية والأمامية باستخدام تقنيات LED الكورية المقاومة للماء والأمطار والموفرة للطاقة بشكل ممتاز لضمان سطوع دائم في واجهتك التجارية بالرياض.",
      specsTitle: "المواد والتقنيات المستخدمة:",
      specs: [
        "حروف أكريليك مضيئة فاخرة",
        "حروف استانلس ستيل (لامع أو مطفي)",
        "لوحات كلادينج مقاومة للحريق للواجهات",
        "لوحات حروف زنكور مطلي بفرن حراري",
        "إضاءة LED كورية فائقة السطوع وعازلة للمياه",
        "محولات كهربائية مطابقة للمواصفات السعودية"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>
      ),
      gallery: [
        "/img/0e728b0c-bf8f-4641-97a9-54a16fba3fee.jpg",
        "/img/02de448d-7db9-4dbf-9500-e44d85c0d2b9.jpg",
        "/img/0ea4c15e-88ac-45fc-96d3-c55d624d66fa.jpg",
        "/img/15f17fee-4aad-4b19-8f73-35308687941d.jpg"
      ]
    },
    {
      id: "indoor",
      badge: "اللوحات الداخلية للمكاتب",
      title: "لوحات المكاتب الداخلية والشركات والبنوك",
      text: "نساعدك في إضفاء طابع من الاحترافية والفخامة داخل مقر شركتك أو فرع بنكك. نقوم بتصميم وتصنيع لوحات الاستقبال الخلفية بأسماء وشعارات الشركات، بالإضافة إلى اللوحات الإرشادية والتوجيهية داخل الممرات لتنظيم حركة العملاء والموظفين، ولوحات المكاتب الفردية التي تبرز هوية كل قسم وموظف بأسلوب فاخر ومميز.",
      specsTitle: "أنواع اللوحات الداخلية المتوفرة:",
      specs: [
        "لوحات استقبال زجاج سيكوريت مع مسامير بارزة",
        "لوحات أكريليك مقصوصة بالليزر بدقة عالية",
        "لوحات ستانلس ستيل محفورة كيميائياً",
        "لوحات مكتبية خشبية ونحاسية مخصصة",
        "لوحات إرشادية وتوجيهية متكاملة للمباني",
        "لوحات مخارج الطوارئ المضيئة والسلامة"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      ),
      gallery: [
        "/img/b4a31cc5-74c2-4a32-a6ce-465e86423c8b.jpg",
        "/img/63fbebd2-0837-4cfe-8d21-55d0be86388e.jpg",
        "/img/1f32b6bb-848b-46c5-9124-fc5c859b2156.jpg",
        "/img/ede410a0-2480-46e2-91a3-d66f8da71301.jpg"
      ]
    },
    {
      id: "exhibitions",
      badge: "المعارض والمؤتمرات",
      title: "ستاندات العرض وتجهيز المعارض والمؤتمرات",
      text: "نوفر لشركتك حضوراً استثنائياً في المعارض والفعاليات والمؤتمرات داخل الرياض وباقي مدن المملكة. نقوم بتصميم وتوريد وتركيب ستاندات العرض المتنوعة (رول أب، بوب أب) التي يسهل نقلها واستخدامها، بالإضافة إلى بناء وتجهيز بوثات العرض الخشبية والاكريليك المخصصة بالكامل (Custom Exhibition Booths) لتتناسب تماماً مع مساحة ومفهوم مشاركتكم.",
      specsTitle: "خدمات المعارض المتكاملة:",
      specs: [
        "ستاندات رول أب (Roll up) بمختلف المقاسات",
        "بوب أب ستاند (Pop up) مقوس ومستقيم مع إضاءة",
        "طاولات ترويجية ومنصات استقبال للمعارض",
        "تصميم وبناء بوثات خشبية مخصصة ثلاثية الأبعاد",
        "طباعة بوسترات وبنرات المعارض عالية الدقة",
        "تركيب وتفكيك البوثات بموقع الفعالية بالرياض"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      ),
      gallery: [
        "/img/c2635d05-b07e-428c-b2c1-489efc2acfd3.jpg",
        "/img/b43fcbf2-867e-4374-83cd-380e4dd3ab9a.jpg",
        "/img/464575cb-11fb-4c81-ad22-f379547e04f8.jpg",
        "/img/aac70014-04ba-484a-8842-1a41725b600f.jpg"
      ]
    },
    {
      id: "branding",
      badge: "الهوية التجارية",
      title: "تصميم الهوية البصرية وشعارات الشركات",
      text: "نحن نؤمن بأن الهوية التجارية القوية هي أساس نجاح أي عمل. نساعدك في ابتكار وتصميم شعار فريد يعبر بدقة عن قيم ومجال شركتك، ونقوم ببناء وتصميم دليل الهوية البصرية الكامل (Brand Guideline) الذي يحدد الألوان الرسمية، الخطوط، وتصميم المطبوعات الرسمية ومواد الدعاية لضمان اتساق وانطباع احترافي لدى عملائك.",
      specsTitle: "عناصر الهوية البصرية التي نصممها:",
      specs: [
        "تصميم الشعارات الاحترافية (Logo Design)",
        "تصميم بطاقات الأعمال (Business Cards)",
        "تصميم الأوراق والمراسلات الرسمية والأظرف",
        "تصميم الفواتير، السندات، والبروشورات",
        "تحديد لوحة الألوان والخطوط الرسمية للشركة",
        "تصميم ملابس الموظفين والأكياس الدعائية"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
      ),
      gallery: [
        "/img/d9e2664e-0714-457c-8ad4-e2be7865f0d9.jpg",
        "/img/25575002-800a-40fa-846e-0d036bf9cc47.jpg"
      ]
    },
    {
      id: "stickers",
      badge: "الملصقات وتغليف السيارات",
      title: "ستيكرات داخلية وخارجية وتغليف مركبات الشركات",
      text: "حوّل أسطول سيارات شركتك إلى لوحات إعلانية متنقلة تجوب شوارع الرياض يومياً للترويج لخدماتك. نقوم بطباعة ستيكرات السيارات والملصقات الدعائية عالية الدقة، ونقوم بتركيبها وتغليف السيارات كلياً أو جزئياً باستخدام ملصقات فينيل ألمانية المنشأ (مثل 3M و Oracal) مضاف إليها طبقة حماية (Lamination) لمقاومة الحرارة الشديدة وأشعة الشمس والخدوش.",
      specsTitle: "حلول الملصقات والتغليف المتاحة:",
      specs: [
        "تغليف كامل لمركبات وسيارات النقل للشركات",
        "تغليف جزئي أو ستيكرات شعار وبيانات الاتصال",
        "طباعة وتركيب ستيكرات النوافذ والواجهات الزجاجية",
        "ستيكرات جدران داخلية مخصصة للمكاتب (Wall Murals)",
        "استخدام فينيل ألماني عالي الجودة ومقاوم للشمس",
        "طبقة حماية لامعة أو مطفية لحفظ الألوان والملصقات"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
      ),
      gallery: [
        "/img/13534e81-ab78-4eef-ba72-f833a5ec5056.jpg",
        "/img/ede410a0-2480-46e2-91a3-d66f8da71301.jpg"
      ]
    },
    {
      id: "printing",
      badge: "الهدايا والدروع والزخارف",
      title: "أعمال الزخارف، دروع تذكارية وسيوف، وهدايا دعائية",
      text: "نصنع لك هدايا تذكارية ودروع تكريم تليق بضيوفك وشركاء نجاحك. نتميز بدقة حفر وقص ليزر متناهية الصعوبة على مختلف الخامات كالاكريليك والجلود والاخشاب والمعادن. نقوم بتصميم وتصنيع الدروع التذكارية الفاخرة، طباعة ونقش السيوف التذكارية التراثية، والطباعة على الجلود والدفاتر وتخصيص الهدايا الترويجية لشركتك بلمسات إبداعية مبهرة.",
      specsTitle: "الهدايا والدروع التي نوفرها:",
      specs: [
        "دروع تذكارية من الأكريليك الفاخر المقصوص بالليزر",
        "دروع نحاسية وخشبية محفورة ومذهبة بشكل ملكي",
        "سيوف تذكارية فاخرة ونقش خاص بأسماء المكرمين",
        "طباعة ونقش على الجلود والعلب وصناديق الهدايا",
        "طباعة الهدايا الدعائية (أقلام، دفاتر، أكواب، فلاشات)",
        "أعمال قص وحفر ليزر مخصصة (Custom Laser Projects)"
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      ),
      gallery: [
        "/img/2525c1c9-9eff-48a8-8783-3baf04af1d70.jpg",
        "/img/8322121e-c16e-4a54-a596-6c5456a17ade.jpg"
      ]
    }
  ];

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Services Header */}
      <section className={styles.servicesHeader}>
        <div className="container">
          <h1 className={styles.title}>خدماتنا الإعلانية المتكاملة</h1>
          <p className={styles.desc}>
            نقدم حلولاً إعلانية متكاملة لجميع المشاريع في الرياض، من الفكرة والتصميم الإبداعي إلى التصنيع والتركيب الفني بأحدث التقنيات والمعايير.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      {servicesList.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`${styles.detailSection}`}
            style={{ padding: '80px 0' }}
          >
            <div className="container">
              <div className={`${styles.serviceGrid} ${!isEven ? styles.serviceGridReverse : ''}`}>
                
                {/* Content Column */}
                <div className={styles.contentCol}>
                  <span className={styles.badge}>{service.badge}</span>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <p className={styles.serviceText}>{service.text}</p>
                  
                  <div className={styles.specsCard}>
                    <h4 className={styles.specsTitle}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 11.08 12 19 7 14"></polyline></svg>
                      {service.specsTitle}
                    </h4>
                    <ul className={styles.specsList}>
                      {service.specs.map((spec, specIdx) => (
                        <li key={specIdx} className={styles.specItem}>
                          <span className={styles.specDot}></span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Gallery Column */}
                <div className={styles.imageCol}>
                  <div className={styles.galleryContainer}>
                    <h3 className={styles.galleryHeading}>
                      {service.icon}
                      <span>معرض أعمال حية لهذه الخدمة:</span>
                    </h3>
                    <div className={styles.galleryGrid}>
                      {service.gallery.map((imgUrl, imgIdx) => (
                        <div
                          key={imgIdx}
                          className={styles.galleryCard}
                          onClick={() => setLightboxImage(imgUrl)}
                        >
                          <img src={imgUrl} alt={`مشروع ${service.badge}`} className={styles.galleryImg} loading="lazy" />
                          <div className={styles.galleryHoverOverlay}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* Call to Action Panel */}
      <section className="section-bg-dark" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className={styles.ctaPanel}>
            <h2 className={styles.ctaTitle}>هل تحتاج لمعاينة أو استشارة فنية لموقعك بالرياض؟</h2>
            <p className={styles.ctaText}>
              نحن نرسل فريقنا الفني المتخصص مجاناً لأخذ المقاسات ومعاينة الواجهة وتقديم أفضل النصائح الفنية التي تناسب علامتك وميزانيتك.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="https://wa.me/966530906352" className="btn btn-primary" target="_blank">
                <span>تواصل معنا عبر واتساب</span>
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                <span>صفحة اتصل بنا</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className={styles.lightboxOverlay} onClick={() => setLightboxImage(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightboxImage(null)}>&times;</button>
            <img src={lightboxImage} alt="صورة تفصيلية للمشروع" className={styles.lightboxImg} />
          </div>
        </div>
      )}
    </main>
  );
}
