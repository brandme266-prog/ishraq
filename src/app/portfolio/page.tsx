'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

interface Project {
  id: number;
  title: string;
  category: 'signage' | 'exhibitions' | 'stickers' | 'indoor' | 'installations' | 'design';
  categoryLabel: string;
  desc: string;
  image: string;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'الكل' },
    { value: 'signage', label: 'لوحات خارجية 3D' },
    { value: 'indoor', label: 'لوحات داخلية واستقبال' },
    { value: 'exhibitions', label: 'تجهيز معارض وفعاليات' },
    { value: 'stickers', label: 'ملصقات وتغليف سيارات' },
    { value: 'installations', label: 'أعمال تركيب ميدانية' },
    { value: 'design', label: 'مقترحات تصاميم 3D' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "لوحة مشروع تحت الإنشاء - رهيفة قريباً",
      category: "signage",
      categoryLabel: "لوحات خارجية",
      desc: "تصنيع وتركيب لوحة خشبية ضخمة مغطاة ببلاستر بنر مطبوع ومشدود لتغطية واجهة المحل وجذب الانتباه في فترة التأسيس بالرياض.",
      image: "/img/02b244a4-64cb-4422-8cb4-b1cd3d7a5588.jpg"
    },
    {
      id: 2,
      title: "لوحة واجهة روضة نسائم الفرح الأهلية",
      category: "signage",
      categoryLabel: "لوحات خارجية",
      desc: "تصنيع وتركيب لوحة كلادينج لفرع الروضة بالرياض مع حروف بارزة أكريليك ملونة وشعار متكامل مقصوص بالليزر.",
      image: "/img/02de448d-7db9-4dbf-9500-e44d85c0d2b9.jpg"
    },
    {
      id: 3,
      title: "حواجز بنر مشدود لمشاريع الطرق بالرياض",
      category: "signage",
      categoryLabel: "لوحات خارجية",
      desc: "طباعة وشد لوحات بنر عملاقة على حواجز خرسانية لمواقع المشاريع الإنشائية التابعة للهيئة الملكية لمدينة الرياض على الطرق الدائرية.",
      image: "/img/04022a89-b08a-40e3-bee4-cf06f403e740.jpg"
    },
    {
      id: 4,
      title: "حروف بارزة مضيئة لمحل Bliss Flower Boutique",
      category: "signage",
      categoryLabel: "لوحات خارجية",
      desc: "تصنيع حروف بارزة ستانلس ستيل مذهب فاخر مع إضاءة خلفية هيلو (Halo-lit) هادئة ومقاومة لعوامل الطقس الحارة.",
      image: "/img/0e728b0c-bf8f-4641-97a9-54a16fba3fee.jpg"
    },
    {
      id: 5,
      title: "لوحة أسطح فندق نوفا بارك - Nova Park Hotel",
      category: "signage",
      categoryLabel: "لوحات خارجية",
      desc: "لوحة حروف بارزة معدنية عملاقة مثبتة على هيكل حديدي متين مقاوم للرياح على سطح المبنى الرئيسي للفندق بالرياض.",
      image: "/img/0ea4c15e-88ac-45fc-96d3-c55d624d66fa.jpg"
    },
    {
      id: 6,
      title: "تغليف شاحنات أسطول بلدية شرورة",
      category: "stickers",
      categoryLabel: "تغليف سيارات",
      desc: "تغليف وتركيب ستيكر فينيل عالي الجودة لسيارات البلدية يحمل الهوية البصرية الرسمية والشعارات وأرقام البلاغات.",
      image: "/img/13534e81-ab78-4eef-ba72-f833a5ec5056.jpg"
    },
    {
      id: 7,
      title: "واجهة كوفي شوب Opal Coffee House ومظلة قماشية",
      category: "signage",
      categoryLabel: "لوحات خارجية",
      desc: "تركيب حروف بارزة مضيئة على شبك حديدي ديكوري باللون الأسود، مع تفصيل وتركيب مظلة خارجية قماشية مطبوعة بشعار الكوفي.",
      image: "/img/15f17fee-4aad-4b19-8f73-35308687941d.jpg"
    },
    {
      id: 8,
      title: "مدخل وشارات زجاجية لمجموعة Tiara Group",
      category: "signage",
      categoryLabel: "لوحات خارجية",
      desc: "تصنيع حروف بارزة سوداء وذهبية لمدخل المبنى الرئيسي، مع تركيب ستيكرات مثلجة للخصوصية (Frosted Vinyl) على الأبواب الزجاجية.",
      image: "/img/1f32b6bb-848b-46c5-9124-fc5c859b2156.jpg"
    },
    {
      id: 9,
      title: "لوحة واجهة كلادينج وحروف مضيئة لمخبز فرن الحمام",
      category: "signage",
      categoryLabel: "لوحات خارجية",
      desc: "تصنيع حروف بارزة مضيئة بلون تيفاني مثبتة على هيكل صاج مموج أسود، مع كسوة واجهة المبنى بألواح كلادينج رمادية فاخرة.",
      image: "/img/1fa93634-db05-4145-88bb-490d6ef0fc65.jpg"
    },
    {
      id: 10,
      title: "مجسم أرضي عملاق مضيء لمقر مجموعة AF Group",
      category: "signage",
      categoryLabel: "لوحات خارجية",
      desc: "تصنيع لوحة مجسمة عملاقة مضيئة بارتفاع شاهق موضوعة بساحة المقر الخارجي، كمعلم جمالي بارز للشركة بالرياض.",
      image: "/img/25575002-800a-40fa-846e-0d036bf9cc47.jpg"
    },
    {
      id: 11,
      title: "أعمال تركيب وتمديد لوحات مشاريع الطرق الميدانية",
      category: "installations",
      categoryLabel: "أعمال تركيب",
      desc: "متابعة طاقم التركيبات الميدانية أثناء شد وتثبيت البنرات الإعلانية الضخمة على الحواجز الخرسانية بالموقع الإنشائي.",
      image: "/img/2f68f7f3-7f99-4c5e-8557-7c09a769fe63.jpg"
    },
    {
      id: 12,
      title: "حواجز بنر قماشية لمواقف Luxury Parking",
      category: "exhibitions",
      categoryLabel: "تجهيز معارض",
      desc: "تصنيع وتجهيز حواجز تقسيم متحركة مغطاة بقماش بنر مطبوع لفعاليات مواقف السيارات الفاخرة وكبار الشخصيات بالرياض.",
      image: "/img/464575cb-11fb-4c81-ad22-f379547e04f8.jpg"
    },
    {
      id: 13,
      title: "لوحة واجهة محروس كافيه وحروف بارزة مضيئة",
      category: "signage",
      categoryLabel: "لوحات خارجية",
      desc: "تصنيع وتركيب حروف بارزة مضيئة باللون الكريمي الدافئ مثبتة على شبك ألومنيوم ديكوري مفرغ مقصوص بالليزر بنقشة إسلامية.",
      image: "/img/4d515b00-7d18-4934-9d1b-af72466ca00d.jpg"
    },
    {
      id: 14,
      title: "تركيب ألواح تكسية خشبية لواجهة سور مشروع رائد",
      category: "installations",
      categoryLabel: "أعمال تركيب",
      desc: "عملية التثبيت والتركيب الميدانية لألواح الخشب المعمارية الخارجية على واجهة سور مشروع ضخم بواسطة السقالات وفريق الفنيين.",
      image: "/img/6cb42083-2bd1-4eeb-aa7d-73e0cc601f84.jpg"
    },
    {
      id: 15,
      title: "أعمال تركيب واجهة وحروف مطعم Basil Lounge - بازل",
      category: "installations",
      categoryLabel: "أعمال تركيب",
      desc: "مرحلة تركيب حروف الأكريليك البارزة البيضاء وشعار 'بازل' على كلادينج أسود لامع لواجهة المطعم من قبل فنيي الشركة.",
      image: "/img/7455b13c-ab95-415b-aa11-0d0555b4ae96.jpg"
    },
    {
      id: 16,
      title: "حاجز بارتيشن خشبي دعائي لكوفي Toby's Estate",
      category: "exhibitions",
      categoryLabel: "تجهيز معارض",
      desc: "طباعة وتجهيز تغطية بنر بارتيشن خشبي دائري داخل مجمع تجاري للإعلان عن قرب افتتاح الكوفي وتوفير الخصوصية لأعمال التشطيب.",
      image: "/img/aac70014-04ba-484a-8842-1a41725b600f.jpg"
    },
    {
      id: 17,
      title: "تجهيز خيمة الاستقبال لوزارة الموارد البشرية بمنفذ الوديعة",
      category: "exhibitions",
      categoryLabel: "تجهيز معارض",
      desc: "تصميم وتنفيذ كلادينج البوابة الخارجية وكامل المطبوعات والهوية البصرية لخيمة استقبال الحجاج التابعة للوزارة بمنفذ الوديعة.",
      image: "/img/b43fcbf2-867e-4374-83cd-380e4dd3ab9a.jpg"
    },
    {
      id: 18,
      title: "لوحة استقبال وشعار مضيء لمقر شركة كدان - KEDAN",
      category: "indoor",
      categoryLabel: "لوحات داخلية",
      desc: "تصنيع وتركيب شعار وحروف بارزة مضيئة (هيلو ليت) هادئة ومثبتة على جدار استقبال بتكسية بديل الخشب الأنيق داخل المقر.",
      image: "/img/b4a31cc5-74c2-4a32-a6ce-465e86423c8b.jpg"
    },
    {
      id: 19,
      title: "تنفيذ أجنحة وبوثات الفعاليات لـ 'أنورت 47'",
      category: "exhibitions",
      categoryLabel: "تجهيز معارض",
      desc: "تفصيل وتجهيز أجنحة المعارض الداخلية (بوثات خشبية وبلاستيكية) لفعالية أنورت 47 شاملة أعمال الدهان، الديكورات، والستائر.",
      image: "/img/c2635d05-b07e-428c-b2c1-489efc2acfd3.jpg"
    },
    {
      id: 20,
      title: "لوحة واجهة وحروف بارزة لمطعم خلية سمسم",
      category: "signage",
      categoryLabel: "لوحات خارجية",
      desc: "تصنيع حروف بارزة أكريليك مضيئة أمامياً وشعار مطعم خلية سمسم مثبتة على لوحة صاج مدهونة حرارياً باللون الكحلي الداكن بالرياض.",
      image: "/img/c66e2771-69e2-4cf4-97b7-c69ea6b7fd11.jpg"
    },
    {
      id: 21,
      title: "تصميم ثلاثي الأبعاد وهوية متكاملة لصيدلية رمز الصحة",
      category: "design",
      categoryLabel: "تصاميم 3D",
      desc: "إعداد مقترحات التصميم ثلاثي الأبعاد (3D Rendering) لواجهة الصيدلية مع دراسة توزيع الإضاءات والكلادينج والحروف البارزة المقترحة.",
      image: "/img/d9e2664e-0714-457c-8ad4-e2be7865f0d9.jpg"
    },
    {
      id: 22,
      title: "بنرات جدارية وتغليف ممر عيادة Amwaj Physio",
      category: "stickers",
      categoryLabel: "تغليف سيارات",
      desc: "طباعة وتركيب بنرات دعائية خارجية مشدودة مقاومة للشمس لتغليف ممر المشاة بمركز العلاج الطبيعي بشعار وهوية العيادة.",
      image: "/img/ede410a0-2480-46e2-91a3-d66f8da71301.jpg"
    },
    {
      id: 23,
      title: "حواجز بنر دعائية داخلية لمحل Toby's Estate",
      category: "exhibitions",
      categoryLabel: "تجهيز معارض",
      desc: "صورة أخرى للحواجز الخشبية الإعلانية الملتفة المطبوعة بعبارات تسويقية ورموز الشبكات الاجتماعية للمحل في فترة ما قبل الافتتاح.",
      image: "/img/ff87d451-74ee-44a2-bd21-629124eea362.jpg"
    },
    {
      id: 24,
      title: "لوحة جدارية تحفيزية لمركز Amwaj Physio الطبي بالرياض",
      category: "indoor",
      categoryLabel: "لوحات داخلية",
      desc: "طباعة وتركيب لوحة فينيل جدارية دعائية كبيرة الحجم تحمل عبارات تشجيعية بشعار المركز لتزيين القاعة الرياضية الداخلية.",
      image: "/img/63fbebd2-0837-4cfe-8d21-55d0be86388e.jpg"
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Portfolio Header */}
      <section className={styles.portfolioHeader}>
        <div className="container">
          <h1 className={styles.title}>معرض أعمالنا ومشاريعنا</h1>
          <p className={styles.desc}>
            فخورون باستعراض مجموعة من المشاريع المتميزة التي قمنا بتصميمها وتصنيعها وتركيبها في مدينة الرياض ومختلف أنحاء المملكة العربية السعودية.
          </p>
        </div>
      </section>

      {/* Filter and Grid Section */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          {/* Navigation Filter Buttons */}
          <div className={styles.filterNav}>
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`${styles.filterBtn} ${activeCategory === cat.value ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                {/* Visual Image representing the project */}
                <div className={styles.projectVisual}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImg}
                    loading="lazy"
                  />
                  <span className={styles.projectTag}>{project.categoryLabel}</span>
                </div>
                
                {/* Content */}
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>هل ترغب في جودة مماثلة لهويتك التجارية؟</h2>
            <p className={styles.ctaText}>
              تواصل معنا وسنقوم بإرسال مهندس المقاسات لزيارتك بمقر شركتك أو موقع المحل بالرياض مجاناً وبدون أي التزامات.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="https://wa.me/966530906352" className="btn btn-primary" target="_blank">
                <span>تواصل معنا عبر واتساب</span>
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                <span>طلب معاينة فنية</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
