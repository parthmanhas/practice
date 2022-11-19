import { RiArrowRightSLine } from "react-icons/ri";
import styled from "styled-components";

const SidebarContainer = styled.div``;
const SidebarItemContainer = styled.div`
  &:hover {
    border-left: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.grey};
`;
const SidebarItemText = styled.div``;
const Arrow = styled.div``;

const heading = [
  "Personal Information",
  "Refer and Earn",
  "My Orders",
  "My Wishlist",
  "My Reviews",
  "My Address Book",
  "My Saved Credits",
];

const SideBar = () => {
  return (
    <SidebarContainer>
      {heading.map((heading) => (
        <SidebarItemContainer>
          <SidebarItemText>{heading}</SidebarItemText>
          <Arrow>
            <RiArrowRightSLine />
          </Arrow>
        </SidebarItemContainer>
      ))}
    </SidebarContainer>
  );
};

export default SideBar;
