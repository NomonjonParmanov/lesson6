import React from "react";
import Navbar from "../navbar/Navbar";
import aboutImg from "../images/about.png";
import Avatar from "../avatar/Avatar";
import Footer from "../footer/Footer";
import "./about.scss";
function About() {
  return (
    <div>
      <Navbar />
      <div className="img container">
        <img className="imgs" src={aboutImg} alt="" />
        <Avatar />
        <h1>Breaking the code How did we build our Figma plugin </h1>
        <p>
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice and tone for error messages.
        </p>
        <p>
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged.
        </p>
        <p>
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice.
        </p>
        <h2>
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h2>
        <p>
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged.
        </p>
        <p>
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
