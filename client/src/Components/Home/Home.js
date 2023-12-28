import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { myCv } from "./resume.pdf";
const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="container home-content">
        <h1>Hii I'm</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                "Full Stack Software Developer",
                "MERN Stack Developer",
                "Web Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </h3>
        <div className="button-for-action">
          <div className="hire-me-button">Hire Me</div>
          <div className="get-resume-button">
            <a href={myCv} download="sai-krishna.pdf">
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
