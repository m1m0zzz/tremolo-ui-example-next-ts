import Image from "next/image";
import styles from "./page.module.css";
import { Components } from "./Components";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <a href="https://nextjs.org/" target="_blank">
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </a>
        <h1>Next.js + <a href="https://tremolo-ui.vercel.app/" target="_blank">tremolo-ui</a></h1>
        <Components />
      </main>
    </div>
  );
}
