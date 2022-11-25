import styled from "styled-components/macro";
import AppFooter from "../components/footer/Footer";
import Header from "../components/header/Header";
import { SlArrowDown } from "react-icons/sl";
import OrderSummary from "../components/OrderSummary";

const NavInfo = styled.div``;
const PageHeading = styled.div``;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1.5rem;
`;
const ContainerLeft = styled.div`
  width: 60%;
  margin-right: 3rem;
`;
const ContactInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;
const ContactInfoText = styled.div``;
const DropDownArrow = styled.div``;
const PaymentsInfoContainer = styled.div``;
const PaymentsHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;
const PaymentsHeading = styled.div``;
const DropdownArrow = styled.div``;
const PaymentTypesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PaymentTypeInput = styled.input``;
const PaymentTypeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.5rem;
  margin-left: 0;
  flex: 1;
  background-color: ${(props) => props.theme.colors.grey};
`;
const PaymentTypeImage = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.theme.colors.lightText};
`;
const PaymentTypeText = styled.div``;
const PaymentTypesUpiContainer = styled.div`
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

const PaymentTypeGooglePlay = styled.div``;
const PaymentTypePhonePe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  padding-left: 0;
`;
const PaymentTypePhonePeLeft = styled.div`
  display: flex;
  align-items: center;
`;
const PaymentTypePhonePeLeftImage = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 1rem;
  background-color: ${(props) => props.theme.colors.grey};
`;
const PaymentTypePhonePeLeftText = styled.div``;
const PaymentTypePhonePeRight = styled.div``;
const PaymentTypePhonePeRightInput = styled.input``;
const PaymentTypePaytm = styled.div``;

const PaymentUpiInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const PaymentUpiInfoImage = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 0.5rem;
  margin-right: 1rem;
`;
const PaymentUpiInfoText = styled.div``;
const PaymentUpiInfoInputContainer = styled.div``;
const PaymentUpiInfoInput = styled.input`
  margin-left: 0;
`;
const PaymentUpiInfoInputExample = styled.div`
  margin: 0.5rem 0;
`;
const PaymentUpiInfoSaveForFutureTransactionContainer = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;
const PaymentUpiInfoSaveForFutureTransactionInput = styled.input`
  margin-left: 0;
`;
const PaymentUpiInfoSaveForFutureTransactionText = styled.div``;
const ContainerRight = styled.div`
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;
const BackToCart = styled.p``;
const Next = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.bright};
  font-size: 0.75rem;
`;
const CheckoutPayment = () => {
  return (
    <>
      <Header />
      <NavInfo>Home &gt; Checkout</NavInfo>
      <PageHeading>Checkout</PageHeading>
      <Container>
        <ContainerLeft>
          <ContactInformationContainer>
            <ContactInfoText>Contact Information</ContactInfoText>
            <DropDownArrow>
              <SlArrowDown />
            </DropDownArrow>
          </ContactInformationContainer>
          <PaymentsInfoContainer>
            <PaymentsHeadingContainer>
              <PaymentsHeading>Payments</PaymentsHeading>
              <DropdownArrow>
                <SlArrowDown />
              </DropdownArrow>
            </PaymentsHeadingContainer>
            <PaymentTypesContainer>
              <PaymentTypeCard>
                <PaymentTypeInput type="radio"></PaymentTypeInput>
                <PaymentTypeImage></PaymentTypeImage>
                <PaymentTypeText>UPI</PaymentTypeText>
              </PaymentTypeCard>
              <PaymentTypeCard>
                <PaymentTypeInput type="radio"></PaymentTypeInput>
                <PaymentTypeImage></PaymentTypeImage>
                <PaymentTypeText>UPI</PaymentTypeText>
              </PaymentTypeCard>
              <PaymentTypeCard>
                <PaymentTypeInput type="radio"></PaymentTypeInput>
                <PaymentTypeImage></PaymentTypeImage>
                <PaymentTypeText>UPI</PaymentTypeText>
              </PaymentTypeCard>
              <PaymentTypeCard>
                <PaymentTypeInput type="radio"></PaymentTypeInput>
                <PaymentTypeImage></PaymentTypeImage>
                <PaymentTypeText>UPI</PaymentTypeText>
              </PaymentTypeCard>
            </PaymentTypesContainer>
            <PaymentTypesUpiContainer>
              <PaymentTypeGooglePlay>
                <PaymentUpiInfoContainer>
                  <PaymentUpiInfoImage></PaymentUpiInfoImage>
                  <PaymentUpiInfoText>Google Play</PaymentUpiInfoText>
                </PaymentUpiInfoContainer>
                <PaymentUpiInfoInputContainer>
                  <PaymentUpiInfoInput placeholder="Enter your UPI Id"></PaymentUpiInfoInput>
                  <PaymentUpiInfoInputExample>
                    Eg: 1234567@sbi
                  </PaymentUpiInfoInputExample>
                </PaymentUpiInfoInputContainer>
                <PaymentUpiInfoSaveForFutureTransactionContainer>
                  <PaymentUpiInfoSaveForFutureTransactionInput type="checkbox"></PaymentUpiInfoSaveForFutureTransactionInput>
                  <PaymentUpiInfoSaveForFutureTransactionText>
                    Save this for future transactions
                  </PaymentUpiInfoSaveForFutureTransactionText>
                </PaymentUpiInfoSaveForFutureTransactionContainer>
              </PaymentTypeGooglePlay>
              <PaymentTypePhonePe>
                <PaymentTypePhonePeLeft>
                  <PaymentTypePhonePeLeftImage></PaymentTypePhonePeLeftImage>
                  <PaymentTypePhonePeLeftText>
                    Phone Pe
                  </PaymentTypePhonePeLeftText>
                </PaymentTypePhonePeLeft>
                <PaymentTypePhonePeRight>
                  <PaymentTypePhonePeRightInput type="radio"></PaymentTypePhonePeRightInput>
                </PaymentTypePhonePeRight>
              </PaymentTypePhonePe>
              <PaymentTypePaytm></PaymentTypePaytm>
            </PaymentTypesUpiContainer>
          </PaymentsInfoContainer>
          <ButtonContainer>
            <BackToCart>Back To Cart</BackToCart>
            <Next>Next</Next>
          </ButtonContainer>
        </ContainerLeft>
        <ContainerRight>
          <OrderSummary />
        </ContainerRight>
      </Container>
      <AppFooter />
    </>
  );
};

export default CheckoutPayment;
