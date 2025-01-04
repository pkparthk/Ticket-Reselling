import styled from "styled-components";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
`;

export const Title = styled.h1`
  color: white;
  font-size: 6rem;
  text-align: center;
  margin-bottom: -0.5rem;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;


export const LeftContainer = styled.div`
  background-color: rgb(198, 219, 245);
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2rem 3rem;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  margin: 2rem auto; /* Added top margin for spacing */
  margin-top: 0; /* Reset top margin */

  @media (min-width: 768px) {
    width: 50%;
  }
    `;

export const Text = styled.p`
  color: rgb(2, 7, 24);
  font-size: 2.5rem;
  text-align: center;
  transition: color 0.3s ease;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const FormContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: -1.5rem; /* Space between text and form */
  gap: 1.5rem; /* Consistent spacing between form elements */
`;

export const FormLabel = styled.label`
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 10rem; /* Center the label */
  margin-bottom: 0.5rem; /* Space between label and input */
  display: block; /* Ensures the label takes its own line */
`;


export const FormInput = styled.input`
  background-color: ${(props) => (props.darkMode ? "#2c2c2c" : "#f9f9f9")};
  border: 2px solid ${(props) => (props.darkMode ? "#555" : "#ddd")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  padding: 1rem 7rem;
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  margin: 0 10rem; /* Center the input */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 2px solid #3ccf91;
    box-shadow: 0 0 10px rgba(60, 207, 145, 0.5);
  }

  &::placeholder {
    color: ${(props) => (props.darkMode ? "#bbb" : "#aaa")};
    font-style: italic;
  }
`;


export const FormTextArea = styled.textarea`
  background-color: ${(props) => (props.darkMode ? "#333" : "#f9f9f9")};
  border: 1px solid ${(props) => (props.darkMode ? "#666" : "#ccc")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  padding: 1.5rem 7rem;
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  margin: 0 10rem; /* Center the textarea */
  
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid #3ccf91;
    box-shadow: 0 0 10px rgba(60, 207, 145, 0.5); /* Glow effect */
  }

  &::placeholder {
    color: ${(props) => (props.darkMode ? "#bbb" : "#888")};
    font-style: italic;
  }
`;


export const FormButton = styled.button`
  background-color: ${(props) => (props.darkMode ? "#3ccf91" : "#4CAF50")};
  color: ${(props) => (props.darkMode ? "#222" : "white")};
  font-size: 1.8rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px; /* Rounded button */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  display: block;
  margin: auto; /* Center horizontally with margin */

  &:hover {
    background-color: ${(props) => (props.darkMode ? "#ff6347" : "#45a049")};
    transform: translateY(-3px); /* Lift effect */
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0); /* Reset lift effect */
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }
`;


export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  column-gap: 2rem;

  @media (max-width: 768px) {
    column-gap: 1rem;
  }
`;

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const GithubIcon = styled(FaGithub)`
  color: #3ccf91;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: #ff3822;
  }
`;

export const ResumeIcon = styled(IoDocumentTextSharp)`
  color: #3ccf91;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: #ff3822;
  }
`;

export const SubText = styled.p`
  color: #ffffff;
  font-size: 2rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: #3ccf91;
  }
`;

export const Footer = styled.div`
  background-color: black;
  width: 100%;
  padding-bottom: 2rem;
`;

export const FooterText = styled(Text)`
  color: #8f9094;
  font-size: 1.5rem;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Highlight = styled.span`
  color: #3ccf91;
`;

export const FormLink = styled.a`
  color: #3ccf91;
  font-size: 1.1rem;
  text-decoration: underline;
  &:hover {
    color: #ff3822;
  }
`;


export const ContactLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem; /* Add some space between each contact link */
  margin-top: 1rem; /* Optional: Add margin to separate from SkillText */
  margin-bottom: -3rem; /* Space between contact links and footer */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
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
