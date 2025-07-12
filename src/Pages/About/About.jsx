import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import {
  FaRobot,
  FaBrain,
  FaMicrochip,
  FaLaptopCode,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import Building from "../../assets/building_2.jpg";
import Image1 from "../../assets/about1.jpg";
import Image2 from "../../assets/s12.jpg";
import Image3 from "../../assets/about3.jpg";
import Image4 from "../../assets/t3.jpg";
import Image01 from "../../assets/IMG_2434.jpg";
import Image02 from "../../assets/IMG_2563.jpg";
import Image04 from "../../assets/IMG_2592.jpg";
import Image5 from "../../assets/s1.jpg";
import Image6 from "../../assets/t1.jpg";
import Image7 from "../../assets/s2.jpg";
import Image8 from "../../assets/t2.jpg";
import Image9 from "../../assets/s3.jpg";
import Image10 from "../../assets/t3.jpg";
import Image11 from "../../assets/s4.jpg";
// import Image12 from "../../assets/t4.jpg";
import Image13 from "../../assets/s5.jpg";
import Image15 from "../../assets/s9.jpg";
import Image14 from "../../assets/s6.jpg";
import Image16 from "../../assets/s7.jpg";
import Image17 from "../../assets/s8.jpg";
import Image18 from "../../assets/s10.jpg";
import Image19 from "../../assets/s11.jpg";
import Image20 from "../../assets/s12.jpg";
import Image21 from "../../assets/s13.jpg";
import Image22 from "../../assets/s14.jpg";
import Image23 from "../../assets/s15.jpg";
import Image24 from "../../assets/s16.jpg";
import Image25 from "../../assets/s12.jpg";
import Image26 from "../../assets/s9.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";

const images = [Image01, Image02, Image3,  Image04];
const studentImages = [Image5,Image6, Image7, Image8, Image9, Image10, Image11, Image21, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20, Image21, Image22, Image23, Image24, Image25, Image26];

const About = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 10);
    return () => clearInterval(interval);
  }, [isPaused]);
  // const scrollRef = useRef(null);
  // const [isPaused, setIsPaused] = useState(false);

  // useEffect(() => {
  //   if (isPaused) return;
  //   const scroll = () => {
  //     if (scrollRef.current) {
  //       scrollRef.current.scrollLeft += 1;
  //       if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
  //         scrollRef.current.scrollLeft = 0;
  //       }
  //     }
  //   };
  //   const interval = setInterval(scroll, 10);
  //   return () => clearInterval(interval);
  // }, [isPaused]);

  const features = [
    {
      icon: <FaRobot className="icon" />,
      title: "AI-Powered Learning",
      description: "Personalized learning experiences using AI algorithms",
    },
    {
      icon: <FaBrain className="icon" />,
      title: "Research Assistant",
      description: "AI tools for data analysis and research insights",
    },
    {
      icon: <FaMicrochip className="icon" />,
      title: "Campus Ecosystem",
      description: "campus management and security systems",
    },
    {
      icon: <FaLaptopCode className="icon" />,
      title: "WhatsApp Support",
      description: "24/7 learning support and career guidance",
    },
    {
      icon: <FaShieldAlt className="icon" />,
      title: " Cybersecurity",
      description: "Advanced threat detection and prevention systems",
    },
    {
      icon: <FaChartLine className="icon" />,
      title: "Career assistant",
      description: " AI-driven career guidance and job matching",
    },
  ];

  const policies = [
    {
      title: "Excellence in Education",
      description:
        "Providing a transformative and rigorous educational experience that empowers students with practical knowledge, ethical leadership skills, and a commitment to integrity.",
    },
    // {
    //   title: "Innovative Research",
    //   description:
    //     "Promoting cutting-edge research that drives sustainable development and addresses global challenges.",
    // },
    {
      title: "Ethical Leadership",
      description:
        "Cultivating a culture of ethical leadership and professional excellence that prepares students to contribute positively to society.",
    },
    {
      title: "Inclusivity and Engagement",
      description:
        "Fostering an inclusive and dynamic learning environment that supports diverse perspectives and prepares students for global challenges.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Engaging in regular evaluation and improvement of our programs and processes to maintain and enhance the quality of our academic and operational standards.",
    },
  ];

  return (
    <>
      <Navbar />
      <Header />
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            Badaun Institute Of Management & Technology
          </h2>
        </div>

        <div className="statistics-section">
          {[Image1, Image2, Image3, Image4].map((img, index) => (
            <div key={index} className="stat-card">
              <div className="stat-image">
                <img
                  src={img}
                  alt={`Statistic ${index + 1}`}
                  className="stat-img"
                  loading="lazy"
                />
              </div>
              <div className="stat-overlay"></div>
              <div className="stat-content">
                <h1 className="stat-number">
                  {["5+", "1.5K+", "1K+", "2+"][index]}
                </h1>
                <p className="stat-label">
                  {
                    [
                      "Academic Programmes",
                      "Student Network",
                      "Student Enrolled",
                      "Celebrate Festival",
                    ][index]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="overview-section">
          <div className="overview-text">
            <h2 className="section-title">Overview & History</h2>
            <p>
              Badaun Institute of Management & Technology is an institution
              established under the Shri Ram Educational Society in 2008. We
              provide quality education in multiple full-time degree courses
              like D.El.Ed, B.Ed, B.Com, B.Sc., BBA, and BCA.
            </p>
          </div>
          <div className="overview-image">
            <img
              src={Building}
              alt="College Building"
              className="building-img"
              loading="lazy"
            />
          </div>
        </div>

        <div className="vision-mission">
          <h2 className="section-title green">Vision & Mission</h2>
          <div className="vision-mission-cards">
            <div className="vision-card">
              <h3 className="card-title">Vision Statement</h3>
              <div className="card-text">
                BIMT Provides student with quality educational experiences and
                support services that lead to the successful completion of
                degrees, transfer certificates and basic skills proficiency.
                Through measurable learning out comes, ethical data driver
                decisions and student achievement.
              </div>
            </div>
            <div className="mission-card ">
              <h3 className="card-title">Mission Statement</h3>
              <ul className="mission-list">
                <li>
                  Provide a transformative educational experience that empowers
                  students with practical knowledge and ethical leadership
                  skills.
                </li>
                <li>
                  Promote cutting-edge research and innovation that drives
                  sustainable development and addresses global challenges.
                </li>
                <li>Advance knowledge and drive sustainable development.</li>
                <li>
                  Contribute to societal well-being through integrity and
                  excellence.
                </li>
                <li>
                  Cultivate an inclusive and dynamic learning environment
                  preparing students for global challenges.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ecosystem-section">
          <h2 className="ecosystem-title">Our AI-Powered Ecosystem</h2>
          <div className="features-grid ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card border hover:scale-105 hover:cursor-pointer duration-300 "
              >
                <div className="feature-icon ">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="quality-policy">
          <h2 className="quality-title">Quality Policy</h2>
          <p className="quality-desc">
            At Badaun Institute, we are committed to delivering exceptional
            educational experiences and advancing research and innovation with
            the highest standards of quality. Our quality policy is centered on:
          </p>
          <div className="policies-grid">
            {policies.map((policy, index) => (
              <div key={index} className="policy-card">
                <h3 className="policy-title">{policy.title}</h3>
                <p className="policy-description">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="campus-gallery-container">
          <h2 className="campus-gallery-title">Campus Life & Events</h2>
          <div
            ref={scrollRef}
            className="campus-gallery-scroll"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {[...studentImages, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Campus Life ${(index % studentImages.length) + 1}`}
                className="campus-gallery-img"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
