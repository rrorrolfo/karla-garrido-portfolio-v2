"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const links = [
  { href: "/acerca", label: "Acerca" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/trayectoria", label: "Trayectoria" },
  { href: "/demos", label: "Demo Reel" },
  { href: "/galeria", label: "Galeria" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.menuButton}
        aria-label="Menú"
        aria-expanded={open}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.menuBars}
          viewBox="0 0 50 50"
          width="30px"
          height="40px"
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z " />
        </svg>
      </button>

      <ul className={`${styles.mainNav} ${open ? styles.open : ""}`}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={styles.link} onClick={() => setOpen(false)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
