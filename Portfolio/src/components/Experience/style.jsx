import styled from "styled-components";

// Main container for the Experience section
export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column; // Stacks experience items vertically
  align-items: center; // Centers content horizontally
  justify-content: center; // Centers content vertically
  padding: 5rem 2rem; // Adds padding around the section
  min-height: 100vh; // Ensures the section takes full height
  margin-top: -2rem; // Adds margin at the top to separate from header
  margin-bottom: 0rem; // Adds margin at the bottom for spacing

  @media (max-width: 768px) {
    padding: 3rem 1rem; // Adjust padding for smaller screens
  }
`;

// Title for the Experience section
export const ExperienceTitle = styled.h1`
  font-size: 6rem; // Large title size
  color: white; // White color for the title
  font-family: "Oswald", sans-serif; // Oswald font
  font-weight: bold; // Bold font weight
  letter-spacing: 2px; // Slight letter spacing
  margin-top: 10rem; // Adds margin to the top for spacing

  &:hover {
    color: #ff3822; /* Hover color change */
  }

  @media (max-width: 1200px) {
    font-size: 5rem; // Adjust title size for medium screens
  }

  @media (max-width: 768px) {
    font-size: 2.5rem; // Adjust title size for mobile screens
    text-align: center; // Centers the title on smaller screens
  }
`;

// Container for each individual experience item
export const Experience = styled.div`
  display: flex;
  flex-direction: column; // Stacks the content vertically
  row-gap: 1rem; // Adds space between items
  margin-top: 3rem; // Adds margin at the top to separate experience items
  width: 100%; // Ensures it takes full width

  @media (max-width: 768px) {
    align-items: center; // Centers content for smaller screens
  }
`;

// Experience heading (job title or role)
export const ExperienceHeading = styled.h2`
  color: #3ccf91; // Green color for job titles
  font-weight: bold; // Bold font weight
  font-size: 2rem; // Standard font size
  text-transform: capitalize; // Capitalizes each word for emphasis
  text-align: center; // Ensures the heading is centered horizontally

  @media (max-width: 768px) {
    font-size: 1.8rem; // Adjust font size for smaller screens
  }
`;

// Company or institution name text
export const ExperienceText = styled.p`
  font-size: 1.6rem; // Standard text size
  color: #8f9094; // Light gray color
  text-align: center; // Centers the text horizontally

  @media (max-width: 768px) {
    font-size: 1.4rem; // Slightly smaller text on mobile
  }
`;

// Date range or duration of the experience
export const ExperienceText2 = styled(ExperienceText)`
  font-size: 1.2rem; // Smaller font size for the date range
  text-align: center; // Centers the text for mobile screens
  color: #b0b3b8; // Light gray color for date range text

  @media (max-width: 768px) {
    font-size: 1rem; // Adjust font size for mobile screens
  }
`;
