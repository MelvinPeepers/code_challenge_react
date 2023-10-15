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
