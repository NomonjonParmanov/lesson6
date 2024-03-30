import React from "react";
import "./careers.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Banner from "./banner/Banner";
import Form from "./Form";
function Careers() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="test">
          <h1>Testing Engineer</h1>
          <div className="job">
            <div className="left">
              <h3>Job Discription</h3>
              <p>
                Remote, India , 4 to 5 Years Of Experience Department: Website
                Design 5 Positions Available.
              </p>
            </div>
            <div className="right">
              <h3>Salary</h3>
              <p>$30000 Per Anum </p>
            </div>
          </div>
        </div>
        <Banner />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default Careers;
