import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contacto/ContactForm";
import karlaSonriendo from "@/assets/img/sonriendo.jpg";
import styles from "@/components/contacto/Contacto.module.css";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <div className={`${styles.container} sticky_footer`}>
      <ContactForm />

      <div className={styles.imgWrapper}>
        <Image
          src={karlaSonriendo}
          alt="Contacto a Karla Garrido"
          title="Contacto a Karla Garrido"
          className={styles.contactImg}
        />
      </div>
    </div>
  );
}
