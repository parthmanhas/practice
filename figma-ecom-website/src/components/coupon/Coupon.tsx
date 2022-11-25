import styled from "styled-components/macro";

const CouponContainer = styled.div`
  display: inline-flex;
  position: relative;
  `;
const CouponInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  border: none;
  background-color: ${props => props.theme.colors.grey};
  border-radius: 0.25rem;
  
`;
const CouponCheck = styled.button`
  position: absolute;
  top: 20%;
  right: 1%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

const Coupon = () => {
  return (
    <CouponContainer>
      <CouponInput placeholder="Apply Coupon Code"></CouponInput>
      <CouponCheck>Check</CouponCheck>
    </CouponContainer>
  );
};

export default Coupon;
