import styled from "styled-components/macro";
import AppFooter from "../components/footer/Footer";
import Header from "../components/header/Header";

const Container = styled.div``;
const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey};
  position: relative;
`;
const HeroImage = styled.div``;
const HeroTextContainer = styled.div`
  position: absolute;
  width: 30vw;
  right: 10%;
  top: 30%;
`;
const HeroTextHeading = styled.h1``;
const HeroText = styled.div``;
const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
`;
const Container1Heading = styled.h3``;
const Container1Text = styled.div`
  width: 50vw;
`;
const Container2 = styled.div`
  margin: 1.5rem;
  height: 60vh;
  display: flex;
`;
const Container2Left = styled.div`
  width: 30vw;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Container2Heading = styled.h3``;
const Container2Text = styled.div``;
const Container2Right = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  flex: 1;
`;
const Container2RightImage = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
`;
const Container3 = styled.div`
  height: 60vh;
  display: flex;
  margin: 1.5rem;
`;
const Container3Left = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.grey};
  margin-right: 1rem;
`;
const Container3Right = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Container3RightHeading = styled.h3``;
const Container3RightText = styled.div``;
const Container3LeftImage = styled.div``;
const Container4 = styled.div`
    height: 60vh;
    display: flex;
    margin: 1.5rem;
    margin-bottom: 20vh;
`;
const Container4Left = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Container4LeftHeading = styled.h3``;
const Container4LeftText = styled.div``;
const Container4Right = styled.div`
    flex: 1;
    background-color: ${props => props.theme.colors.grey};
`;
const Container4RightImage = styled.div`
`;

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <HeroContainer>
          <HeroImage></HeroImage>
          <HeroTextContainer>
            <HeroTextHeading>ABOUT</HeroTextHeading>
            <HeroText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </HeroText>
          </HeroTextContainer>
        </HeroContainer>
        <Container1>
          <Container1Heading>About</Container1Heading>
          <Container1Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            laboriosam minus consectetur voluptatem expedita repudiandae hic,
            nisi ab dolor ullam perspiciatis sequi enim eius consequatur, sunt
            fugiat perferendis doloremque numquam.
          </Container1Text>
        </Container1>
        <Container2>
          <Container2Left>
            <Container2Heading>About</Container2Heading>
            <Container2Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              vero quasi voluptatibus tempore voluptate quaerat, fugiat commodi,
              cum quidem numquam in nisi, repellat voluptatum necessitatibus
              rerum nostrum labore. Quo, quidem.
            </Container2Text>
          </Container2Left>
          <Container2Right>
            <Container2RightImage></Container2RightImage>
          </Container2Right>
        </Container2>
        <Container3>
          <Container3Left>
            <Container3LeftImage></Container3LeftImage>
          </Container3Left>
          <Container3Right>
            <Container3RightHeading>About</Container3RightHeading>
            <Container3RightText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              vero quasi voluptatibus tempore voluptate quaerat, fugiat commodi,
              cum quidem numquam in nisi, repellat voluptatum necessitatibus
              rerum nostrum labore. Quo, quidem.
            </Container3RightText>
          </Container3Right>
        </Container3>
        <Container4>
          <Container4Left>
            <Container4LeftHeading>About</Container4LeftHeading>
            <Container4LeftText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              vero quasi voluptatibus tempore voluptate quaerat, fugiat commodi,
              cum quidem numquam in nisi, repellat voluptatum necessitatibus
              rerum nostrum labore. Quo, quidem.
            </Container4LeftText>
          </Container4Left>
          <Container4Right>
            <Container4RightImage></Container4RightImage>
          </Container4Right>
        </Container4>
      </Container>
      <AppFooter />
    </>
  );
};

export default About;
