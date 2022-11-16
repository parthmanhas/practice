import styled from "styled-components";

const Container = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;
const ContainerLeft = styled.div`
  width: 70%;
`;
const OfferDetails = styled.div`
    margin-bottom: 1rem;
`;
const Terms = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;
const ContainerRight = styled.div`
  border-radius: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.grey};
`;
const UseCode = styled.div`
  color: ${(props) => props.theme.colors.lowEmphasis};
`;
const CouponCode = styled.div``;

const Offer = () => {
  return (
    <Container>
      <ContainerLeft>
        <OfferDetails>Get upto 30% Off on order value above $100</OfferDetails>
        <Terms>Terms & Conditions</Terms>
      </ContainerLeft>
      <ContainerRight>
        <UseCode>Use Code</UseCode>
        <CouponCode>ORDER100</CouponCode>
      </ContainerRight>
    </Container>
  );
};

export default Offer;
