import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``;
const Top = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.grey};
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;

interface ITabs {
  primary?: boolean;
  display?: boolean;
}

const Button = styled.button<ITabs>`
  color: ${(props) =>
    props.primary ? props.theme.colors.bright : props.theme.colors.lowEmphasis};
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : "inherit"};
  border: none;
  font-size: 1rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
`;
const Bottom = styled.div``;
const Details = styled.div<ITabs>`
  display: ${(props) => (props.display ? "block" : "none")};
`;

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonsHeading = [
    "Product Description",
    "Related Products",
    "Ratings and Reviews",
  ];
  const details = [
    "Lorem ipsum dolor sit  consectetur adipisicing elit. Ipsum accusamus libero quas sint officiis, quasi incidunt similique ea fugit quos commodi, illo vero eveniet blanditiis omnis consectetur ex quisquam doloremque!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus libero quas sint officiis, quasi incidunt similique ea fugit quos commodi, illo vero eveniet blanditiis omnis consectetur ex quisquam doloremque!",
    "Lorem ipsum dolor sit amet consectetur  elit. Ipsum accusamus libero quas sint officiis, quasi incidunt similique ea fugit quos commodi, illo vero eveniet blanditiis omnis consectetur ex quisquam doloremque!",
  ];
  return (
    <Container>
      <Top>
        {buttonsHeading.map((heading, index) => {
          if (index === activeIndex) {
            return (
              <Button primary onClick={() => setActiveIndex(index)}>
                {heading}
              </Button>
            );
          }
          return <Button onClick={() => setActiveIndex(index)}>{heading}</Button>;
        })}
      </Top>
      <Bottom>
        {details.map((detail, index) => {
          if (index === activeIndex) return <Details display>{detail}</Details>;
          return <Details>{detail}</Details>;
        })}
      </Bottom>
    </Container>
  );
};

export default Tabs;
