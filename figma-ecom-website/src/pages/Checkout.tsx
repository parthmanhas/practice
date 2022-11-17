import { SlArrowDown } from "react-icons/sl";
import styled from "styled-components";
import AppFooter from "../components/footer/Footer";
import Header from "../components/header/Header";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: calc(100% - 3rem);
  margin: 1.5rem;
  box-sizing: border-box;
  justify-content: space-between;
`;
const NavInfo = styled.div`
  width: calc(100% - 3rem);
  margin: 1.5rem;
`;
const Heading = styled.div`
  width: calc(100% - 3rem);
  margin: 1.5rem;
`;
const Left = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const AddNewAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2rem;
`;
const AddNewAddressHeadingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightText};
`;
const AddNewAddressHeading = styled.div``;
const AddNewAddressFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AddNewAddressFormContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
`;
const FullNameText = styled.div``;
const FullNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const FullNameInput = styled.input`
  margin-left: 0;
`;
const StreetAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const StreetAddressText = styled.div``;
const StreetAddressInput = styled.input`
  margin-left: 0;
`;
const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const CityText = styled.div``;
const CityInput = styled.input`
  margin-left: 0;
`;
const AddNewAddressFormContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
`;
const MobileNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const MobileNumberText = styled.div``;
const MobileNumberInputContainer = styled.div`
  display: flex;
  width: 100%;
`;
const MobileNumberInputLeft = styled.input`
  width: 15%;
  margin-left: 0;
`;
const MobileNumberInputRight = styled.input`
  width: 85%;
`;
const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const StateText = styled.div``;
const StateInput = styled.input`
  margin-left: 0;
`;
const PinCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const PinCodeText = styled.div``;
const PinCodeInput = styled.input`
  margin-left: 0;
`;
const DropdownArrow = styled.div``;
const SelectPaymentMethodContainer = styled.div`
  width: 100%;
`;
const SelectPaymentMethodHeadingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightText};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;
const SelectPaymentMethodHeading = styled.h3``;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const BackToCart = styled.p``;
const Next = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.bright};
  font-size: 0.75rem;
`;
const Right = styled.div`
  width: 25%;
`;
const OrderSummaryContainer = styled.div``;
const ItemsContainer = styled.div`
  margin-bottom: 2rem;
`;
const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
const ItemContainerLeft = styled.div`
  margin-right: 0.5rem;
`;
const ItemContainerLeftImage = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${(props) => props.theme.colors.grey};
`;
const ItemContainerRight = styled.div``;
const ItemName = styled.div``;
const ItemDescription = styled.div``;
const ItemQty = styled.div``;
const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const OrderDetailsHeading = styled.h3`
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightText};
`;
const SubtotalText = styled.div``;
const SubtotalAmount = styled.div``;
const DiscountText = styled.div``;
const DiscountAmount = styled.div``;
const DeliveryFeeText = styled.div``;
const DeliveryFeeAmount = styled.div``;
const GrandTotalText = styled.div``;
const GrandTotalAmount = styled.div``;
const OrderSummaryHeading = styled.h3`
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightText};
`;
const SubTotalContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const DiscountContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const DeliveryFeeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const GrandTotalContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const items = [
  {
    name: "Coach",
    description: "Leather Coach Bag",
    qty: 1,
  },
  {
    name: "Coach",
    description: "Leather Coach Bag",
    qty: 1,
  },
];

const Checkout = () => {
  return (
    <>
      <Header />
      <NavInfo>Home &gt; Checkout</NavInfo>
      <Heading>Checkout</Heading>
      <Container>
        <Left>
          <AddNewAddressContainer>
            <AddNewAddressHeadingContainer>
              <AddNewAddressHeading>Add New Address</AddNewAddressHeading>
              <DropdownArrow>
                <SlArrowDown />
              </DropdownArrow>
            </AddNewAddressHeadingContainer>
            <AddNewAddressFormContainer>
              <AddNewAddressFormContainerLeft>
                <FullNameContainer>
                  <FullNameText>Full Name</FullNameText>
                  <FullNameInput placeholder="Enter Name"></FullNameInput>
                </FullNameContainer>
                <StreetAddressContainer>
                  <StreetAddressText>Street Address</StreetAddressText>
                  <StreetAddressInput placeholder="Enter Address"></StreetAddressInput>
                </StreetAddressContainer>
                <CityContainer>
                  <CityText>City</CityText>
                  <CityInput placeholder="Enter City"></CityInput>
                </CityContainer>
              </AddNewAddressFormContainerLeft>
              <AddNewAddressFormContainerRight>
                <MobileNumberContainer>
                  <MobileNumberText>Mobile Number</MobileNumberText>
                  <MobileNumberInputContainer>
                    <MobileNumberInputLeft placeholder="+11"></MobileNumberInputLeft>
                    <MobileNumberInputRight placeholder="Enter Number"></MobileNumberInputRight>
                  </MobileNumberInputContainer>
                </MobileNumberContainer>
                <StateContainer>
                  <StateText>State</StateText>
                  <StateInput placeholder="Enter State"></StateInput>
                </StateContainer>
                <PinCodeContainer>
                  <PinCodeText>Pin Code</PinCodeText>
                  <PinCodeInput placeholder="Enter Pin Code"></PinCodeInput>
                </PinCodeContainer>
              </AddNewAddressFormContainerRight>
            </AddNewAddressFormContainer>
          </AddNewAddressContainer>
          <SelectPaymentMethodContainer>
            <SelectPaymentMethodHeadingContainer>
              <SelectPaymentMethodHeading>
                Select Payment Method
              </SelectPaymentMethodHeading>
              <DropdownArrow>
                <SlArrowDown />
              </DropdownArrow>
            </SelectPaymentMethodHeadingContainer>
            <ButtonContainer>
              <BackToCart>Back To Cart</BackToCart>
              <Next>Next</Next>
            </ButtonContainer>
          </SelectPaymentMethodContainer>
        </Left>
        <Right>
          <OrderSummaryContainer>
            <OrderSummaryHeading>Order Summary</OrderSummaryHeading>
            <ItemsContainer>
              {items.map((item) => (
                <ItemContainer>
                  <ItemContainerLeft>
                    <ItemContainerLeftImage></ItemContainerLeftImage>
                  </ItemContainerLeft>
                  <ItemContainerRight>
                    <ItemName>{item.name}</ItemName>
                    <ItemDescription>{item.description}</ItemDescription>
                    <ItemQty>Qty - {item.qty}</ItemQty>
                  </ItemContainerRight>
                </ItemContainer>
              ))}
            </ItemsContainer>
          </OrderSummaryContainer>
          <OrderDetailsContainer>
            <OrderDetailsHeading>Order Details</OrderDetailsHeading>
            <SubTotalContainer>
              <SubtotalText>Sub Total</SubtotalText>
              <SubtotalAmount>$111</SubtotalAmount>
            </SubTotalContainer>
            <DiscountContainer>
              <DiscountText>Discount</DiscountText>
              <DiscountAmount>$111</DiscountAmount>
            </DiscountContainer>
            <DeliveryFeeContainer>
              <DeliveryFeeText>Delivery Fee</DeliveryFeeText>
              <DeliveryFeeAmount>$111</DeliveryFeeAmount>
            </DeliveryFeeContainer>
            <GrandTotalContainer>
              <GrandTotalText>Grand Total</GrandTotalText>
              <GrandTotalAmount>$111</GrandTotalAmount>
            </GrandTotalContainer>
          </OrderDetailsContainer>
        </Right>
      </Container>
      <AppFooter />
    </>
  );
};

export default Checkout;
