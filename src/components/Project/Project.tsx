import { Container } from "./styles";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <div data-aos="flip-left">
          <div className="project">
          </div>
        </div>

        <div data-aos="flip-left">
          <div className="project">
          </div>
        </div>

        <div data-aos="flip-left">
          <div className="project">
          </div>
        </div>

        <div data-aos="flip-left">
          <div className="project">
          </div>
        </div>

        <div data-aos="flip-left">
          <div className="project">
          </div>
        </div>
      </div>
    </Container>
  );
}