import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importing the AOS styles
import {
  ExperienceContainer,
  ExperienceTitle,
  Experience,
  ExperienceHeading,
  ExperienceText,
  ExperienceText2,
} from "./style"; // Import the styled components

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
    AOS.refresh(); // Refresh AOS when needed (e.g., after state updates)
  }, []);

  return (
    <ExperienceContainer id="experience">
      <ExperienceTitle
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        data-aos-delay="800"
      >
        Experience
      </ExperienceTitle>
      <Experience
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <ExperienceHeading>Game Developer</ExperienceHeading>
        <ExperienceText>SandBox by BharatBox</ExperienceText>
        <ExperienceText2>December 2024 – Present</ExperienceText2>
      </Experience>
      <Experience
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        data-aos-delay="1100"
      >
        <ExperienceHeading>Graphics Team Lead</ExperienceHeading>
        <ExperienceText>Byte-Xync</ExperienceText>
        <ExperienceText2>March 2023 – Present</ExperienceText2>
      </Experience>
      <Experience
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        data-aos-delay="1100"
      >
        <ExperienceHeading>Graphics Team Member</ExperienceHeading>
        <ExperienceText>OS Code</ExperienceText>
        <ExperienceText2>June 2023 – Present</ExperienceText2>
      </Experience>
      <Experience
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        data-aos-delay="1200"
      >
        <ExperienceHeading>FIL Bengaluru</ExperienceHeading>
        <ExperienceText2>Dec 2023</ExperienceText2>
      </Experience>
      <Experience
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        data-aos-delay="1500"
      >
        <ExperienceHeading>Participant</ExperienceHeading>
        <ExperienceText>Aventus Hackathon</ExperienceText>
        <ExperienceText2>August 2023</ExperienceText2>
      </Experience>
      <Experience
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        data-aos-delay="1300"
      >
        <ExperienceHeading>Campus Ambassador</ExperienceHeading>
        <ExperienceText>Team Let’s Upgrade</ExperienceText>
        <ExperienceText2>Jan 2023 – April 2024</ExperienceText2>
      </Experience>
      <Experience
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        data-aos-delay="1400"
      >
        <ExperienceHeading>Arcade Google Cloud Skill Boost</ExperienceHeading>
        <ExperienceText2>March 2022 – December 2024</ExperienceText2>
      </Experience>
      <Experience
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        data-aos-delay="1500"
      >
        <ExperienceHeading>Volunteer</ExperienceHeading>
        <ExperienceText>Eth India</ExperienceText>
        <ExperienceText2>December 2023</ExperienceText2>
      </Experience>
      <Experience
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        data-aos-delay="1500"
      >
        <ExperienceHeading>Participant</ExperienceHeading>
        <ExperienceText>Polygon Connect</ExperienceText>
        <ExperienceText2>December 2023</ExperienceText2>
      </Experience>
    </ExperienceContainer>
  );
};

export default ExperienceSection;
