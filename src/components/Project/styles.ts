import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 0;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .project {
    background: #2A2A2A;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: translateY(-5px);
    }

    .image-container {
      width: 100%;
      height: 220px;
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 4px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 4px;
    }

    .mobile-image {
      height: 100%;
      max-height: 220px;
      width: auto;
      object-fit: contain;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #FFF;
    }

    p {
      color: #CCC;
      margin-bottom: 1.5rem;
      line-height: 1.6;
      flex-grow: 1;
    }

    .project-links {
      margin-bottom: 1rem;

      a {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: #64FFDA;
        text-decoration: none;
        font-weight: 500;
        
        &:hover {
          text-decoration: underline;
        }

        img {
          width: 16px;
          height: 16px;
          margin: 0;
        }
      }
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      span {
        background: #404040;
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.875rem;
        color: #CCC;
      }
    }
  }

  @media (max-width: 768px) {
    .projects {
      grid-template-columns: 1fr;
    }
    
    .project {
      .image-container {
        height: auto;
        min-height: 220px;
        max-height: 320px; /* Taller on mobile */
      }
      
      .mobile-image {
        max-height: 300px; /* Taller for mobile devices */
        width: auto;
        height: auto;
      }
    }
  }
`;