import React from "react";
import './UGPrograms-PGPrograms-EducationPrograms.css';
// import Courses from "../Courses/Courses";  

const programs = [
  {
    title: "B.Ed",
    description:
      "A two-year, full-time program affiliated with Dr. A. P. J. Abdul Kalam Technical University, Lucknow.",
  },
  {
    title: "D.EL.Ed",
    description:
      "The MCA program provides advanced knowledge in software development, programming, data…",
  },
];

const Education = () => {
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

export default Education;
