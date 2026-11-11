import { getImageProps } from "next/image";
import portadaLg from "@/assets/img/portada.jpg";
import portadaMediana from "@/assets/img/medium_portada.jpg";
import portadaMd from "@/assets/img/mobile_portada2.jpg";
import portadaSm from "@/assets/img/mobile_portada3.jpg";
import styles from "./page.module.css";

const alt = "Actriz Mexicana Karla Garrido";

// Art direction: the browser downloads only the image for the current
// breakpoint (the CRA version loaded all four and hid three with CSS).
const sources = [
  { media: "(min-width: 1024px)", image: portadaLg },
  { media: "(min-width: 650px)", image: portadaMediana },
  { media: "(min-width: 460px)", image: portadaMd },
].map(({ media, image }) => {
  const { props } = getImageProps({ src: image, alt });
  return { media, srcSet: props.srcSet ?? props.src };
});

export default function Home() {
  const { props: fallback } = getImageProps({
    src: portadaSm,
    alt,
    title: alt,
    loading: "eager",
    fetchPriority: "high",
  });

  return (
    <div className={styles.jumbotron}>
      <picture>
        {sources.map(({ media, srcSet }) => (
          <source key={media} media={media} srcSet={srcSet} />
        ))}
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
        <img {...fallback} />
      </picture>

      <div className={styles.presentationText}>
        <p>Karla Garrido</p>
        <p>Actriz</p>
      </div>
    </div>
  );
}
