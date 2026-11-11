import type { TrayectoriaItem } from "@/data/gallery";
import styles from "./Trayectoria.module.css";

type Props = {
  title: string;
  /** Radio group name, so only one item per accordion is open at a time. */
  group: string;
  items: TrayectoriaItem[];
};

// CSS-only accordion: each item is a radio input, and `:checked` reveals its content.
export default function Accordion({ title, group, items }: Props) {
  return (
    <div className={styles.typeContainer}>
      <p className={styles.accordionTitle}>{title}</p>
      {items.map((obra) => (
        <div className={styles.tabGroup} key={obra.id}>
          <div className={styles.tab}>
            <input id={`tab-${obra.id}`} type="radio" name={group} />
            <label htmlFor={`tab-${obra.id}`}>
              <span className={styles.plus}> + </span> {obra.title}
            </label>
            <div className={styles.tabContent}>
              {obra.description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
