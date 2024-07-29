import Image from "next/image";
import styles from "./page.module.css";
import RandomBackground from "./randomBackground.js"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h2>
          Random BackGround Changer <span>-&gt;</span>
        </h2>
        <div className={styles.description}>
          Click on the button to change the background color.
        </div>
      </div>
      <RandomBackground />
      <footer className={styles.footer}>
        <a
          href="https://www.github.com/celes-sb"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Made by Celeste S. Bareiro
        </a>
      </footer>
    </main>
  );
}
