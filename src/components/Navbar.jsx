import React from "react";
import styled from "styled-components";

const Section = styled.div`
  /* z-index: 100;  */
  display: flex;
  padding: 10px;
  width: 90%;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.h1`
  font-weight: 1000;
  font-size: 40px;
  height: 50px;
  background-color: white;
  color: black;
  border-radius: 50%;
  padding: 5px;
  animation-name: animatee;
  animation-duration: 1.5s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  @keyframes animatee {
    to {
      transform: translateX(20px);
    }
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo>N</Logo>
          <List>
            <ListItem>
              <a href="#Home">Home</a>
            </ListItem>
            <ListItem>
              <a href="#Studio">Studio</a>
            </ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
