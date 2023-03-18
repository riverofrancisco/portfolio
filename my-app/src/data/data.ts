export const ProfileIMG: string = "https://media.licdn.com/dms/image/D4D03AQHsxi0b5XhyqA/profile-displayphoto-shrink_400_400/0/1678410505495?e=1684368000&v=beta&t=VOCGfREECuNDntEVO-w7RENHjPs45AuhpeMfznOZKtE";

export interface Skill {
    name: string,
    image: string
}

export const techSkills: Skill[] = [{
      name: "Javascript",
      image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_icon_130510.png"
    },
    {
      name: "Typescript",
      image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_official_icon_130107.png"
    },
    {
      name: "React",
      image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_reactjs_icon_130205.png"
    },
    {
      name: "Redux",
      image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_redux_icon_130218.png"
    },
    {
      name: "Material UI",
      image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_materialui_icon_130071.png"
    },
    {
      name: "CSS",
      image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png"
    },
    {
      name: "HTML",
      image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png"
    },
    {
      name: "Node.js",
      image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png"
    },
    {
      name: "Express",
      image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_express_icon_130510.png"
    },
    {
      name: "PostgreSQL",
      image: "https://cdn.icon-icons.com/icons2/1381/PNG/512/postgresql_93897.png"
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
    degree: string, 
    timePeriod: string,
    description: any
  }

  export const myBackground : Background[] = [
    {    institution: "Henry Bootcamp",
        degree: "FullStack Developer", 
        timePeriod: "ago 2022 - mar 2023",
        description: [
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
          ]},
          {    institution: "Universidad de Buenos Aires",
          degree: "Licenciatura en Ciencias Físicas", 
          timePeriod: "jul 2018 - ago 2022",
          description: "1° año aprobado, promedio 6.86/10"},  
  ]