import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.hasTextCentered}>
      <h1 className={styles.title}>JavaZone 2025</h1>
      <h2 className={styles.subtitle}>Conference: September 6-7, 2025</h2>
      <h2>Workshop: September 5, 2025</h2>
      <h3>Location: Oslo Spektrum, Norway</h3>
      <p>
        Click <Link href="https://2022.javazone.no/#/program">here</Link> to view the program of
        JavaZone 2022
      </p>
      <p className={styles.hasTextWeightBold}>
        NB! Want to be a partner? Click <Link href="/partners">here</Link>
      </p>
    </main>);
}
