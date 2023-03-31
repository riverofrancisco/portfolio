import DevsL from './Images/DevsLearningLanding.png'

export const ProfileIMG: string = "https://media.licdn.com/dms/image/D4D03AQHsxi0b5XhyqA/profile-displayphoto-shrink_400_400/0/1678410505495?e=1684368000&v=beta&t=VOCGfREECuNDntEVO-w7RENHjPs45AuhpeMfznOZKtE";

export interface Skill {
    name: string,
    image: string
}

export const techSkills: Skill[] = [{
      name: "Javascript",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
    },
    {
      name: "Typescript",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
    },
    {
      name: "React",
      image: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
    },
    {
      name: "Redux",
      image: "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
    },
    {
      name: "Material UI",
      image: "https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
    },
    {
      name: "CSS",
      image: "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png"
    },
    {
      name: "HTML",
      image: "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
    },
    {
      name: "Node.js",
      image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png"
    },
    {
      name: "Express",
      image: "https://wsofter.ru/wp-content/uploads/2017/12/node-express.png"
    },
    {
      name: "PostgreSQL",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
    }
  ];
  

  export const softSkills : Skill[] = [
        {
          name: "Proactive",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-07-512.png"
        },
        {
          name: "Goal Achievement",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-06-512.png"
        },
        {
          name: "Planning and Organization",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-05-512.png"
        },
        {
          name: "Empathy",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-04-512.png"
        },
        {
          name: "Public Speaking",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-03-512.png"
        },
        {
          name: "Team Player",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-02-512.png"
        },
        {
          name: "Leadership",
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