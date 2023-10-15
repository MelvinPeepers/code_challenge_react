import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const profileDev = [
  {
    avatar: "avatar/avatar.jpg",
    name: "Jonas Schmedtmann",
    description:
      "Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the Beach.",
  },
];

console.log(profileDev);

function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="avatar/avatar.jpg" alt="Jonas Schmedtmann" />
  );
}

function Intro() {
  return (
    <header className="data">
      <Bio
        name="Jonas Schmedtmann"
        description="Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the Beach."
      />
    </header>
  );
}

function Bio(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML/CSS" emoji="💪" color="#e7291f" />
      <Skill skill="React" emoji="💪" color="#2c79b7" />
      <Skill skill="JavaScript" emoji="👍" color="#e58911" />
      <Skill skill="Node.js" emoji="👍" color="#a435f0" />
      <Skill skill="Python" emoji="👍" color="#41b983" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Finished code from Instructor

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./styles.css";

// const skills = [
//   {
//     skill: "HTML+CSS",
//     level: "advanced",
//     color: "#2662EA"
//   },
//   {
//     skill: "JavaScript",
//     level: "advanced",
//     color: "#EFD81D"
//   },
//   {
//     skill: "Web Design",
//     level: "advanced",
//     color: "#C3DCAF"
//   },
//   {
//     skill: "Git and GitHub",
//     level: "intermediate",
//     color: "#E84F33"
//   },
//   {
//     skill: "React",
//     level: "advanced",
//     color: "#60DAFB"
//   },
//   {
//     skill: "Svelte",
//     level: "beginner",
//     color: "#FF3B00"
//   }
// ];

// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Intro />
//         {/* Should contain one Skill component
//         for each web dev skill that you have,
//         customized with props */}
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// function Avatar() {
//   return <img className="avatar" src="jonas.jpeg" alt="Jonas Schmedtmann" />;
// }

// function Intro() {
//   return (
//     <div>
//       <h1>Jonas Schmedtmann</h1>
//       <p>
//         Full-stack web developer and teacher at Udemy. When not coding or
//         preparing a course, I like to play board games, to cook (and eat), or to
//         just enjoy the Portuguese sun at the beach.
//       </p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       {skills.map((skill) => (
//         <Skill skill={skill.skill} color={skill.color} level={skill.level} />
//       ))}
//     </div>
//   );
// }

// function Skill({ skill, color, level }) {
//   return (
//     <div className="skill" style={{ backgroundColor: color }}>
//       <span>{skill}</span>
//       <span>
//         {level === "beginner" && "👶"}
//         {level === "intermediate" && "👍"}
//         {level === "advanced" && "💪"}
//       </span>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
