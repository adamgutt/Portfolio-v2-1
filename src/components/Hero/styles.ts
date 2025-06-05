import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--blue);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
    background-color: #3CC2FA;
    font-weight: 700;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 15%;
    .hero-text{
      & > p{
        font-size: 1.5rem;
      }
      h1{
        font-size: 4rem;
      }
      h3{
        font-size: 1.6rem;
      }
    }
  }
  @media(max-width: 480px){
    margin-top: 15%;
    .hero-text{
      & > p{
        font-size: 1.4rem;
      }
      h1{
        font-size: 3.5rem;
      }
    }
  }
`