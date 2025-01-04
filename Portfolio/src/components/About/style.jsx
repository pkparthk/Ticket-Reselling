import styled from "styled-components";

// Main container for the About section
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem; /* Padding inside the About section */
  min-height: 100vh;
  margin-top: -2rem; /* Ensure no large top margin */
  margin-bottom: 3rem; /* Adds space after About section, can adjust as needed */
  word-wrap: break-word; /* Ensure words break in smaller containers */

  @media (max-width: 768px) {
    padding: 3rem 1rem; /* Adjust for smaller screens */
    margin-top: -50rem; /* Reset margin-top for mobile */
    margin-bottom: -15rem; /* Adjust margin-bottom for mobile */
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem; /* Further adjust padding for very small screens */
  }
`;

// Title styling
export const Title = styled.h1`
  font-size: 6rem; // Large title size for wide screens
  color: #ffffff; // White color for the title
  font-family: "Catamaran", sans-serif; // Catamaran font
  letter-spacing: 2px; // Slight letter spacing
  text-align: center; // Center text horizontally
  margin-bottom: 2rem; // Adds margin to the bottom for spacing
  word-wrap: break-word; /* Prevent overflow for the title */

  &:hover {
    color: #ff3822; /* Hover color change */
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 4rem; // Adjust font size for medium screens
  }

  @media (max-width: 768px) {
    font-size: 3.6rem; // Adjust font size for mobile screens
    text-align: center; // Centers text for smaller screens
  }

  @media (max-width: 480px) {
    font-size: 2.8rem; // Further reduce font size for very small screens
  }
`;

// Text styling for paragraph content
export const Text = styled.p`
  font-size: 2rem; /* Standard font size */
  color: rgb(48, 54, 45); /* Darker gray for a more elegant look */
  line-height: 1.6; /* Slightly increased line height for better readability */
  text-align: center; /* Center text horizontally */
  font-family: "Roboto", sans-serif; /* Smooth, modern font */
  font-weight: 400; /* Regular weight for the text */
  letter-spacing: 0.5px; /* Slight letter spacing for a clean look */
  max-width: 90%; /* Limit width for better control over line length */
  margin: 0 auto; /* Center the text container */
  background: linear-gradient(
    to right,
    #00c6ff,
    rgb(211, 220, 231)
  ); /* Blue gradient background */
  -webkit-background-clip: text; /* Make the gradient apply to the text */
  color: transparent; /* Make the text color transparent to show the gradient */
  padding: 20px; /* Add some padding around the text */
  border-radius: 10px; /* Rounded corners for a softer look */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: all 0.3s ease; /* Smooth transition on hover */
  word-wrap: break-word; /* Prevent text overflow */

  &:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* Slightly stronger shadow */
  }

  @media (max-width: 768px) {
    font-size: 1.6rem; /* Smaller font for mobile screens */
    padding: 15px; /* Less padding on smaller screens */
    max-width: 100%; /* Ensure full width for mobile screens */
  }

  @media (max-width: 480px) {
    font-size: 1.4rem; /* Further reduce font size for very small screens */
    padding: 10px; /* Reduce padding for small devices */
  }
`;

// Highlight text style for key points
export const Highlight = styled.span`
  color: #3ccf91; // Green color for highlighted text
  font-weight: bold; // Bold text for emphasis
  text-transform: capitalize; // Capitalizes first letter of each word
`;

// Subtitle styling for secondary titles (smaller than main Title)
export const SubTitle = styled.h2`
  font-size: 3rem; // Standard subtitle size
  color: black; // Black color for subtitle
  letter-spacing: 1px; // Slight letter spacing
  text-align: center; // Centers the subtitle text
  margin-top: 3rem; // Adds margin to the top for spacing

  @media (max-width: 768px) {
    font-size: 2.4rem; // Adjusts font size for smaller screens
  }

  @media (max-width: 480px) {
    font-size: 2rem; // Further reduce font size for small screens
  }
`;
