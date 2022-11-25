import styled from "styled-components/macro";
import AppFooter from "../components/footer/Footer";
import Header from "../components/header/Header";
import SideBar from "../components/SideBar";

const Container = styled.div`
  display: flex;
  margin: 1.5rem;
`;
const ContainerLeft = styled.div``;
const ContainerRight = styled.div`
  flex: 1;
`;
const OrderStatusContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.grey};
  padding: 1rem;
  margin: 0.5rem;
  margin-top: 0;
`;
const OrderStatus = styled.div`
  padding: 0.5rem;
`;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemsHeading = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightText};
`;
const ItemsHeadingName = styled.div`
  flex: 3;
`;
const ItemsHeadingPrice = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;
const ItemsHeadingQuantity = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;
const ItemsHeadingSubtotal = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;
const OrderInformationContainer = styled.div`
  margin: 0.5rem;
`;
const OrderInformationHeading = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  padding-bottom: 1rem;
  margin: 0.5rem;
  margin-bottom: 1rem;
`;
const OrderInformationSubContainer = styled.div`
  display: flex;
`;
const OrderDetailsContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
`;
const OrderDetailsHeading = styled.div`
  margin-bottom: 0.5rem;
`;
const SubtotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;
const SubtotalHeading = styled.div``;
const Subtotal = styled.div``;
const DiscountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;
const DiscountHeading = styled.div``;
const Discount = styled.div``;
const DeliveryFeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;
const DeliveryFeeHeading = styled.div``;
const DeliveryFee = styled.div``;
const GrandTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const GrandTotalHeading = styled.div``;
const GrandTotal = styled.div``;
const PaymentDetailsContainer = styled.div`
  flex: 1;
`;
const PaymentDetailsHeading = styled.div`
  margin-bottom: 0.5rem;
`;
const PaymentDetails = styled.div``;
const AddressDetailsContainer = styled.div`
  flex: 1;
`;
const AddressDetailsHeading = styled.div`
  margin-bottom: 0.5rem;
`;
const AddressLine1 = styled.div``;
const AddressLine2 = styled.div``;
const State = styled.div``;
const MobileNumber = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
const Reorder = styled.button``;
const AddRating = styled.button``;

const ItemContainer = styled.div`
  display: flex;
  margin: 0.5rem;
`;
const ItemProductNameContainer = styled.div`
  display: flex;
  flex: 3;
`;
const ItemProductNameContainerLeft = styled.div``;
const ItemProductImage = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.theme.colors.grey};
`;
const ItemProductNameContainerRight = styled.div`
  padding-left: 0.5rem;
`;
const ItemProductName = styled.div``;
const ItemProductDescription = styled.div``;
const ItemPriceContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;
const ItemQtyContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;
const ItemSubtotalContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;

const OrderDetails = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerLeft>
          <SideBar />
        </ContainerLeft>
        <ContainerRight>
          <OrderStatusContainer>
            <OrderStatus>Items Ordered</OrderStatus>
            <OrderStatus>Invoices</OrderStatus>
            <OrderStatus>Order Shipment</OrderStatus>
          </OrderStatusContainer>
          <ItemsContainer>
            <ItemsHeading>
              <ItemsHeadingName>Product Name</ItemsHeadingName>
              <ItemsHeadingPrice>Price</ItemsHeadingPrice>
              <ItemsHeadingQuantity>Qty</ItemsHeadingQuantity>
              <ItemsHeadingSubtotal>Subtotal</ItemsHeadingSubtotal>
            </ItemsHeading>
            <ItemContainer>
              <ItemProductNameContainer>
                <ItemProductNameContainerLeft>
                  <ItemProductImage></ItemProductImage>
                </ItemProductNameContainerLeft>
                <ItemProductNameContainerRight>
                  <ItemProductName>Coach</ItemProductName>
                  <ItemProductDescription>
                    Leather Coach Bag
                  </ItemProductDescription>
                </ItemProductNameContainerRight>
              </ItemProductNameContainer>
              <ItemPriceContainer>$211</ItemPriceContainer>
              <ItemQtyContainer>2</ItemQtyContainer>
              <ItemSubtotalContainer>$333</ItemSubtotalContainer>
            </ItemContainer>
          </ItemsContainer>
          <OrderInformationContainer>
            <OrderInformationHeading>Order Information</OrderInformationHeading>
            <OrderInformationSubContainer>
              <OrderDetailsContainer>
                <OrderDetailsHeading>Order Details</OrderDetailsHeading>
                <SubtotalContainer>
                  <SubtotalHeading>Sub Total</SubtotalHeading>
                  <Subtotal>$333</Subtotal>
                </SubtotalContainer>
                <DiscountContainer>
                  <DiscountHeading>Discount</DiscountHeading>
                  <Discount>-$11</Discount>
                </DiscountContainer>
                <DeliveryFeeContainer>
                  <DeliveryFeeHeading>Delivery Fee</DeliveryFeeHeading>
                  <DeliveryFee>-$0.00</DeliveryFee>
                </DeliveryFeeContainer>
                <GrandTotalContainer>
                  <GrandTotalHeading>Grand Total</GrandTotalHeading>
                  <GrandTotal>$106.29</GrandTotal>
                </GrandTotalContainer>
              </OrderDetailsContainer>
              <PaymentDetailsContainer>
                <PaymentDetailsHeading>Payment Details</PaymentDetailsHeading>
                <PaymentDetails>Cash on Delivery (COD)</PaymentDetails>
              </PaymentDetailsContainer>
              <AddressDetailsContainer>
                <AddressDetailsHeading>Address Details</AddressDetailsHeading>
                <AddressLine1>Vincent Lobo</AddressLine1>
                <AddressLine2>3068 Woodlawn Drive</AddressLine2>
                <State>Milwaukee</State>
                <MobileNumber>414-617-5388</MobileNumber>
              </AddressDetailsContainer>
            </OrderInformationSubContainer>
          </OrderInformationContainer>
          <ButtonContainer>
            <Reorder>Reorder</Reorder>
            <AddRating>Add Rating</AddRating>
          </ButtonContainer>
        </ContainerRight>
      </Container>
      <AppFooter />
    </>
  );
};

export default OrderDetails;
