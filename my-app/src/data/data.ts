import DevsL from './Images/DevsLearningLanding.png'
import JSlogo from './Images/JavaScript.png'
import TSlogo from './Images/Typescript.png'
import REACTlogo from './Images/React.png'
import MUIlogo from './Images/MaterialUI.png'
import REDUXlogo from './Images/Redux.png'
import CSSlogo from './Images/CSS.png'
import HTMLlogo from './Images/HTML.png'
import NODElogo from './Images/NODE.png'
import EXlogo from './Images/Express.png'


export const ProfileIMG: string = "https://media.licdn.com/dms/image/D4D03AQHsxi0b5XhyqA/profile-displayphoto-shrink_400_400/0/1678410505495?e=1690416000&v=beta&t=sn788l9IsXIQv1BLX1Gw1AQU6NgczE8cT8igHGjhNTM";

export interface Skill {
    name: string,
    image: any
}

export const techSkills: Skill[] = [{
      name: "Javascript",
      image: JSlogo
    },
    {
      name: "Typescript",
      image: TSlogo
    },
    {
      name: "React",
      image: REACTlogo
    },
    {
      name: "Redux",
      image: REDUXlogo
    },
    {
      name: "Material UI",
      image: MUIlogo
    },
    {
      name: "CSS",
      image: CSSlogo
    },
    {
      name: "HTML",
      image: HTMLlogo
    },
    {
      name: "Node.js",
      image: NODElogo
    },
    {
      name: "Express",
      image: EXlogo
    },
    {
      name: "PostgreSQL",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
    }
  ];
  

  export const softSkills : Skill[] = [
        {
          name: "Proactividad",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-07-512.png"
        },
        {
          name: "Orientación a objetivos",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-06-512.png"
        },
        {
          name: "Planificación",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-05-512.png"
        },
        {
          name: "Empatía",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-04-512.png"
        },
        {
          name: "Hablar en público",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-03-512.png"
        },
        {
          name: "Trabajo en Equipo",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-02-512.png"
        },
        {
          name: "Liderazgo",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-01-512.png"
        }
       
  ];
  

  export interface Background {
    institution: string,
    image: string,
    degree: string, 
    timePeriod: string,
    description: string,
    link: string,
  }

  const aptitudesHenry = [
    "TypeScript",
    "Node.js",
    "JavaScript",
    "React.js",
    "Redux.js",
    "Express.js",
    "Sequelize.js",
    "PostgreSQL",
    "HTML",
    "Scrum",
    "Planificación de proyectos",
    "Hablar en público",
    "Trabajo en equipo"
  ]

  export const myBackground : Background[] = [
    {    institution: "Henry Bootcamp",
         image: "https://www.soyhenry.com/_next/image?url=https%3A%2F%2Fassets.soyhenry.com%2Fhenry-landing%2Fassets%2FHenry%2Flogo-white.png&w=128&q=75",
         degree: "FullStack Developer", 
         timePeriod: "ago 2022 - mar 2023",
         description: `Experiencia en: ${aptitudesHenry.join(' | ')}.`,
         link: "https://www.soyhenry.com/"
        },
    {    institution: "Universidad de Buenos Aires",
         image: "https://exactas.uba.ar/wp-content/uploads/2022/08/logo-2022.png",
         degree: "Licenciatura en Ciencias Físicas", 
         timePeriod: "jul 2018 - ago 2022",
         description: "1° año aprobado | promedio 6.86/10",
         link: "https://exactas.uba.ar/"
        },  
  ]

  export interface Proyect {
    name: string,
    period: string,
    image: any,
    link: string,
    description: string,
    video: string
  }

  export const Proyects : Proyect[] = [
    {
      name: "Devs Learning",
      period: "ene. 2023 - mar. 2023",
      image: DevsL,
      link: "https://devs-learning-5hal.vercel.app/",
      video: "https://www.youtube.com/watch?v=ZU7n8LiP5OE&t=201s",
      description: "Junto con 7 compañeros, aplicando la metodología ágil de SCRUM, desarrollamos la plataforma responsive de venta de cursos online Devs Learning. Para el mismo utilizamos tecnologías como Typescript, React, Redux Toolkits, Material UI, PostgreSQL, Sequelize, Node, Express, Firebase, Checkbox Mercadopago, entre otras.",
    }
  
  ]