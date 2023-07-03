import DevsL from './Images/DevsLearningLanding.png'
import PIH from './Images/PIHome.png'
import JSlogo from './Images/JavaScript.png'
import TSlogo from './Images/Typescript.png'
import REACTlogo from './Images/React.png'
import MUIlogo from './Images/MaterialUI.png'
import REDUXlogo from './Images/Redux.png'
import CSSlogo from './Images/CSS.png'
import HTMLlogo from './Images/HTML.png'
import NODElogo from './Images/NODE.png'
import EXlogo from './Images/Express.png'

export const navItems = [
  "Home",
  "Proyects",
  "Skills",
  "Background",
  "Contact",
];


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
          name: "Proactive",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-07-512.png"
        },
        {
          name: "Goal Achievement",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-06-512.png"
        },
        {
          name: "Planning",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-05-512.png"
        },
        {
          name: "Empathy",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-04-512.png"
        },
        {
          name: "Public speaking",
          image: "https://cdn4.iconfinder.com/data/icons/softskill-flat/64/softskills-03-512.png"
        },
        {
          name: "Team player",
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
         timePeriod: "aug 2022 - mar 2023",
         description: `Experience in: ${aptitudesHenry.join(' | ')}.`,
         link: "https://www.soyhenry.com/"
        },
    {    institution: "University of Buenos Aires",
         image: "https://exactas.uba.ar/wp-content/uploads/2022/08/logo-2022.png",
         degree: "Degree in Physics", 
         timePeriod: "aug 2020 - jul 2022",
         description: "1st year approved. Average mark 6,86/10.",
         link: "https://exactas.uba.ar/"
        },  
    {    institution: "University Language Center",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3b6TmK31Nyrn7nvbDRMEV5nlqqyN4qVAjgKa24z_rSueuUVfLCbf_SO6rLIcMaDziCH4&usqp=CAU",
        degree: "English", 
        timePeriod: "since 2019",
        description: "Level Equivalent to C1.",
        link: "https://cui.edu.ar/"
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
      period: "jan. 2023 - mar. 2023",
      image: DevsL,
      link: "https://devs-learning-5hal.vercel.app/",
      video: "https://www.youtube.com/watch?v=ZU7n8LiP5OE&t=201s",
      description: 'In a group of 7 colleagues, applying the agile methodology SCRUM, we developed a responsive platform for selling online courses which we called "Devs Learning". For it we use technologies such as Typescript, React, Redux Toolkits, Material UI, PostgreSQL, Sequelize, Node, Express, Firebase, Checkbox Mercadopago, among others.',
    },
    {
      name: "Food App",
      period: "dec. 2022",
      image: PIH,
      link: "https://food-individualproyect.vercel.app/",
      video: "https://www.youtube.com/watch?v=Du9Dp3LO-Vk",
      description: "Application that shows, filters, searches and orders a catalog of recipes. I used Javascript, React, Redux, HTML and CSS for the front-end; and Node, Express, Sequelize and PostgreSQL for the back-end and database..",
    }
  
  ]