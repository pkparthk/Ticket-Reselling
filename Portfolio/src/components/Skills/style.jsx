import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem; /* Padding inside the Skills section */
  margin-top: 0rem; /* Ensure no large top margin */
  margin-bottom: 11rem; /* Adds spacing below the Skills section */

  @media (max-width: 768px) {
    padding: 3rem 1rem; /* Adjust for smaller screens */
  }
`;

export const Title = styled.h1`
  font-size: 7rem;
  color: #ffffff;
  font-family: "Catamaran", sans-serif;
  letter-spacing: 2px;
  text-align: center; /* Center the title */
  margin-bottom: -2rem; /* Adds spacing below the title */

  &:hover {
    color: #ff3822; /* Hover color change */
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 8rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    text-align: center; /* Ensures it's centered on smaller screens */
  }
`;

export const Text = styled.p`
  font-size: 2rem;
  color: #8f9094;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 3rem; /* Adds spacing between text and skill list */
  margin-top: 2rem; /* Adds spacing between title and text */
`;

export const Highlight = styled.span`
  color: #3ccf91;
  font-weight: bold;
  text-transform: capitalize;
`;

export const SkillContainer = styled.ul`
  padding-inline-start: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem 2rem;
  width: 80%; /* Restrict width to fit content */
  max-width: 1200px; /* Optional: Set a max-width */
  margin: 0 auto; /* Center horizontally */
  margin-top: 2rem; /* Adds spacing between text and skill list */
`;

export const SkillList = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  flex: 1 1 100px; /* Flex to make items responsive */
  max-width: 150px; /* Optional: Set a max width for each item */
`;

export const SkillListItem = styled.div`
  background-color: #ffffff;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkillImage = styled.img`
  height: 50%;
  object-fit: contain;
  width: 50%;
`;

export const SkillName = styled.p`
  color: #6b7688;
  font-size: 1.8rem;
  text-align: center;
`;
