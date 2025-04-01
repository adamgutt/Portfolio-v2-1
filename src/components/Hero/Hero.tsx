import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="home">
      <div className="hero-text">
        <div data-aos="fade-up">
          <p>Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <h1>Adam Guttman</h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="small-resume">Full Stack Developer</h3>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <p className="small-resume"></p>
        </div>

        <div data-aos="fade-up" data-aos-delay="800">
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </div>

        <div data-aos="fade-up" data-aos-delay="1000">
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/adamguttman/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/adamgutt"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div data-aos="fade-right" data-aos-delay="1000">
          <img src={Illustration} alt="Ilustração" />
        </div>
      </div>
    </Container>
  )
}