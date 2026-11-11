"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";
import styles from "./Demos.module.css";

const reels = [
  { id: "OWk1NIT3PuY", title: "Demo Reel 2018" },
  { id: "2NQSHHJWxD0", title: "Demo Reel 2016" },
  { id: "9wVIiiLDv34", title: "Demo Reel 2014" },
  { id: "SxGLRXrPgaI", title: 'Demo Reel "Comedia"' },
];

// Gives the YouTube embeds time to load behind the loader overlay.
const LOADER_MS = 4000;

export default function Demos() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOADER_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <div className={`${styles.demos} sticky_footer`}>
        {reels.map(({ id, title }) => (
          <div key={id}>
            <iframe src={`https://www.youtube.com/embed/${id}`} title={title} allowFullScreen />
            <h2>{title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
