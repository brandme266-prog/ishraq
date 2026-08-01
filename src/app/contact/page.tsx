import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "اتصل بشركة إشراق للدعاية والإعلان بالرياض | أرقام التواصل",
  description: "تواصل مع شركة إشراق بالرياض لمعاينة لوحات المحلات والواجهات مجاناً. أرقام الهاتف: 0530906352 - 0592367166. الموقع: حي ظهرة لبن، شارع ينبع.",
  keywords: ["رقم شركة دعاية واعلان الرياض", "موقع شركة اشراق بالرياض", "معاينة واجهات الرياض مجانا", "واتساب شركة اشراق للدعاية والاعلان"],
};

export default function Contact() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Contact Header */}
      <section className={styles.contactHeader}>
        <div className="container">
          <h1 className={styles.title}>اتصل بنا</h1>
          <p className={styles.desc}>
            يسعدنا تواصلكم معنا للرد على استفساراتكم أو طلب معاينة فنية مجانية لموقعكم في الرياض وباقي مدن المملكة.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-bg-dark" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Info Column */}
            <div className={styles.infoColumn}>
              <div>
                <h2 className={styles.infoTitle}>معلومات الاتصال المباشر</h2>
                <p className={styles.infoDesc}>
                  نحن نعمل طوال أيام الأسبوع عدا الجمعة لاستقبال طلباتكم، ويسعدنا دائماً زيارتكم لمقرنا أو تواصلكم الهاتفي المباشر معنا.
                </p>
                
                {/* Contact Cards Grid */}
                <div className={styles.cardsGrid}>
                  {/* Card 1: Address */}
                  <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <h3 className={styles.cardTitle}>العنوان والمقر</h3>
                    <p className={styles.cardValue}>
                      المملكة العربية السعودية، الرياض، حي ظهرة لبن، شارع ينبع
                    </p>
                    <a
                      href="https://maps.app.goo.gl/aNfcW89KQ2kk5Q8L7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      <span>عرض على الخريطة</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  </div>

                  {/* Card 2: Call */}
                  <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <h3 className={styles.cardTitle}>اتصال هاتفي</h3>
                    <p className={styles.cardValue}>
                      المبيعات الفنية للمشاريع بالرياض:<br />
                      <a href="tel:+966530906352" style={{ fontWeight: '700' }}>0530906352</a><br />
                      الدعم والإدارة الفنية:<br />
                      <a href="tel:+966592367166" style={{ fontWeight: '700' }}>0592367166</a>
                    </p>
                  </div>

                  {/* Card 3: WhatsApp */}
                  <div className={styles.card} style={{ borderColor: 'rgba(37, 211, 102, 0.2)' }}>
                    <div className={styles.iconWrapper} style={{ color: '#25d366' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.805-9.799.002-2.592-1.01-5.029-2.852-6.874S14.008 1.1 11.414 1.1c-5.405 0-9.807 4.398-9.81 9.802-.001 1.83.479 3.59 1.391 5.172l-1.013 3.7.135-.045 4.935-1.674z"/></svg>
                    </div>
                    <h3 className={styles.cardTitle}>واتساب مباشر</h3>
                    <p className={styles.cardValue}>
                      راسلنا مباشرة وسيقوم مسؤول الحسابات بالرد على استفسارك وإرسال فني المعاينة.
                    </p>
                    <a
                      href="https://wa.me/966530906352"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      style={{ color: '#25d366' }}
                    >
                      <span>راسلنا الآن</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  </div>

                  {/* Card 4: Hours */}
                  <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <h3 className={styles.cardTitle}>ساعات العمل الرسمية</h3>
                    <p className={styles.cardValue}>
                      السبت - الخميس:<br />
                      8:00 صباحاً - 1:00 مساءً<br />
                      4:00 مساءً - 9:00 مساءً<br />
                      الجمعة: عطلة أسبوعية
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Wrapper */}
              <div className={styles.mapWrapper}>
                <iframe
                  className={styles.mapIframe}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14498.483981881768!2d46.5779035!3d24.6368817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1a60cfb9024f%3A0xe54e601bb97193d5!2z2YXYpNiz2LPZhyDYpdm02LHYp9mCINmE2YTZh9mI2YrZhyDYp9mE2KrYrNin2LHZitip!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع شركة إشراق بالرياض"
                ></iframe>
              </div>
            </div>

            {/* Form Column */}
            <div className={styles.formColumn}>
              <h2 className={styles.formTitle}>أرسل رسالتك مباشرة</h2>
              <p className={styles.formSubtitle}>أدخل تفاصيل طلبك وسنقوم بالتواصل معك هاتفياً أو عبر واتساب فورياً.</p>
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
