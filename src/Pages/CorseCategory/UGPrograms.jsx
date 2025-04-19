import React, { useState } from "react";
import './UGPrograms-PGPrograms-EducationPrograms.css';
// import Courses from "../Courses/Courses";  

const programs = [
  {
    title: "BBA",
    description:
      "Full time 3 Years Degree Affiliated to MJP Rohilkhand University, Bareilly divided into 6 Semesters.",
  },
  {
    title: "BCA",
    description:
      "Full time 3 Years Degree Affiliated to MJP Rohilkhand University, Bareilly divided into 6 Semesters.",
  },
  {
    title: "B.Sc (H.Sc)",
    description:
      "B.Sc In Home Science is a three years full time undergraduate program. Theoritical Projects in each subject...",
  },
  {
    title: "B.Com(H)",
    description:
      "B.Com (Honours) Full time 3 Years Degree Course Affiliated to MJP Rohilkhand University, Bareilly...",
  },
  {
    title: "B.Com(R)",
    description:
      "Full time 3 Years Degree Affiliated to MJP Rohilkhand University, Bareilly divided into 6 Semesters...",
  },
  {
    title: "B.Sc. (ZBC)",
    description:
      "Full time 3 Years Degree Affiliated to MJP Rohilkhand University, Bareilly divided into 6 Semesters.",
  },
  {
    title: "B.Sc. (PCM)",
    description:
      "Full time 3 Years Degree Affiliated to MJP Rohilkhand University, Bareilly divided into 6 Semesters.",
  },
];

const UGPrograms = () => {
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

export default UGPrograms;
