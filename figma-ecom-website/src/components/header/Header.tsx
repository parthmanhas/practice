import styled from "styled-components/macro";
import { BsHeart, BsPerson, BsSearch } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import Modal from "../modal/CartModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import Toast from "../Toast";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const NavBar = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme.colors.bright};
  margin: 0.5rem 1.5rem;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-right: 1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;
const InputContainer = styled.div`
  margin: 0.5rem;
  display: flex;
  background-color: ${(props) => props.theme.colors.grey};
`;

const Input = styled.input`
  border: none;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.grey};
  outline: none;
`;

const IconContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  margin: 0.5rem;
  font-size: 1.5rem;
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
  cursor: pointer;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
`;
const ListItem = styled.li`
  margin: 0.5rem;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
  list-style: none;
  text-decoration: none;
`;

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <NavBar>
      <Left>
        <List>
          <StyledLink to={"/"} relative="path">
            <Logo>Cora'l</Logo>
          </StyledLink>
          <StyledLink to={"/category/handbags"}>
            <ListItem>Handbags</ListItem>
          </StyledLink>
          <StyledLink to={"/category/watches"}>
            <ListItem>Watches</ListItem>
          </StyledLink>
          <StyledLink to={"/category/skincare"}>
            <ListItem>Skincare</ListItem>
          </StyledLink>
          <StyledLink to={"/category/jewellery"}>
            <ListItem>Jewellery</ListItem>
          </StyledLink>
          <StyledLink to={"/category/apparels"}>
            <ListItem>Apparels</ListItem>
          </StyledLink>
        </List>
      </Left>
      <Right>
        <InputContainer>
          <Icon>
            <BsSearch></BsSearch>
          </Icon>
          <Input
            size={40}
            placeholder="Search for products or brands..."
          ></Input>
        </InputContainer>
        <IconContainer>
          <Icon>
            <BsHeart></BsHeart>
          </Icon>
          <Icon>
            <BsPerson></BsPerson>
          </Icon>
          <Icon onClick={() => setShowModal(!showModal)}>
            <BiShoppingBag></BiShoppingBag>
          </Icon>
        </IconContainer>
      </Right>
      {showModal && <Modal setShowModal={setShowModal} />}
    </NavBar>
  );
};

export default Header;
