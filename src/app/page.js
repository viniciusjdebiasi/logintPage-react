import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href='/create-account' className={styles.button_account}>CREA IL MIO ACCOUNT</Link>
        <Link href='/with-account' className={styles.button_account}>HO GIÀ UN ACCOUNT</Link>
      </div>
    </main>
  );
}