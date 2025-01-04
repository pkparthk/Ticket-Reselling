import styled from "styled-components";

// Main container for the projects section
export const ProjectContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  margin: 11rem 0 0 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

// Section title
export const Title = styled.h1`
  font-size: 6rem;
  color: #ffffff;
  font-family: "Catamaran", sans-serif;
  letter-spacing: 2px;
  cursor: pointer;
  text-align: center;
  margin-bottom: 3rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff3822;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

// Container for project cards
export const ProjectCardContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0;
  margin: 5rem 0 0 0;
  list-style: none;
`;

// Individual project card
export const ProjectCard = styled.li`
  background-color: #edf2f8;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  width: 20rem;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #ff3822;
  }

  @media (max-width: 768px) {
    width: 15rem;
  }
`;

// Image within project card
export const ProjectImageCard = styled.img`
  height: 18rem;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;

  @media (max-width: 768px) {
    height: 14rem;
  }
`;

// Project info container
export const ProjectInfo = styled.div`
  text-align: center;
  margin-top: 1.5rem;
`;

// Project title
export const ProjectTitle = styled.h3`
  font-size: 2.2rem;
  color: #000;
  font-family: "Catamaran", sans-serif;
  font-weight: bold;
  margin-bottom: 1rem;
`;

// Project description
export const ProjectDesc = styled.p`
  font-size: 1.4rem;
  color: #333;
  font-family: "Catamaran", sans-serif;
  line-height: 1.5;
`;

// Loader container
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50rem;

  & > div {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

// Donation section container
export const DonationContainer = styled.div`
  margin: 4rem auto 0;
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
`;

// Donation text
export const DonationText = styled.p`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-family: "Catamaran", sans-serif;
`;

// Donate button
export const DonateButton = styled.button`
  background-color: #ff3822;
  color: #fff;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e60019;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

// Modal Overlay for Donation
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Modal content container
export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  position: relative;
`;

// Close button for modal
export const CloseButton = styled.button`
  position: absolute;
  color: #333;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

