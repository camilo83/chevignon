import { Fade } from "react-awesome-reveal";
import styles from "./home.module.scss";
import { useRef, useEffect, useState } from "react";

export default function HomePage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error al reproducir el audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.videoContainer}>
      <audio ref={audioRef} src="/audio.mp3" loop />

      <button onClick={toggleMusic} className={styles.playButton}>
        {isPlaying ? "⏸ Pausar Música" : "▶ Reproducir Música"}
      </button>

      <video
        src="/video1.mp4"
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "auto" }}
      >
        Tu navegador no soporta el elemento video.
      </video>

      <video
        src="/video2.mp4"
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "auto" }}
      >
        Tu navegador no soporta el elemento video.
      </video>

      <video
        src="/video3.mp4"
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "auto" }}
      >
        Tu navegador no soporta el elemento video.
      </video>

      <video
        src="/video4.mp4"
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "auto" }}
      >
        Tu navegador no soporta el elemento video.
      </video>

      <video
        src="/video5.mp4"
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "auto" }}
      >
        Tu navegador no soporta el elemento video.
      </video>

      <video
        src="/video6.mp4"
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "auto" }}
      >
        Tu navegador no soporta el elemento video.
      </video>

      <video
        src="/video7.mp4"
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "auto" }}
      >
        Tu navegador no soporta el elemento video.
      </video>
    </div>
  );
}
