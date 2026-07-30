'use client';

import { useRef } from 'react';
import Link from 'next/link';
import styles from './PortfolioSlider.module.css';

export default function PortfolioSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'right' | 'left') => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.85;
      const offset = direction === 'right' ? -scrollAmount : scrollAmount;
      sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: "لوحة واجهة روضة نسائم الفرح الأهلية",
      category: "لوحات خارجية",
      desc: "تصنيع وتركيب لوحة كلادينج لفرع الروضة بالرياض مع حروف بارزة أكريليك ملونة وشعار متكامل مقصوص بالليزر.",
      image: "/img/02de448d-7db9-4dbf-9500-e44d85c0d2b9.jpg"
    },
    {
      id: 2,
      title: "حروف بارزة مضيئة لـ Bliss Flower Boutique",
      category: "حروف مضيئة",
      desc: "تصنيع حروف بارزة ستانلس ستيل مذهب فاخر مع إضاءة خلفية هيلو (Halo-lit) هادئة ومقاومة لعوامل الطقس.",
      image: "/img/0e728b0c-bf8f-4641-97a9-54a16fba3fee.jpg"
    },
    {
      id: 3,
      title: "لوحة استقبال وشعار مضيء لمقر شركة كدان - KEDAN",
      category: "لوحات داخلية",
      desc: "تصنيع وتركيب شعار وحروف بارزة مضيئة مثبتة على جدار استقبال بتكسية بديل الخشب الأنيق داخل المقر.",
      image: "/img/b4a31cc5-74c2-4a32-a6ce-465e86423c8b.jpg"
    },
    {
      id: 4,
      title: "تنفيذ أجنحة وبوثات الفعاليات لـ 'أنورت 47'",
      category: "تجهيز معارض",
      desc: "تفصيل وتجهيز أجنحة المعارض الداخلية (بوثات خشبية وبلاستيكية) لفعالية أنورت 47 شاملة الديكورات والإضاءة.",
      image: "/img/c2635d05-b07e-428c-b2c1-489efc2acfd3.jpg"
    },
    {
      id: 5,
      title: "تصميم ثلاثي الأبعاد وهوية متكاملة لصيدلية رمز الصحة",
      category: "تصاميم 3D",
      desc: "إعداد مقترحات التصميم ثلاثي الأبعاد (3D Rendering) لواجهة الصيدلية مع دراسة توزيع الإضاءات والكلادينج.",
      image: "/img/d9e2664e-0714-457c-8ad4-e2be7865f0d9.jpg"
    },
    {
      id: 6,
      title: "تغليف شاحنات أسطول بلدية شرورة",
      category: "تغليف سيارات",
      desc: "تغليف وتركيب ستيكر فينيل عالي الجودة لسيارات البلدية يحمل الهوية البصرية الرسمية والشعارات.",
      image: "/img/13534e81-ab78-4eef-ba72-f833a5ec5056.jpg"
    }
  ];

  return (
    <div className={styles.sliderContainer}>
      {/* Navigation arrows */}
      <button onClick={() => scroll('right')} className={`${styles.navBtn} ${styles.prevBtn}`} aria-label="السابق">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      <button onClick={() => scroll('left')} className={`${styles.navBtn} ${styles.nextBtn}`} aria-label="التالي">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Scrollable track */}
      <div ref={sliderRef} className={styles.sliderTrack}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.cardHeader}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <span className={styles.projectTag}>{project.category}</span>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.projectName}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className={styles.showAllWrapper}>
        <Link href="/portfolio" className="btn btn-outline-gold">
          <span>عرض المزيد من الأعمال</span>
        </Link>
      </div>
    </div>
  );
}
