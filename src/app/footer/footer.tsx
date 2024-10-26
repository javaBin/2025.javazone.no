import Image from "next/image";
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.level}>
        <p className={`${styles.levelItem} ${styles.hasTextCentered}`}>
          <a className={`${styles.link} ${styles.isInfo}`} href="https://java.no" target="_blank" rel="noopener noreferrer">
            About JavaBin
          </a>
        </p>

        <p className={`${styles.levelItem} ${styles.hasTextCentered}`}>
          <a className={`${styles.link} ${styles.isInfo}`} href="https://java.no/principles" target="_blank" rel="noopener noreferrer">
            Code of Conduct
          </a>
        </p>

        <p className={`${styles.levelItem} ${styles.hasTextCentered}`}>
          <a className={styles.link} href="mailto:javazone@java.no">Mail</a>
        </p>

        <p className={`${styles.levelItem} ${styles.hasTextCentered}`}>
          <Image src="/logo-sharp.svg" alt="" height={48} width={48} />
        </p>

        <p className={`${styles.levelItem} ${styles.hasTextCentered}`}>
          <a className={`${styles.link} ${styles.isInfo}`} href="https://facebook.com/javazoneconference" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </p>

        <p className={`${styles.levelItem} ${styles.hasTextCentered}`}>
          <a className={`${styles.link} ${styles.isInfo}`} href="https://twitter.com/javazone" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </p>

        <p className={`${styles.levelItem} ${styles.hasTextCentered}`}>
          <a className={`${styles.link} ${styles.isInfo}`} href="https://www.linkedin.com/company/javazone" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </nav>
    </footer>
  );
}
