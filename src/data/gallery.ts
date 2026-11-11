import type { StaticImageData } from "next/image";

import closeupkarla from "@/assets/img/closeupkarla.jpg";
import fotoimpresion from "@/assets/img/fotoimpresion.jpg";
import blancoynegro from "@/assets/img/blancoynegro.jpg";
import completa from "@/assets/img/completa.jpg";
import hermana from "@/assets/img/galeria/18hermana.jpg";
import triciclo from "@/assets/img/galeria/16triciclo.jpg";
import suelo from "@/assets/img/galeria/1suelo.jpg";
import rodaje16 from "@/assets/img/galeria/rodaje16.jpg";
import barcos from "@/assets/img/galeria/barcos.jpg";
import rodaje1 from "@/assets/img/galeria/rodaje1.jpg";
import muros from "@/assets/img/galeria/muros.jpg";
import rodaje3 from "@/assets/img/galeria/rodaje3.jpg";

export type PortfolioPhoto = {
  id: number;
  image: StaticImageData;
  title: string;
  alt: string;
};

export type GalleryPhoto = {
  image: StaticImageData;
  title: string;
  textA: string;
  textB: string;
};

export type TrayectoriaItem = {
  id: number;
  title: string;
  description: string[];
};

export const portfolioPhotos: PortfolioPhoto[] = [
  { id: 1, image: closeupkarla, title: "Karla Garrido de frente", alt: "Karla Garrido de frente" },
  { id: 2, image: fotoimpresion, title: "Karla Garrido sonriendo", alt: "Karla Garrido sonriendo" },
  { id: 3, image: blancoynegro, title: "Karla Garrido cara lavada", alt: "Karla Garrido cara lavada" },
  { id: 4, image: completa, title: "Karla Garrido cuerpo completo", alt: "Karla Garrido cuerpo completo" },
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    image: hermana,
    title: "Mucho ruido y pocas nueces de William Shakespeare",
    textA: "Dirección: Juan Mora (2011)",
    textB: "Teatro: Julio Castillo",
  },
  {
    image: triciclo,
    title: "El Maleficio",
    textA: "Dirección: Alexia Ávila (2012)",
    textB: "Foro: Antonio López Mancera",
  },
  {
    image: suelo,
    title: "Versus",
    textA: "Unipersonal - Septiembre 2016",
    textB: "Foro: Carretera 45",
  },
  {
    image: rodaje16,
    title: "Juan Machete",
    textA: "Paria (2015)",
    textB: "",
  },
  {
    image: barcos,
    title: "Los Barcos",
    textA: "Videoclip de Adryana Marroquín (2016)",
    textB: "",
  },
  {
    image: rodaje1,
    title: "Sueños",
    textA: "48 FilmFest (2015)",
    textB: "",
  },
  {
    image: muros,
    title: "Señora Acero 3",
    textA: "Telemundo (2016)",
    textB: "",
  },
  {
    image: rodaje3,
    title: "Chalma",
    textA: "Bala Films (2015)",
    textB: "",
  },
];

export const trayectoriaCine: TrayectoriaItem[] = [
  {
    "id": 20,
    "title": "'Leona' - Largometraje",
    "description": [
      "Personaje: Karen.",
      "Dirección: Isaac Cherem.",
      "Producción: Fosforescente, 2018."
    ]
  },
  {
    "id": 21,
    "title": "'Bolero' - Cortometraje",
    "description": [
      "Personaje: Carmen.",
      "Dirección: Simone Carnesecchi.",
      "Producción: Italia/México, 2017."
    ]
  },
  {
    "id": 22,
    "title": "'Rencor Tatuado' - Largometraje",
    "description": [
      "Personaje: Presa.",
      "Dirección: Julián Hernández",
      "Producción: Roberto Fiesco, 2017."
    ]
  },
  {
    "id": 23,
    "title": "'Dos Veces Tú' - Largometraje",
    "description": [
      "Personaje: Melissa.",
      "Dirección: Saló Arkenazi.",
      "Producción: Fosforescente, 2016."
    ]
  },
  {
    "id": 24,
    "title": "'Chalma' - Mediometraje",
    "description": [
      "Personaje: Natalia.",
      "Dirección: Miguel Ángel Fernandez.",
      "Producción: Bala Films, 2016."
    ]
  },
  {
    "id": 25,
    "title": "'Juan Machete' - Cortometraje",
    "description": [
      "Personaje: Ana.",
      "Dirección: Danny Chamo Serrano.",
      "Producción: Paria Films, 2016.",
      "Nominada a MEJOR ACTRÍZ en los premios AMCI del 2016."
    ]
  }
];

export const trayectoriaTelevision: TrayectoriaItem[] = [
  {
    "id": 10,
    "title": "'Un golpe al corazón' - Unitario, Capítulo 1263",
    "description": [
      "Personaje: Lucía.",
      "Televisora: Televisa, 2019."
    ]
  },
  {
    "id": 11,
    "title": "'Falsos Falsificados' - Teleserie",
    "description": [
      "Personaje: Lupe.",
      "Televisora: Blim, 2017."
    ]
  },
  {
    "id": 12,
    "title": "'Señora Acero 3' - Teleserie",
    "description": [
      "Personaje: La Mexicana.",
      "Televisora: Telemundo, 2016."
    ]
  },
  {
    "id": 13,
    "title": "'Los Minondo' - Serie",
    "description": [
      "Personaje: Cecilia.",
      "Televisora: Canal 11, 2010."
    ]
  }
];

export const trayectoriaTeatro: TrayectoriaItem[] = [
  {
    "id": 1,
    "title": "Mare Nostrum",
    "description": [
      "Autor: Angelica Lidell.",
      "Dirección: Laura Uribe.",
      "Festival Politik im Freien Theater en Munich, Alemania, 2018.",
      "Festival Theaterformer, en Hannover, Alemania, 2017."
    ]
  },
  {
    "id": 2,
    "title": "Matrimonio Palabrakis",
    "description": [
      "Autor: Angelida Lidell.",
      "Dirección: Laura Uribe.",
      "Festival de Teatro Internacional en Manizales, Colombia, 2017."
    ]
  },
  {
    "id": 3,
    "title": "Versus",
    "description": [
      "Autor: Unipersonal.",
      "Dirección: Karla Garrido",
      "Dentro de la Primera Invasión Escénica en el Hostal Regina, 2017."
    ]
  },
  {
    "id": 4,
    "title": "Oasis Actors",
    "description": [
      "Dirección: Joan Gracia y Enric Ases. Compañia 'El Tricicle'.",
      "Miembro de la compañía de Teatro del Hotel Grand Oasis, Cancún, especializada en improvisación  y comedia. Barcelona/Cancún, México, 2014 - 2013."
    ]
  },
  {
    "id": 5,
    "title": "Las Tres Hermanas",
    "description": [
      "Autor: Anton Chejov",
      "Dirección: Martin Acosta.",
      "2019."
    ]
  }
];
