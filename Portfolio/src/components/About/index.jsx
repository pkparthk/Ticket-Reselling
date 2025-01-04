import React from "react";
import { AboutContainer, Title, Text, Highlight } from "./style";

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <Title data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300">
          About Me 🚀
        </Title>
        <Text
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          {/* I am a passionate <Highlight>software developer</Highlight>{" "}
          specializing in the <Highlight>MERN stack</Highlight>, with a strong
          emphasis on <Highlight>frontend development</Highlight>. I am
          dedicated to continuously learning and refining my skills to create
          engaging digital experiences that meet both user needs and business
          objectives. */}
          I am a passionate and innovative{" "}
          <Highlight>Full Stack Developer</Highlight> with a strong focus on{" "}
          <Highlight>Blockchain</Highlight> and{" "}
          <Highlight>AI technologies</Highlight>. I am constantly expanding my
          knowledge of{" "}
          <Highlight>Data Structures and Algorithms (DSA)</Highlight> {""}
          to ensure that I stay on top of the latest developments in the tech
          world. With experience in a wide range of{" "}
          <Highlight>tech stacks</Highlight>, I love exploring new tools,
          frameworks, and solutions to create impactful projects. I specialize
          in combining cutting-edge technologies to build{" "}
          <Highlight>scalable and efficient systems</Highlight>. Whether it's
          integrating <Highlight>Blockchain</Highlight> {""}
          into <Highlight>decentralized applications</Highlight> or developing{" "}
          <Highlight>AI-powered solutions</Highlight>, I enjoy working on
          challenging problems that require both technical expertise and
          creativity. I am always eager to take on new challenges, improve my
          skills, and contribute to the evolving world of technology. My goal is
          to continue building <Highlight>innovative projects</Highlight> that
          push the boundaries of what is possible, leveraging the latest
          advancements in <Highlight>AI</Highlight> and{" "}
          <Highlight>Blockchain</Highlight>. Let's connect and explore how we
          can create something amazing together!
        </Text>
      </AboutContainer>
    </>
  );
};

export default About;
