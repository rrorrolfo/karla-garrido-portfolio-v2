import type { Metadata } from "next";
import styles from "./acerca.module.css";

export const metadata: Metadata = { title: "Acerca" };

export default function AcercaPage() {
  return (
    <div className={`${styles.acerca} sticky_footer`}>
      <h1>Karla Garrido</h1>

      <p>
        Actriz mexicana, licenciada en actuación, egresada de la Escuela Nacional de Arte Teatral,
        Instituto Nacional de Bellas Artes en la Ciudad de México.
      </p>

      <p>
        En cine ha colaborado en los largometrajes “Rencor Tatuado” de Julián Hernández, “Leona” de
        Isaac Cherem, “Dos veces tú” de Saló Azquenazi, en la opera prima &quot;Adrenalina&quot; de
        Omar Rouge y más de 15 cortometrajes con una nominación a mejor actriz en los premios AMCI
        del 2016.
      </p>

      <p>
        Ha trabajado en obras de teatro en el INBA, UNAM y producciones independientes con giras
        nacionales e internacionales con directores renombrados como Laura Uribe, Ricardo Ramirez
        Carnero, Mauricio Jiménez, Juan Morán, Martín Acosta, entre otros.
      </p>

      <p>
        En televisión ha participado en comerciales, unitarios y en las series “Falsos
        Falsificados”, “El chema”, “Señora Acero” y &quot;Los Minondo&quot;.
      </p>

      <p>Tiene 4 producciones audiovisuales con su productora Känoa Films.</p>
    </div>
  );
}
