import styled from "styled-components";
import AppFooter from "../components/footer/Footer";
import FulfilledOrders from "../components/FulfilledOrders";
import Header from "../components/header/Header";
import SideBar from "../components/SideBar";

const NavInfo = styled.div`
  margin: 1.5rem;
`;
const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem;
`;
const HeadingText = styled.h1``;
const HeadingSearch = styled.input``;
const Container = styled.div`
  margin: 1.5rem;
  display: flex;
`;
const ContainerLeft = styled.div``;
const ContainerRight = styled.div`
  flex: 1;
  padding: 0 0 0 1rem;
`;
const StatusBar = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.grey};
`;
const StatusBarItem = styled.button``;


const MyOrders = () => {
  return (
    <>
      <Header />
      <NavInfo>Home &gt; User Profile &gt; My Orders</NavInfo>
      <HeadingContainer>
        <HeadingText>My Orders</HeadingText>
        <HeadingSearch></HeadingSearch>
      </HeadingContainer>
      <Container>
        <ContainerLeft>
          <SideBar />
        </ContainerLeft>
        <ContainerRight>
          <StatusBar>
            <StatusBarItem>Completed</StatusBarItem>
            <StatusBarItem>Processing</StatusBarItem>
            <StatusBarItem>Cancelled</StatusBarItem>
          </StatusBar>
          <FulfilledOrders />
        </ContainerRight>
      </Container>
      <AppFooter />
    </>
  );
};

export default MyOrders;
