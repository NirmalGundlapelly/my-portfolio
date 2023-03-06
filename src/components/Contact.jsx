import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [username, setusername] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const onChangeName = (e) => setusername(e.target.value);

  const onChangeEmail = (e) => setUserEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userEmail.endsWith("gmail.com"));
    if (username !== "" && userEmail !== "") {
      if (userEmail.endsWith("gmail.com")) {
        emailjs
          .sendForm(
            "service_ktxrblm",
            "template_2sfftdr",
            ref.current,
            "crP7o1mEHRVVuU4iE"
          )
          .then(
            (result) => {
              console.log(result);
              setSuccess(true);
            },
            (error) => {
              console.log(error.text);
              setSuccess(false);
            }
          );
      } else {
        alert("Invalid Email Address");
      }
    } else {
      alert("Please Provide Valid Inputs and Click on Send :)");
    }
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" onChange={onChangeName} name="name" />
            <Input placeholder="Email" onChange={onChangeEmail} name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
      </Container>
    </Section>
  );
};

export default Contact;
