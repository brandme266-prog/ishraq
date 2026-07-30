import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966530906352"
      className={styles.floatButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
    >
      <div className={styles.pulse}></div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={styles.whatsappIcon}
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.805-9.799.002-2.592-1.01-5.029-2.852-6.874S14.008 1.1 11.414 1.1c-5.405 0-9.807 4.398-9.81 9.802-.001 1.83.479 3.59 1.391 5.172l-1.013 3.7.135-.045 4.935-1.674z" />
      </svg>
    </a>
  );
}
