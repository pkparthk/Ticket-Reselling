import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { contactLinks } from "../../constantLink";
import emailjs from "@emailjs/browser";
import {
  ContactContainer,
  Title,
  Text,
  LinkContainer,
  // FormContainer,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
  LinkItem,
  GithubIcon,
  ResumeIcon,
  SubText,
  Footer,
  FooterText,
  Highlight,
  LeftContainer,
  ContactLinksContainer,
  ContactLink,  
} from "./style";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh(); // Clean up the AOS instance when component unmounts
    };
  }, []);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey); // Initialize EmailJS with the public key
    } else {
      console.error("EmailJS public key is missing");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit button clicked!");
    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Your service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Your template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID // Your user ID
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result);
          alert("Message sent successfully! I'll get back to you soon, Thank you to connect me ! 😊");
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Error sending message:", error);
          alert("Failed to send the message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <ContactContainer id="contact">
        <Title
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          Keep In Touch <Highlight>!</Highlight>
        </Title>
        <Text
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <a
            href="mailto:0xparthkothari@gmail.com"
            style={{
              color: "#3ccf91",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
          >
            0xparthkothari@gmail.com
          </a>
        </Text>
        <LeftContainer data-aos="fade-up">
          <Text>
            Ask any questions or want to work together, feel free to contact me ! <br />
            {/* I'll try my best to get back to you ! */}
          </Text>
          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
          {/* <FormContainer> */}
            <div
              className="my-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div
              className="my-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div
              className="my-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextArea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <FormButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </FormButton>
            {/* </FormContainer> */}
          </form>
        </LeftContainer>
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

        {/* Links */}
        <LinkContainer>
          <LinkItem>
            <GithubIcon />
            <SubText as="a" href="https://github.com/pkparthk" target="_blank">
              Github
            </SubText>
          </LinkItem>
          <LinkItem>
            <ResumeIcon />
            <SubText
              as="a"
              href="https://drive.google.com/file/d/1Hm1cE7Nt7v_o0ynMtMrny3O3SboyreqO/view?usp=sharing"
              target="_blank"
            >
              Resume
            </SubText>
          </LinkItem>
        </LinkContainer>
      </ContactContainer>

      {/* Footer */}
      <Footer>
        <FooterText>
          Designed and Developed by <Highlight>Parth Kothari</Highlight>.
        </FooterText>
      </Footer>
    </>
  );
};

export default Contact;
