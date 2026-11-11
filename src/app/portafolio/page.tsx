import type { Metadata } from "next";
import Profile from "@/components/portafolio/Profile";
import SmallGallery from "@/components/portafolio/SmallGallery";
import styles from "@/components/portafolio/Portafolio.module.css";

export const metadata: Metadata = { title: "Portafolio" };

export default function PortafolioPage() {
  return (
    <div className={`${styles.container} sticky_footer`}>
      <Profile />
      <SmallGallery />
    </div>
  );
}
