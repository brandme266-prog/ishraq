'use client';

import { useRef } from 'react';
import Link from 'next/link';
import styles from './ServicesSlider.module.css';

export default function ServicesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'right' | 'left') => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      // Scroll by 85% of client width to show partial cards for visual continuity
      const scrollAmount = clientWidth * 0.85;
      const offset = direction === 'right' ? -scrollAmount : scrollAmount;
      sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const services = [
    {
      image: '/img/0e728b0c-bf8f-4641-97a9-54a16fba3fee.jpg', // Bliss Flower Boutique backlit signage
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="9" x2="15" y2="15"></line>
          <line x1="15" y1="9" x2="9" y2="15"></line>
        </svg>
      ),
      name: 'اللوحات الإعلانية الخارجية 3D',
      desc: 'تصنيع وتركيب الحروف المجسمة والبارزة المضيئة (اكريليك، زنكور، استانلس ستيل) ولوحات الكلادينج الفاخرة للواجهات بجميع المقاسات وبإضاءة LED متطورة وموفرة للطاقة.',
      link: '/services#signboards'
    },
    {
      image: '/img/b4a31cc5-74c2-4a32-a6ce-465e86423c8b.jpg', // KEDAN reception indoor signage
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      name: 'لوحات المكاتب والشركات الداخلية',
      desc: 'لوحات استقبال فاخرة، لوحات إرشادية، لوحات زجاجية واكريليك مخصصة للمكاتب، البنوك، والمؤسسات لتضفي طابعاً راقياً ومنظماً داخل بيئة عملك.',
      link: '/services#indoor'
    },
    {
      image: '/img/c2635d05-b07e-428c-b2c1-489efc2acfd3.jpg', // Anwart exhibition booths
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      name: 'تجهيز المعارض والمؤتمرات',
      desc: 'حلول عرض متكاملة للمشاركات الفعّالة، بما في ذلك ستاندات العرض (رول أب، بوب أب، فلاج بانر) وبناء المنصات وتأثيث البوثات الدعائية بشكل يجذب الحضور.',
      link: '/services#exhibitions'
    },
    {
      image: '/img/d9e2664e-0714-457c-8ad4-e2be7865f0d9.jpg', // 3D pharmacy branding proposal
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      name: 'تصميم الهوية البصرية والشعارات',
      desc: 'بناء هوية بصرية قوية ومتكاملة لعلامتك تشمل تصميم الشعار، الألوان الرسمية، اختيار الخطوط، وتصميم المطبوعات الرسمية والمواد الإعلانية بلمسة إبداعية تناسب نشاطك.',
      link: '/services#branding'
    },
    {
      image: '/img/13534e81-ab78-4eef-ba72-f833a5ec5056.jpg', // Sharurah Pickup wrapping
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      name: 'ستيكرات السيارات وتغليف المركبات',
      desc: 'تحويل مركبات شركتك إلى لوحات إعلانية متنقلة عبر تصميم وطباعة وتركيب ملصقات الفينيل وتغليف السيارات كلياً أو جزئياً بخامات مقاومة للحرارة والتقشير.',
      link: '/services#stickers'
    },
    {
      image: '/img/02de448d-7db9-4dbf-9500-e44d85c0d2b9.jpg', // Nasaem Al Farah acrylic cut letters
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      name: 'الزخارف والهدايا التذكارية والدروع',
      desc: 'قص وحفر ليزر دقيق على الاكريليك والجلود والجلود والاخشاب، مع تصميم وطباعة الدروع التذكارية، السيوف الفاخرة، والهدايا الدعائية لشركتك بلمسات إبداعية ممتازة.',
      link: '/services#printing'
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
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.cardHeader}>
              <img src={service.image} alt={service.name} className={styles.serviceImage} />
              <div className={styles.serviceIcon}>{service.icon}</div>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.serviceName}>{service.name}</h3>
              <p className={styles.serviceDesc}>{service.desc}</p>
              <Link href={service.link} className={styles.serviceLink}>
                <span>المزيد من التفاصيل</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className={styles.showAllWrapper}>
        <Link href="/services" className="btn btn-primary">
          <span>عرض جميع الخدمات والتفاصيل الفنية</span>
        </Link>
      </div>
    </div>
  );
}
