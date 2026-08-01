import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Brand Column */}
        <div className={styles.colBrand}>
          <Link href="/" className={styles.logo}>
            <img
              src="/logo_white-ishraq.png"
              alt="شعار شركة إشراق للدعاية والإعلان"
              className={styles.logoImg}
            />
          </Link>
          <p className={styles.brandDesc}>
            تأسست شركة إشراق عام 2020 لتقديم تقنيات ورؤية متطورة في مجال صناعة الدعاية والإعلان واللوحات الخارجية والداخلية وتجهيز المعارض وتصميم الهوية التجارية في المملكة العربية السعودية.
          </p>
          <div className={styles.socials}>
            <a href="https://wa.me/966530906352" className={`${styles.socialLink} ${styles.whatsapp}`} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://www.snapchat.com/add/ishraqadv?share_id=2FitybtfAqw&locale=ar-EG" className={`${styles.socialLink} ${styles.snapchat}`} aria-label="Snapchat" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .024c-1.383 0-2.535.438-3.454 1.314-.92.876-1.547 2.042-1.88 3.498-.163.665-.562.999-1.197.999-.44 0-.825-.192-1.155-.578a1.218 1.218 0 0 0-.97-.478c-.28 0-.528.083-.746.25a.862.862 0 0 0-.327.697c0 .504.305.864.914 1.079.742.26 1.113.626 1.113 1.099 0 .195-.062.399-.187.61a35.8 35.8 0 0 1-1.127 1.83c-.347.53-.52 1.077-.52 1.64 0 .618.232 1.144.697 1.579.466.435 1.066.652 1.802.652.407 0 .866-.081 1.378-.244a5.05 5.05 0 0 0 2.261-1.378c.277-.282.529-.537.757-.768.1-.1.197-.152.293-.152a.41.41 0 0 1 .283.125c.348.336.782.723 1.303 1.158A6.38 6.38 0 0 0 12 15.011c1.393 0 2.593-.418 3.599-1.256.521-.435.955-.822 1.303-1.158a.41.41 0 0 1 .283-.125c.096 0 .193.052.293.152.228.231.48.486.757.768a5.05 5.05 0 0 0 2.261 1.378c.512.163.971.244 1.378.244.736 0 1.336-.217 1.802-.652.465-.435.697-.961.697-1.579 0-.563-.173-1.11-.52-1.64a35.8 35.8 0 0 1-1.127-1.83.993.993 0 0 0-.187-.61c0-.473.371-.839 1.113-1.099.609-.215.914-.575.914-1.079a.862.862 0 0 0-.327-.697 1.002 1.002 0 0 0-.746-.25c-.412 0-.735.159-.97.478-.33.386-.715.578-1.155.578-.635 0-1.034-.334-1.197-.999-.333-1.456-.96-2.622-1.88-3.498C14.535.462 13.383.024 12 .024z"/></svg>
            </a>
            <a href="https://www.instagram.com/ishraqadv/" className={`${styles.socialLink} ${styles.instagram}`} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className={styles.colLinks}>
          <h3 className={styles.title}>روابط سريعة</h3>
          <ul className={styles.list}>
            <li><Link href="/">الرئيسية</Link></li>
            <li><Link href="/services">خدماتنا</Link></li>
            <li><Link href="/portfolio">معرض أعمالنا</Link></li>
            <li><Link href="/contact">اتصل بنا</Link></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className={styles.colLinks}>
          <h3 className={styles.title}>خدماتنا المميزة</h3>
          <ul className={styles.list}>
            <li><Link href="/services#signboards">اللوحات الإعلانية الخارجية</Link></li>
            <li><Link href="/services#exhibitions">تجهيز المعارض والمؤتمرات</Link></li>
            <li><Link href="/services#branding">تصميم الهوية البصرية</Link></li>
            <li><Link href="/services#stickers">ستيكرات وتغليف سيارات</Link></li>
            <li><Link href="/services#printing">أعمال الزخارف والهدايا التذكارية</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className={styles.colContact}>
          <h3 className={styles.title}>تواصل معنا</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <a href="https://maps.app.goo.gl/aNfcW89KQ2kk5Q8L7" target="_blank" rel="noopener noreferrer">
                الرياض، حي ظهرة لبن، شارع ينبع
              </a>
            </li>
            <li className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <div className={styles.phoneGroup}>
                <a href="tel:+966530906352">0530906352</a>
                <a href="tel:+966592367166">0592367166</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>السبت - الخميس: 8ص إلى 1م ، ومن 4م إلى 9م</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>© {currentYear} شركة إشراق للدعاية والإعلان. جميع الحقوق محفوظة.</p>
          <p className={styles.credit}>بُني بكل حب للتوافق مع معايير Google للأرشفة والأداء</p>
        </div>
      </div>
    </footer>
  );
}
