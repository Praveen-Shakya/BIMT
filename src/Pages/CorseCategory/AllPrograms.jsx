import React, { useState } from "react";
import "./UGPrograms-PGPrograms-EducationPrograms.css";
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

const AllPrograms = () => {
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

export default AllPrograms;
