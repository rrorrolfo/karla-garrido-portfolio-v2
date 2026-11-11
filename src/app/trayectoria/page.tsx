import type { Metadata } from "next";
import Accordion from "@/components/trayectoria/Accordion";
import { trayectoriaCine, trayectoriaTeatro, trayectoriaTelevision } from "@/data/gallery";
import styles from "@/components/trayectoria/Trayectoria.module.css";

export const metadata: Metadata = { title: "Trayectoria" };

export default function TrayectoriaPage() {
  return (
    <div className={`${styles.container} sticky_footer`}>
      <Accordion title="Trayectoria en Cine" group="cine" items={trayectoriaCine} />
      <Accordion title="Trayectoria en Televisión" group="television" items={trayectoriaTelevision} />
      <Accordion title="Trayectoria en Teatro" group="teatro" items={trayectoriaTeatro} />
    </div>
  );
}
