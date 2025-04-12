import React from "react";
import "./Courses.css";
import { FaUserGraduate, FaUsers, FaIndustry } from "react-icons/fa";
import Image from "../../assets/building_2.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const programsData = [
  {
    id: 1,
    title: "Undergraduate Programmes",
    icon: "🎓",
    courses: ["Business Administration", "Engineering", "Design"],
  },
  {
    id: 2,
    title: "Postgraduate Programmes",
    icon: "📖",
    courses: ["Business Administration", "Engineering", "Design"],
  },
  {
    id: 3,
    title: "Enginnering Programmes",
    icon: "🏅",
    courses: ["Economics", "Engineering & Technology", "Sciences"],
  },
];

const Courses = () => {
  return (
    <div className="courses">
      <Navbar />
      <Header />

      <div className="hero-section ">
        {/* Background Image */}
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${Image})` }}
        >
          <div className="hero-overlay"></div>
        </div>

        {/* Content */}
        <div className="hero-content">
          <h1 className="hero-title">Shape Your Future</h1>
          <p className="hero-subtitle">
            Discover 90+ programs across our world-class faculties
          </p>

          {/* Stats Section */}
          <div className="stats-container">
            <div className="stat-box">
              <FaUserGraduate className="stat-icon" />
              <div>
                <p className="stat-number">50+</p>
                <p className="stat-label">Experts</p>
              </div>
            </div>
            <div className="stat-box">
              <FaUsers className="stat-icon" />
              <div>
                <p className="stat-number">15,000+</p>
                <p className="stat-label">Students Enrolled</p>
              </div>
            </div>
            <div className="stat-box">
              <FaIndustry className="stat-icon" />
              <div>
                <p className="stat-number">50+</p>
                <p className="stat-label">Industry Collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="academicPrograms">
        <section className="academic-section">
          <h2 className="title">Academic Programs</h2>
          <p className="description">
            Explore our diverse range of academic offerings designed to shape
            future leaders
          </p>
        </section>

        {/* Program Blogs */}

        <div className="programs-container">
          {programsData.map((program) => (
            <div key={program.id} className="program-card">
              <div className="icon">{program.icon}</div>
              <h3 className="program-title">{program.title}</h3>
              <ul className="program-list">
                {program.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
              <a href="#" className="explore-link">
                Explore Programs →
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
