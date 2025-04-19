import React from "react";
import './UGPrograms-PGPrograms-EducationPrograms.css';
// import Courses from "../Courses/Courses";  

const programs = [
  {
    title: "M.Sc. (H.Sc)",
    description:
      "A two-year, full-time program affiliated with Dr. A. P. J. Abdul Kalam Technical University, Lucknow.",
  },
  {
    title: "M.Com",
    description:
      "The MCA program provides advanced knowledge in software development, programming, data…",
  },
  {
    title: "M.Sc (Zoology)",
    description:
      "M.Com provides advanced knowledge in accounting, finance, economics, business law, and…",
  },
  {
    title: "M.Sc (Botany)",
    description:
      "M.Sc. in Physics provides advanced knowledge in theoretical, experimental, and applied physics,…",
  },
  {
    title: "M.Sc (Chemistry)",
    description:
      "M.Sc. in Chemistry offers in-depth knowledge in organic, inorganic, analytical, and physical,…",
  },
];

const PGPrograms = () => {
  return (
    <>
    {/* <Courses /> */}
    <div className="programs0-container">
      {programs.map((program, index) => (
        <div className="program0-card" key={index}>
          <h3 className="program0-title">{program.title}</h3>
          <p className="program0-description">{program.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default PGPrograms;
