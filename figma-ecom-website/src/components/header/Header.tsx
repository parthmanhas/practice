import styled from "styled-components";
import { BsHeart, BsPerson, BsSearch } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";

const NavBar = styled.div`
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
`;
const InputContainer = styled.div`
  margin: 0.5rem;
  display: flex;
`;

const Input = styled.input`
  border: none;
  font-size: 1rem;
`;

const IconContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  margin: 0.5rem;
  font-size: 1.5rem;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
`;
const ListItem = styled.li`
  margin: 0.5rem;
`;

const Header = () => {
  return (
    <NavBar>
      <Left>
        <List>
          <Logo>Cora'l</Logo>
          <ListItem>Handbags</ListItem>
          <ListItem>Watches</ListItem>
          <ListItem>Skincare</ListItem>
          <ListItem>Jewellery</ListItem>
          <ListItem>Apparels</ListItem>
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
            <BiShoppingBag></BiShoppingBag>
          </Icon>
          <Icon>
            <BsPerson></BsPerson>
          </Icon>
          <Icon>
            <BsHeart></BsHeart>
          </Icon>
        </IconContainer>
      </Right>
    </NavBar>
  );
};

export default Header;
