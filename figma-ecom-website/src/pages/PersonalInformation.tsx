import styled from "styled-components";
import AppFooter from "../components/footer/Footer";
import Header from "../components/header/Header";
import PersonalDetails from "../components/PersonalDetails";
import SideBar from "../components/SideBar";

const NavInfo = styled.div``;
const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem;
`;
const Heading = styled.h1``;
const Logout = styled.button`
  font-size: 1rem;
`;
const Container = styled.div`
  display: flex;
  margin: 1.5rem;
`;
const ContainerLeft = styled.div`
  width: 20%;
  margin-right: 1.5rem;
`;

const ContainerRight = styled.div`
  flex: 1;
`;

const PersonalInformation = () => {
  return (
    <>
      <Header />
      <NavInfo></NavInfo>
      <HeadingContainer>
        <Heading>Personal Information</Heading>
        <Logout>Logout</Logout>
      </HeadingContainer>
      <Container>
        <ContainerLeft>
          <SideBar />
        </ContainerLeft>
        <ContainerRight>
          <PersonalDetails />
        </ContainerRight>
      </Container>
      <AppFooter />
    </>
  );
};

export default PersonalInformation;
