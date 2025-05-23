import React from "react";
import Image from "../../assets/building_2.jpg";
import "./ChairPersons-Directors-Controller.css";
import Chairperson1 from "../../assets/ChairPersons/ChairPerson3.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ChairPerson1 = () => {
  return (
    <>
    <Navbar />
    <Header />
      <div>
        <div className="hero-sec ">
          {/* Background Image */}
          <div className="hero-bg" style={{ backgroundImage: `url(${Image})` }}>
            <div className="hero-ov"></div>
          </div>

          {/* Content */}
          <div className="hero-cont">
            <h3 className="hero-tit">
             Meet Our Chairperson:-
            </h3>
            <p className="hero-name">Smt. Sudesh Ahuja</p>
          </div>
        </div>
      </div>
      <div className="chairperson-section">
        <div className="chairperson-img">
          <img src={Chairperson1} alt="" className="bg-transparent"/>
        </div>
        <div className="chairperson-content">
            <h3 className="chairperson-title">Message from Chairperson</h3>
            <h2 className="chairperson-name">Smt. Sudesh Ahuja</h2>
          <p>
            "Dear Students, Your dedication inspires us! Keep striving for excellence Remember, every challenge is an opportunity to grow. Best wishes!"
          </p>
          <br />
          <p>
            "प्रिय छात्रों, आपकी प्रतिबद्धता हमें प्रेरित करती है! उत्कृष्टता की ओर प्रयास करते रहें। याद रखें, हर चुनौती विकसित होने का एक अवसर है। शुभकामनाएँ!"
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChairPerson1;