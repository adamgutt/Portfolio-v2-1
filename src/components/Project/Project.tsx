import { Container } from "./styles";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import externalLink from "../../assets/external-link.svg";
import Apply from "../../assets/apply.jpeg";
import Retail from "../../assets/retail.jpeg";
import Home from "../../assets/home.jpeg";


// Add placeholder images until you replace them
const placeholderImages = {
  mobile: "https://via.placeholder.com/350x200/2A2A2A/FFFFFF?text=Mobile+Plan+Signup",
  internet: "https://via.placeholder.com/350x200/2A2A2A/FFFFFF?text=Internet+Enrollment",
  lifeline: "https://via.placeholder.com/350x200/2A2A2A/FFFFFF?text=Lifeline+Signup",
  mobileApp: "https://via.placeholder.com/350x200/2A2A2A/FFFFFF?text=iOS+Mobile+App",
};

export function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <div data-aos="flip-left" data-aos-delay="100">
          <div className="project">
            <img src={Retail} alt="Mobile Plan Signup" />
            <h3>Mobile Plan Signup Process</h3>
            <p>A streamlined React TypeScript application for mobile plan enrollment. Features include plan comparison, user authentication, and seamless checkout process.</p>
            <div className="project-links">
              <a href="https://retail.maxsipconnects.com/" target="_blank" rel="noopener noreferrer">
                Visit Website <img src={externalLink} alt="External Link" />
              </a>
            </div>
            <div className="tech-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>Redux</span>
              <span>Material-UI</span>
            </div>
          </div>
        </div>

        <div data-aos="flip-left" data-aos-delay="200">
          <div className="project">
            <img src={Home} alt="Internet Enrollment" />
            <h3>Home Internet Enrollment</h3>
            <p>A comprehensive solution for home internet service signup, featuring address validation, service availability checking, and package customization.</p>
            <div className="project-links">
              <a href="https://home.maxsipconnects.com/" target="_blank" rel="noopener noreferrer">
                Visit Website <img src={externalLink} alt="External Link" />
              </a>
            </div>
            <div className="tech-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>Context API</span>
              <span>Styled Components</span>
            </div>
          </div>
        </div>

        <div data-aos="flip-left" data-aos-delay="300">
          <div className="project">
            <img src={Apply} alt="Lifeline Signup" />
            <h3>Lifeline Program Enrollment</h3>
            <p>An accessible application for Lifeline program enrollment, featuring eligibility verification, document upload, and application tracking.</p>
            <div className="project-links">
              <a href="https://apply.maxsipconnects.com/" target="_blank" rel="noopener noreferrer">
                Visit Website <img src={externalLink} alt="External Link" />
              </a>
            </div>
            <div className="tech-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>Form Validation</span>
              <span>API Integration</span>
            </div>
          </div>
        </div>

        <div data-aos="flip-left" data-aos-delay="400">
          <div className="project">
            <img src={placeholderImages.mobileApp} alt="iOS Mobile App" />
            <h3>iOS Mobile Application</h3>
            <p>A React Native mobile app built with TypeScript, featuring user authentication, profile management, and real-time notifications.</p>
            <div className="project-links">
              <a href="https://apps.apple.com/us/app/bettorbot/id6532621120" target="_blank" rel="noopener noreferrer">
                View in App Store <img src={externalLink} alt="External Link" />
              </a>
            </div>
            <div className="tech-stack">
              <span>React Native</span>
              <span>TypeScript</span>
              <span>iOS</span>
              <span>Redux Toolkit</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}