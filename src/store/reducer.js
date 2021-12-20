import ACTION_TYPES from "../constants/actionTypes";
import projectImages from "../constants/images";

const initialState = {
  themeName: "",
  name: "Suman Sameer",
  designation: "Full Stack Developer",
  profileSummary: `Full Stack developer with over two years of experience developing websites and web applications. My skill briefs
  cover JavaScript, Nodejs, HTML5, CSS, as well as current libraries and frameworks. Enjoys research and building innovative applications to the needs of the
  business.`,
  linkedin: "https://www.linkedin.com/in/suman-sameer-3996aa211/",
  github: "https://github.com/sumansameer",
  emailId: "sumansameer97@gmail.com",
  workExperience: [
    {
      designation: "Senior Systems Engineer",
      companyName: "Infosys Limited",
      year: "03/2020-present",
      location: "Trivandrum, India",
      details: `Worked on UI development for a dashboard for Business Administrators using React JS. Different functionalities including creating, modifying and displaying entities such as Authorities, Parents & Groups, and creation of new Admin users. Managed design, functional approach for UI delivery and worked on major severity issues. Created complex UI designs using class-based and functional components. \nTechnology Used : React JS, Redux, SASS, Styled-Components,react-bootstrap, axios`,
    },
    {
      designation: "Systems Engineer",
      companyName: "Infosys Limited",
      year: "09/2019-03/2020",
      location: "Mysore, India",
      details:
        "Worked on the design of micro-service authentication architecture for both internal and public endpoints. Created demo micro-services showcasing different functionalities in NodeJs. \nTechnology Used : NodeJS, Express, Angular, MySQL",
    },
  ],
  projects: [
    {
      projectName: "BookMyMovie",
      techStack: [
        "Angular 8",
        "Angular Material",
        "NodeJs",
        "Express",
        "MySQL",
        "Microservice Architecture",
      ],
      imageUrl: projectImages.BookMyMovie,
      description:
        "A web application created using Angular and NodeJs in microservice architecture. BookMyMovie application helps in booking movie tickets in selected theatres.",
    },
    {
      projectName: "File Upload CSV",
      techStack: ["html", "css", "Angular", "Angular Material"],
      imageUrl: projectImages.Fileupload,
      description:
        "A responsive UI for uploading CSV files from the UI and display the formatted data.",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.THEME_CHANGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
