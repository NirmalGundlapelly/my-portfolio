import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import "./App.css";

const Container = styled.div`
  padding: 10px;
  height: 100vh;
  background-image: linear-gradient(
    to right,
    #0d035c,
    #170794,
    #3824d0,
    #a30b80
  );
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  /* background: url("/img/bgImage.jpeg"); */
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    background-image: linear-gradient(
      to bottom,
      #0d035c,
      #170794,
      #3824d0,
      #a30b80
    );
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
