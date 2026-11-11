import type { Metadata } from "next";
import Image from "next/image";
import { galleryPhotos } from "@/data/gallery";
import styles from "./galeria.module.css";

export const metadata: Metadata = { title: "Galería" };

export default function GaleriaPage() {
  return (
    <div className={styles.galeria}>
      <h1>Galeria de fotos</h1>

      <div className={styles.galleryContainer}>
        {galleryPhotos.map(({ image, title, textA, textB }) => (
          <div className={styles.photoContainer} key={title}>
            <div className={styles.foto}>
              <Image src={image} alt="Foto de galeria" />
              <div className={styles.overlay}>
                <h3>{title}</h3>
                <p>
                  {textA} <br />
                  {textB}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
