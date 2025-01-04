import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypingEffect from "react-typing-effect";
import Typical from "react-typical";
import ParticlesComponent from "../partcles";
import fallbackImage from "../../assets/pic.jpg";
import { contactLinks } from "../../constantLink";
import {
  HomeContainer,
  MainContent,
  Name,
  SkillText,
  AboutText,
  ImageContainer,
  MainContainer,
  ContactLinksContainer,
  ContactLink,
  LinkItem,
  SubText,
  ResumeButton,
} from "./style";

const Home = ({ state }) => {
  const [cid, setCid] = useState("");
  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  AOS.init();

  useEffect(() => {
    const { contract } = state;

    // Fetch the image CID
    const cidOfImage = async () => {
      if (contract) {
        try {
          const cid = await contract.methods.imageLink().call();
          setCid(cid);
          setLoading(false); // Image fetching completed
        } catch (error) {
          console.error("Error fetching image link:", error);
          setImageError(true); // If error occurs, trigger fallback
          setLoading(false);
        }
      }
    };

    // Fetch the resume CID
    const fetchResume = async () => {
      if (contract) {
        try {
          const resumeCid = await contract.methods.resumeLink().call();
          setResume("https://gateway.pinata.cloud/ipfs/" + resumeCid);
        } catch (error) {
          console.error("Error fetching resume link:", error);
        }
      }
    };

    if (contract) {
      cidOfImage();
      fetchResume();
    }
  }, [state]);

  const handleImageError = () => {
    console.log("Image failed to load. Switching to fallback.");
    setImageError(true); // Set imageError to true if the image fails to load
  };

  // set the bacup as a fallback resume

  const fallbackResume = "https://drive.google.com/file/d/1Hm1cE7Nt7v_o0ynMtMrny3O3SboyreqO/view?usp=sharing";
  const resumeSrc = resume ? resume : fallbackResume;


  const imageSrc = imageError
    ? fallbackImage
    : `https://gateway.pinata.cloud/ipfs/${cid}`;
  

  return (
    <HomeContainer id="home">
      <ParticlesComponent id="particles" />
      <MainContainer>
        {/* Text Content */}
        <MainContent>
          <Name
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
          >
            <TypingEffect
              text="Hi, I am Parth Kothari !"
              loop={1}
              speed={150} // typing speed in ms per character
              cursor="_" // Optional text cursor
              eraseSpeed={false} // Optional erase speed in ms
            />
          </Name>
          <AboutText
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1200"
          >
            <span className="block text-blue-500 z-0 lg:inline">
              <Typical
                steps={[
                  "Blockchain Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "AI Enthusiast",
                  1000,
                  "Google Cloud Developer",
                  1000,
                ]}
                loop={Infinity}
              />
            </span>
          </AboutText>
          <SkillText
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1500"
          >
            Full Stack Developer with expertise in Blockchain and AI.
            <br />
            Consistently enhancing my skills in Data Structures and Algorithms
            (DSA).
            <br />
            Passionate about creating innovative projects using the latest
            technologies.
          </SkillText>

          {/* Contact Links */}
          <ContactLinksContainer>
            {contactLinks.map((link, index) => (
              <ContactLink
                key={index}
                href={link.link}
                target="_blank"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay={`${index * 200}`}
              >
                <img src={link.url} alt={link.name} />
              </ContactLink>
            ))}
          </ContactLinksContainer>
          <LinkItem>
            <ResumeButton
              type="submit"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <SubText
                as="a"
                href={resumeSrc}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </SubText>
            </ResumeButton>
          </LinkItem>
        </MainContent>

        {/* Image on the Right */}
        <ImageContainer>
          {loading ? (
            <p>Loading...</p> // Show loading message if image is still being fetched
          ) : (
            <img
              src={imageSrc} // Use final image source (either IPFS image or fallback image)
              alt="profilePhoto"
              onError={handleImageError} // Trigger error handling if image fails
            />
          )}
        </ImageContainer>
      </MainContainer>
    </HomeContainer>
  );
};

export default Home;
