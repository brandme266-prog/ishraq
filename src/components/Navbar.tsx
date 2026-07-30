'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
  };

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'أعمالنا', path: '/portfolio' },
    { name: 'من نحن', path: '/#about' },
    { name: 'المدونة', path: '/#blog' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img
            src={theme === 'dark' ? '/logo_white-ishraq.png' : '/logo_dark-ishraq.png'}
            alt="شعار شركة إشراق للدعاية والإعلان"
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop Links */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Theme Toggle & CTA Button */}
        <div className={styles.headerActionsGroup}>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="تغيير المظهر"
          >
            {theme === 'light' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            )}
          </button>
          <div className={styles.headerCta}>
            <Link href="https://wa.me/966530906352" className="btn btn-primary" target="_blank">
              <span>طلب معاينة مجانية</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.menuToggle} ${isOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.showMenu : ''}`}>
        <ul className={styles.mobileNavList}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li className={styles.mobileThemeToggleLi}>
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className={styles.mobileThemeToggle}
              aria-label="تغيير المظهر"
            >
              <span>تغيير المظهر إلى {theme === 'light' ? 'الداكن' : 'الفاتح'}</span>
              {theme === 'light' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              )}
            </button>
          </li>
          <li className={styles.mobileCtaLi}>
            <Link
              href="https://wa.me/966530906352"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => setIsOpen(false)}
              target="_blank"
            >
              <span>اتصل بنا الآن</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
