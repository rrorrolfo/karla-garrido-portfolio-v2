import Image from "next/image";
import { portfolioPhotos } from "@/data/gallery";
import styles from "./Portafolio.module.css";

export default function SmallGallery() {
  return (
    <div className={styles.galleryContainer}>
      <p className={styles.year}>2019</p>
      {portfolioPhotos.map(({ id, image, alt, title }) => (
        <div className={styles.photoWrapper} key={id}>
          <Image src={image} alt={alt} title={title} />
        </div>
      ))}
    </div>
  );
}
