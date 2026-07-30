import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import ServicesSlider from '@/components/ServicesSlider';
import PortfolioSlider from '@/components/PortfolioSlider';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "شركة إشراق للدعاية والإعلان بالرياض",
            "image": "https://ishraq-adv.com/logo.png",
            "@id": "https://ishraq-adv.com/#organization",
            "url": "https://ishraq-adv.com/",
            "telephone": "+966530906352",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "شارع ينبع, حي ظهرة لبن",
              "addressLocality": "الرياض",
              "addressRegion": "منطقة الرياض",
              "addressCountry": "SA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 24.6368817,
              "longitude": 46.5779035
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Saturday",
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday"
              ],
              "opens": "09:00",
              "closes": "21:00"
            },
            "sameAs": [
              "https://wa.me/966530906352"
            ]
          })
        }}
      />
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span className={styles.heroDot}></span>
                <span>رواد صناعة اللوحات والحلول الإعلانية بالرياض</span>
              </div>
              <h1 className={styles.heroTitle}>
                اجعل هويتك التجارية
                <span className={styles.heroTitleHighlight}>تنبض بالحياة والتميز</span>
              </h1>
              <p className={styles.heroText}>
                شركة إشراق للدعاية والإعلان تصنع لشركتك التميز البصري الذي تبحث عنه. متخصصون في تصنيع وتركيب اللوحات الإعلانية الخارجية 3D وحروف الأكريليك والاستانلس المضيئة، وتجهيز المعارض والمؤتمرات بأسعار تنافسية وجودة لا تُضاهى.
              </p>
              <div className={styles.heroActions}>
                <Link href="https://wa.me/966530906352" className="btn btn-primary" target="_blank">
                  <span>طلب معاينة مجانية الآن</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">
                  <span>تصفح أعمالنا السابقة</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </Link>
              </div>
            </div>
            
            <div className={styles.heroVisual}>
              <div className={styles.heroImageWrapper}>
                <img src="/hero-building.png" alt="مبنى شركة إشراق للدعاية والإعلان بالرياض" className={styles.heroImg} />
                <div className={styles.heroImageFade}></div>
              </div>
            </div>
          </div>

          {/* Overlapping Stats Box */}
          <div className={styles.statsBox}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                </div>
                <div className={styles.statInfo}>
                  <div className={styles.statNumber}>+6</div>
                  <div className={styles.statLabel}>سنوات من الخبرة والتميز</div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="16"></line><line x1="15" y1="22" x2="15" y2="16"></line><line x1="9" y1="16" x2="15" y2="16"></line><path d="M9 6h6"></path><path d="M9 10h6"></path></svg>
                </div>
                <div className={styles.statInfo}>
                  <div className={styles.statNumber}>+500</div>
                  <div className={styles.statLabel}>مشروع إعلاني ناجح</div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className={styles.statInfo}>
                  <div className={styles.statNumber}>+300</div>
                  <div className={styles.statLabel}>عميل سعيد بخدماتنا</div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <div className={styles.statInfo}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>جودة ودقة في الإنجاز</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="section-bg-alt">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutInfo}>
              <span className="section-subtitle">من نحن؟</span>
              <h2 className={styles.aboutTitle}>خبرة ورؤية متطورة في صناعة الإعلان</h2>
              <p className={styles.aboutText}>
                تم إنشاء مؤسسة إشراق للدعاية والإعلان عام 2020 م لتوفر تقنيات ورؤية متطورة في مجال الدعاية والإعلان وتصنيع اللوحات. نعمل على تلبية تطلعات كافة عملائنا بالمملكة العربية السعودية من خلال حلول إعلانية وتسويقية مبتكرة وإبداعية مناسبة لكافة القطاعات.
              </p>
              
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div className={styles.featureText}>
                    <h4>دقة التنفيذ العالية</h4>
                    <p>نعتمد على فريق مهندسين وفنيين متخصصين لضمان تسليم أعمال خالية من العيوب وبأعلى دقة في التفاصيل.</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div className={styles.featureText}>
                    <h4>الالتزام التام بالوقت</h4>
                    <p>نُقدر وقت عملائنا، ونعمل من خلال خطة زمنية واضحة ومدروسة لإتمام تركيب اللوحات وتجهيزها في أسرع وقت.</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                  <div className={styles.featureText}>
                    <h4>السعر التنافسي العادل</h4>
                    <p>نحقق لك المعادلة الصعبة: جودة فائقة بأسعار تنافسية مناسبة لميزانيتك دون أي تنازل عن كفاءة المواد الخام.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.aboutVisual}>
              <div className={styles.visualCard}>
                <span className={styles.visualYear}>+6</span>
                <h3 className={styles.visualLabel}>سنوات من التميز والإبداع</h3>
                <p className={styles.visualDesc}>
                  نفذنا مئات المشاريع الإعلانية المتميزة في جميع مناطق المملكة، معتمدين على أحدث الآلات والمعدات ورافعات وأوناش تصنيع الحروف البارزة لضمان سرعة التسليم.
                </p>
                <div style={{ marginTop: '24px' }}>
                  <Link href="/contact" className="btn btn-outline-gold">
                    <span>اطلب استشارة مجانية</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Preview Section */}
      <section id="services" className="section-bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">خدماتنا</span>
            <h2 className="section-title">حلول دعاية وإعلان متكاملة لنمو أعمالك</h2>
            <p className="section-desc">نصمم ونصنع ونركب لوحات إعلانية ومطبوعات وهويات تجارية تعكس قوة علامتك وتجذب عملائك.</p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Service 1 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>
              </div>
              <h3 className={styles.serviceName}>اللوحات الإعلانية الخارجية 3D</h3>
              <p className={styles.serviceDesc}>
                تصنيع وتركيب الحروف المجسمة والبارزة المضيئة (اكريليك، زنكور، استانلس ستيل) ولوحات الكلادينج الفاخرة للواجهات بجميع المقاسات وبإضاءة LED متطورة وموفرة للطاقة.
              </p>
              <Link href="/services#signboards" className={styles.serviceLink}>
                <span>اعرف المزيد</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className={styles.serviceName}>لوحات المكاتب والشركات الداخلية</h3>
              <p className={styles.serviceDesc}>
                لوحات استقبال فاخرة، لوحات إرشادية، لوحات زجاجية واكريليك مخصصة للمكاتب، البنوك، والمؤسسات لتضفي طابعاً راقياً ومنظماً داخل بيئة عملك.
              </p>
              <Link href="/services#indoor" className={styles.serviceLink}>
                <span>اعرف المزيد</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className={styles.serviceName}>تجهيز المعارض والمؤتمرات</h3>
              <p className={styles.serviceDesc}>
                حلول عرض متكاملة للمشاركات الفعّالة، بما في ذلك ستاندات العرض (رول أب، بوب أب، فلاج بانر) وبناء المنصات وتأثيث البوثات الدعائية بشكل يجذب الحضور.
              </p>
              <Link href="/services#exhibitions" className={styles.serviceLink}>
                <span>اعرف المزيد</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </Link>
            </div>

            {/* Service 4 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <h3 className={styles.serviceName}>تصميم الهوية البصرية والشعارات</h3>
              <p className={styles.serviceDesc}>
                بناء هوية بصرية قوية ومتكاملة لعلامتك تشمل تصميم الشعار، الألوان الرسمية، اختيار الخطوط، وتصميم المطبوعات الرسمية والمواد الإعلانية بلمسة إبداعية تناسب نشاطك.
              </p>
              <Link href="/services#branding" className={styles.serviceLink}>
                <span>اعرف المزيد</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </Link>
            </div>

            {/* Service 5 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <h3 className={styles.serviceName}>ستيكرات السيارات وتغليف المركبات</h3>
              <p className={styles.serviceDesc}>
                تحويل مركبات شركتك إلى لوحات إعلانية متنقلة عبر تصميم وطباعة وتركيب ملصقات الفينيل وتغليف السيارات كلياً أو جزئياً بخامات مقاومة للحرارة والتقشير.
              </p>
              <Link href="/services#stickers" className={styles.serviceLink}>
                <span>اعرف المزيد</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </Link>
            </div>

            {/* Service 6 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <h3 className={styles.serviceName}>الزخارف والهدايا التذكارية والدروع</h3>
              <p className={styles.serviceDesc}>
                قص وحفر ليزر دقيق على الاكريليك والجلود والجلود والاخشاب، مع تصميم وطباعة الدروع التذكارية، السيوف الفاخرة، والهدايا الدعائية لشركتك بلمسات إبداعية ممتازة.
              </p>
              <Link href="/services#printing" className={styles.serviceLink}>
                <span>اعرف المزيد</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </Link>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link href="/services" className="btn btn-outline-gold">
              <span>عرض جميع الخدمات والتفاصيل الفنية</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">أعمالنا الأخيرة</span>
            <h2 className="section-title">أعمالنا الأخيرة</h2>
            <p className="section-desc">نفتخر بتقديم أفضل الحلول الإعلانية لعملائنا في الرياض ومختلف أنحاء المملكة.</p>
          </div>
          <PortfolioSlider />
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="section-bg-dark">
        <div className="container">
          <div className={styles.clientsGrid}>
            <div className={styles.clientsInfo}>
              <span className="section-subtitle">عملاؤنا المميزون</span>
              <h2 className={styles.clientsTitle}>نفخر بثقة كبرى الشركات والعلامات التجارية</h2>
              <p className={styles.clientsText}>
                شراكتنا مع العلامات التجارية الرائدة هي وسام نعتز به. عملنا مع مختلف القطاعات الحكومية والتجارية لتقديم أفضل الحلول البصرية بالرياض والمملكة.
              </p>
            </div>
            
            <div className={styles.clientsVisual}>
              <img src="/client-logos-row.png" alt="شعارات الشركات الشريكة لشركة إشراق" className={styles.clientLogosImg} />
              <img src="/gold-trophy.png" alt="مجسم النجاح والتميز الذهبي" className={styles.goldTrophyImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-bg-alt">
        <div className="container">
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialsHeader}>
              <span className="section-subtitle">آراء العملاء</span>
              <h2 className={styles.testimonialsTitle}>ماذا يقول عملاؤنا؟</h2>
              <p className={styles.testimonialsDesc}>رضا عملائنا هو هدفنا الأول ودافعنا المستمر لتقديم أفضل الخدمات والمنتجات بجودة لا تقارن.</p>
            </div>
            
            <div className={styles.testimonialsCards}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>”</div>
                <p className={styles.testimonialText}>
                  تعامل احترافي وجودة عالية في التنفيذ والتسليم في الوقت المحدد.
                </p>
                <div className={styles.testimonialUser}>
                  <img src="/avatar-1.png" alt="صورة رمزية للعميل أ. محمد السبيعي" className={styles.testimonialAvatar} />
                  <div className={styles.testimonialUserInfo}>
                    <h4 className={styles.testimonialUserName}>أ. محمد السبيعي</h4>
                    <span className={styles.testimonialUserTitle}>شركة مقاولات</span>
                  </div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>”</div>
                <p className={styles.testimonialText}>
                  تصاميم رائعة وجودة تفوق التوقعات، أنصح بالتعامل معهم.
                </p>
                <div className={styles.testimonialUser}>
                  <img src="/avatar-2.png" alt="صورة رمزية للعميل س. عبدالله" className={styles.testimonialAvatar} />
                  <div className={styles.testimonialUserInfo}>
                    <h4 className={styles.testimonialUserName}>س. عبدالله</h4>
                    <span className={styles.testimonialUserTitle}>مدير تسويق</span>
                  </div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>”</div>
                <p className={styles.testimonialText}>
                  أفضل شركة في مجال اللوحات الإعلانية والحروف المضيئة في الرياض.
                </p>
                <div className={styles.testimonialUser}>
                  <img src="/avatar-3.png" alt="صورة رمزية للعميل فهد العتيبي" className={styles.testimonialAvatar} />
                  <div className={styles.testimonialUserInfo}>
                    <h4 className={styles.testimonialUserName}>فهد العتيبي</h4>
                    <span className={styles.testimonialUserTitle}>رائد أعمال</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quote CTA & Contact Form */}
      <section id="quote" className="section-bg-dark">
        <div className="container">
          <div className={styles.quoteGrid}>
            <div className={styles.quoteInfo}>
              <span className="section-subtitle">معاينة واستشارة مجاناً</span>
              <h3>هل لديك مشروع ترغب في تنفيذه بالرياض؟</h3>
              <p>
                نحن في شركة إشراق للدعاية والإعلان نأتي إليك أينما كنت في الرياض. نرسل فني متخصص لأخذ المقاسات الدقيقة للموقع ومعاينة الواجهة وتقديم استشارات فنية بخصوص نوع الإضاءة والمواد المناسبة مجاناً تماماً وبدون أي التزامات.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className={styles.featureIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '15px' }}>اتصال هاتفي مباشر</div>
                    <a href="tel:+966530906352" style={{ color: 'var(--accent)', fontWeight: '700', fontSize: '18px' }}>0530906352</a>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className={styles.featureIcon} style={{ color: '#25d366' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.805-9.799.002-2.592-1.01-5.029-2.852-6.874S14.008 1.1 11.414 1.1c-5.405 0-9.807 4.398-9.81 9.802-.001 1.83.479 3.59 1.391 5.172l-1.013 3.7.135-.045 4.935-1.674z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '15px' }}>مراسلة واتساب فورية</div>
                    <a href="https://wa.me/966530906352" target="_blank" style={{ color: 'var(--accent)', fontWeight: '700', fontSize: '18px' }}>اضغط للمحادثة الفورية</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.quoteFormCard}>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '24px', textAlign: 'center' }}>اطلب معاينة أو عرض سعر الآن</h3>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="section-bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">الأسئلة الشائعة</span>
            <h2 className="section-title">إجابات لجميع استفساراتك حول لوحات الإعلانات</h2>
            <p className="section-desc">جمعنا لك أكثر الأسئلة شيوعاً التي يسألها عملاؤنا قبل البدء في تصنيع اللوحات وتجهيز المواقع.</p>
          </div>
          
          <FAQAccordion />
        </div>
      </section>
    </main>
  );
}
