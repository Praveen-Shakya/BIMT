import React, { useState } from "react";
import "./UGPrograms-PGPrograms-EducationPrograms.css";
// import Courses from "../Courses/Courses";

const programs = [
  {
    title: "M.Sc. (H.Sc)",
    description:
      "M.Sc(Home Science) is a 2 Years Post Graduate Programme which you can specialise in General Food and Nutrition and Human Development.",
  },
  {
    title: "M.Com",
    description:
      "M.Com. is Master of Commerce, M.Com. is a 2 years Post Graduate Level course ideal for candidate. Who wish to make a career in Banking, Financial Services and Insurance (BFSI) as well as accounting and commerce sector.",
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
      "Bachelor of Education or B.Ed. is an undergraduate program of 2 years duration. The course specifically caters to the students who are interested in pursuing a career in teaching and related fields.",
  },
  {
    title: "D.EL.Ed",
    description:
      "Diploma in Elementary Education(Approved by NCTE Delhi) Aim of program is to preparing teachers for elementary stage of Education to fulfil the basic learning needs of all children.  It is 2 years course approved by NCTE Delhi and Affiliated to SCERT Lucknow, Uttar Pradesh Government.",
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
