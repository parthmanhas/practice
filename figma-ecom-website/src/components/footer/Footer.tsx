import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import styled from "styled-components";

interface IAppFooter {
    bright?: boolean;
}

const footerItems = [
  {
    heading: "Shop By Category",
    items: [
      "Skincare",
      "Personal Care",
      "Handbags",
      "Apparels",
      "Watches",
      "Eye Wear",
      "Jewellery",
    ],
  },
  {
    heading: "About Us",
    items: ["Contact Us", "About Us", "Careers", "Press"],
  },
  {
    heading: "Policy",
    items: [
      "Return Policy",
      "Terms of Use",
      "Sitemap",
      "Security",
      "Privacy",
      "EPR Compliance",
    ],
  },
];

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  width: calc(100% - 3rem);
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.lightText};
`;

const Left = styled.div`
  display: flex;
`;

const Right = styled.div``;

const List = styled.ul`
  list-style: none;
  margin-right: 3rem;
`;

const ListItem = styled.li<IAppFooter>`
  margin: 0.5rem;
  color: ${props => props.bright ? props.theme.colors.bright : 'inherit'};
`;

const IconContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  margin: 0.5rem;
  font-size: 1.5rem;
`;

const Country = styled.div<IAppFooter>`
  display: flex;
  align-items: center;
  color: ${props => props.bright ? props.theme.colors.bright : 'inherit'};
`;

const CopyRight = styled.div`
    margin: 0.75rem
`;

const AppFooter = () => {
  return (
    <Footer>
      <Left>
        <List>
          <ListItem bright>{footerItems[0].heading}</ListItem>
          {footerItems[0].items.map((item) => (
            <ListItem>{item}</ListItem>
          ))}
        </List>
        <List>
          <ListItem bright>{footerItems[1].heading}</ListItem>
          {footerItems[1].items.map((item) => (
            <ListItem>{item}</ListItem>
          ))}
        </List>
        <List>
          <ListItem bright>{footerItems[2].heading}</ListItem>
          {footerItems[2].items.map((item) => (
            <ListItem>{item}</ListItem>
          ))}
        </List>
      </Left>
      <Right>
        <IconContainer>
          <Icon>
            <BsFacebook />
          </Icon>
          <Icon>
            <BsInstagram />
          </Icon>
          <Icon>
            <BsTwitter />
          </Icon>
          <Icon>
            <BsYoutube />
          </Icon>
        </IconContainer>
        <Country bright>
          <Icon>
            <CiLocationOn></CiLocationOn>
          </Icon>
          United States
        </Country>
        <CopyRight>© 2021 | Cora Leviene All Rights Reserved</CopyRight>
      </Right>
    </Footer>
  );
};

export default AppFooter;
