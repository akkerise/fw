import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/akkerise/fw"
        target="_blank"
        rel="noopener noreferrer"
      >
        v.0.0.1
        <span className={styles.logo}>
          <img
            src="icons/icon16.png"
            alt="Logo"
            width={16}
            height={16}
          />
        </span>
      </a>
    </footer>
  );
}
