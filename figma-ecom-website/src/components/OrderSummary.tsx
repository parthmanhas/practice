import styled from "styled-components/macro";
const Container = styled.div`
  width: 100%;
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

const OrderSummary = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default OrderSummary;
