import React from "react";
import styled from "styled-components";
import AppFooter from "../components/footer/Footer";
import Header from "../components/header/Header";
import PersonalDetails from "../components/PersonalDetails";
import { RiArrowRightSLine } from "react-icons/ri";

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
const NavContainer = styled.div``;
const NavItemContainer = styled.div`
  &:hover {
    border-left: 2px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.grey};
`;

const Arrow = styled.div``;

const NavItemText = styled.div``;

const ContainerRight = styled.div`
  flex: 1;
`;
const ContainerRightHeading = styled.div``;

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
          <NavContainer>
            <NavItemContainer>
              <NavItemText>Personal Information</NavItemText>
              <Arrow>
                <RiArrowRightSLine />
              </Arrow>
            </NavItemContainer>
            <NavItemContainer>
              <NavItemText>Refer and Earn</NavItemText>
              <Arrow>
                <RiArrowRightSLine />
              </Arrow>
            </NavItemContainer>
            <NavItemContainer>
              <NavItemText>My Orders</NavItemText>
              <Arrow>
                <RiArrowRightSLine />
              </Arrow>
            </NavItemContainer>
            <NavItemContainer>
              <NavItemText>My Wishlist</NavItemText>
              <Arrow>
                <RiArrowRightSLine />
              </Arrow>
            </NavItemContainer>
            <NavItemContainer>
              <NavItemText>My Reviews</NavItemText>
              <Arrow>
                <RiArrowRightSLine />
              </Arrow>
            </NavItemContainer>
            <NavItemContainer>
              <NavItemText>My Address Book</NavItemText>
              <Arrow>
                <RiArrowRightSLine />
              </Arrow>
            </NavItemContainer>
          </NavContainer>
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
