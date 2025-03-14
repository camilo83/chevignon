import type { AppProps } from "next/app";
import "../scss/global.scss";
import { useEffect, useState } from "react";
import styles from "./_app.module.scss";

export default function App({ Component, pageProps }: AppProps) {
  const [animationStage, setAnimationStage] = useState(0);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationStage(1), 1000),
      setTimeout(() => setShowSecondText(true), 2000),
      setTimeout(() => setAnimationStage(2), 4000),
      setTimeout(() => setAnimationStage(3), 7000),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  if (animationStage !== 3) {
    return (
      <div
        className={`${styles.loadingScreen} ${
          animationStage === 1 ? styles.animateText : ""
        } ${animationStage === 2 ? styles.exitText : ""}`}
      >
        <p className={styles.dreams}>El tiempo lo cambia todo…</p>
        {showSecondText && <p>Excepto lo que realmente importa.</p>}
      </div>
    );
  }

  return <Component {...pageProps} />;
}
