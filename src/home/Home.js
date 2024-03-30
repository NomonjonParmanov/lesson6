import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "./header/Header";
import Position from "./position/Position";
import Blog from "../blogs/Blog";
import Footer from "../footer/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Position />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
