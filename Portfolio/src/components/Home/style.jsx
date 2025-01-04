import styled from "styled-components";

// Container for the home section
export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  margin-bottom: -20rem;
  position: relative; // To ensure proper positioning of child elements
  overflow: hidden; // Ensure no overflow happens in the container

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin-bottom: -45rem; // Adjust margin for smaller screens
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem; // Even more padding for very small screens
  }
`;

// Main content area
export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  width: 100%;
  z-index: 1;
  text-align: center; // Default text alignment
  max-width: 600px; // Set a max-width to avoid stretching

  @media (max-width: 768px) {
    width: 100%; // Adjust width for smaller screens
    margin-top: 30rem; // Adjust margin for smaller screens
  }

  @media (max-width: 480px) {
    width: 100%; // Make sure content fills the screen for smaller screens
    margin-top: 30rem; // Adjust margin for smaller screens
  }
`;

// Name text styling
export const Name = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: rgb(10, 205, 124);
  text-align: center;
  letter-spacing: 2px;
  font-family: "Londrina Shadow";
  margin-bottom: 1rem;
  word-wrap: break-word; // Ensures text wraps properly on smaller screens

  @media (max-width: 600px) {
    font-size: 3rem;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem; // Decrease font size for very small screens
  }
`;

// Skill text styling
export const SkillText = styled.h2`
  font-size: 1.5rem;
  color: rgb(212, 233, 224);
  text-align: center;
  font-family: "Londrina Shadow";
  letter-spacing: 2px;
  margin: 20px 0;
  padding: 10px;
  word-wrap: break-word; // Ensures text wraps properly on smaller screens
  margin-top: -1rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; // Adjust font size further on very small screens
  }
`;

// About text styling
export const AboutText = styled.h2`
  color: rgb(83, 187, 144);
  font-size: 3rem;
  text-align: center;
  letter-spacing: 2px;
  font-family: "Londrina Shadow";
  word-wrap: break-word; // Ensure text doesn't overflow

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem; // Smaller font size on small screens
  }
`;

// Image container styling
export const ImageContainer = styled.div`
  width: 25%;
  position: absolute;
  right: 16%;
  z-index: 0;
  max-width: 300px; // Set a maximum width to avoid oversized images

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 20%;
    border: 3px solid #3ccf91;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

    @media (max-width: 600px) {
      width: 80%;
      margin-top: 10rem; // Adjust margin for smaller screens
      margin-right: 100rem; // Remove right margin for smaller screens
      margin-left: -9rem; // Remove left margin for smaller screens
    }

    @media (min-width: 600px) and (max-width: 1000px) {
      width: 80%;
      margin-top: 10rem; // Adjust margin for smaller screens
      margin-right: 100rem; // Remove right margin for smaller screens
      margin-left: -9rem; // Remove left margin for smaller screens
    }

    @media (max-width: 480px) {
      width: 80%; // Ensure image is appropriately sized on very small screens
      margin-top: 10rem; // Adjust margin for smaller screens
      margin-right: 100rem; // Remove right margin for smaller screens
      margin-left: -9rem; // Remove left margin for smaller screens
    }
  }
`;

// Main container for home section
export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  flex-wrap: wrap; // Allow content to wrap on smaller screens

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center; // Center text for small screens
  }
`;

// Contact links container styling
export const ContactLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  flex-wrap: wrap; // Allow wrapping on smaller screens

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem; // Adjust gap for smaller screens
  }

  @media (max-width: 480px) {
    gap: 0.5rem; // Even smaller gap on tiny screens
  }
`;

export const ContactLink = styled.a`
  display: inline-block;
  text-align: center;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const SubText = styled.p`
  color: #ffffff;
  font-size: 2rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; // Even smaller on tiny screens
  }

  &:hover {
    color: #3ccf91;
  }
`;

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-top: 3rem;
`;

export const ResumeButton = styled.button`
  background-color: ${(props) => (props.darkMode ? "#3ccf91" : "#4CAF50")};
  color: ${(props) => (props.darkMode ? "#222" : "white")};
  font-size: 1.8rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  display: block;
  margin: auto;

  &:hover {
    background-color: ${(props) => (props.darkMode ? "#ff6347" : "#45a049")};
    transform: translateY(-3px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; // Adjust button size for smaller screens
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; // Further reduce size for very small screens
    padding: 0.7rem 1rem;
  }
`;
