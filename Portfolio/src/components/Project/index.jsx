import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Grid } from "react-loader-spinner";
import img from "../../assets/img1.png"; // Default fallback image
import {
  ProjectContainer,
  Title,
  ProjectCardContainer,
  ProjectCard,
  ProjectImageCard,
  ProjectInfo,
  ProjectTitle,
  ProjectDesc,
  LoaderContainer,
  DonationContainer,
  DonationText,
  DonateButton,
  ModalOverlay,
  ModalContent,
  CloseButton,
} from "./style"; // Importing styled components

const Project = ({ state }) => {
  const [modal, setModal] = useState(false);
  const [projects, setProjects] = useState([]);

  // Fetch projects on component mount
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const fetchProjectDetails = async () => {
      if (state?.contract) {
        try {
          const { contract } = state;
          const fetchedProjects = await contract.methods.allProjects().call();
          setProjects(fetchedProjects);
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      }
    };

    fetchProjectDetails();
  }, [state]);

  // Handle ETH donation
  const donateEth = async (event) => {
    event.preventDefault();
    try {
      const { contract, web3 } = state;
      const eth = document.querySelector("#eth").value;
      const weiValue = web3.utils.toWei(eth, "ether");
      const accounts = await web3.eth.getAccounts();
      await contract.methods
        .donate()
        .send({ from: accounts[0], value: weiValue, gas: 480000 });
      alert("Transaction Successful");
    } catch (error) {
      alert("Transaction Not Successful");
      console.error("Donation error:", error.message);
    }
  };

  // Toggle modal visibility
  const toggleModal = () => {
    setModal(!modal);
  };

  // Smooth scroll to projects section
  const scrollToProjects = () => {
    const projectSection = document.getElementById("project");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ProjectContainer>
      <div id="project">
        <Title
          onClick={scrollToProjects}
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Projects 🚀
        </Title>

        <ProjectCardContainer>
          {projects.length ? (
            projects.map((project, index) => {
              let githubLink = `https://github.com/pkparthk/${project.githubLink}`; 
              if (parseInt(project.id) === 1) {
                githubLink = project.githubLink; // Directly use the githubLink from the contract for project id 1
              }
              const imageUrl = project.image
                ? `https://gateway.pinata.cloud/ipfs/${project.image}`
                : img;

              return (
                <ProjectCard
                  as="a"
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={`${index * 100}`}
                >
                  <ProjectImageCard
                    src={imageUrl}
                    alt={`Project ${project.name}`}
                    onError={(e) => (e.target.src = img)} // Fallback to default image
                  />
                  <ProjectInfo>
                    <ProjectTitle>{project.name}</ProjectTitle>
                    <ProjectDesc>{project.description}</ProjectDesc>
                  </ProjectInfo>
                </ProjectCard>
              );
            })
          ) : (
            <LoaderContainer>
              <Grid
                type="ThreeDots"
                color="white"
                height={50}
                width={50}
                ariaLabel="loading-projects"
              />
            </LoaderContainer>
          )}
        </ProjectCardContainer>

        <DonationContainer
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {modal && (
            <ModalOverlay>
              <ModalContent>
                <CloseButton onClick={toggleModal}>&times;</CloseButton>
                <h3>Enter the ETH you want to donate!</h3>
                <form onSubmit={donateEth}>
                  <input id="eth" type="text" placeholder="Amount in ETH" />
                  <DonateButton type="submit">Send</DonateButton>
                </form>
              </ModalContent>
            </ModalOverlay>
          )}

          <DonationText>
            Loved the projects? Consider donating ETH!
          </DonationText>
          <DonateButton onClick={toggleModal}>Donate</DonateButton>
        </DonationContainer>
      </div>
    </ProjectContainer>
  );
};

export default Project;
