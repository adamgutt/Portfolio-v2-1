import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.png";
import wordpress from "../../assets/wordpress.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="about">
      <div className="about-text">
        <div data-aos="fade-left">
          <h2>About me</h2>
        </div>
        <div data-aos="fade-left" data-aos-delay="100">
          <p>
            Hi there! I'm Adam, a website developer with a passion for creating custom online experiences for my clients. With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-delay="200" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            But my services go beyond just custom development - I'm also proficient in using CMS systems like WordPress, making it easy for my clients to take control of their own websites and keep them up to date.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-delay="300">
          <p>
            So if you're in need of a new website or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your website dreams to reality together!
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="400">
          <h3>Here are my main skills:</h3>
        </div>
        <div className="hard-skills">
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="100">
              <img src={wordpress} alt="Wordpress" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="130">
              <img src={reactIcon} alt="React" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="140">
              <img src={typescriptIcon} alt="Typescript" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="160">
              <img src={nodeIcon} alt="Node" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="170">
              <img src={htmlIcon} alt="Html" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="180">
              <img src={cssIcon} alt="Css" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="190">
              <img src={boostrapIcon} alt="Bootstrap" />
            </div>
          </div>
          <div className="hability">
            <div data-aos="fade-up" data-aos-delay="190">
              <img src={jsIcon} alt="JavaScript" />
            </div>
          </div>
        </div>
      </div>
      <div className="about-image">
        <div data-aos="fade-right" data-aos-delay="200">
          <img src={VinayakSingh} alt="Vinayak Singh" />
        </div>
      </div>
    </Container>
  )
}