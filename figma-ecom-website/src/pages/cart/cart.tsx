import styled from "styled-components/macro";
import Coupon from "../../components/coupon/Coupon";
import AppFooter from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Container = styled.div`
  margin: 1.5rem;
`;
const NavInfo = styled.div``;
const MyCartHeading = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const ItemsOrderSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;
const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: 4rem;
  grid-gap: 0.5rem;
  width: 70%;
`;
const ItemsHeadingProductName = styled.div`
  grid-column: 1 / 3;
  border-bottom: 1px solid ${props => props.theme.colors.lightText}
`;
const ItemsHeadingPrice = styled.div`
border-bottom: 1px solid ${props => props.theme.colors.lightText}
`;
const ItemsHeadingQty = styled.div`
    border-bottom: 1px solid ${props => props.theme.colors.lightText}
`;
const ItemsHeadingSubtotal = styled.div`
    border-bottom: 1px solid ${props => props.theme.colors.lightText}
`;
const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  `;
const OrderSummaryHeading = styled.h3`
    padding: 0.5rem 0;
    margin: 0.5rem 0;
    border-bottom: 1px solid ${props => props.theme.colors.grey};
`;
const SubTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SubTotalText = styled.div``;
const SubTotalAmount = styled.div``;
const DiscountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DiscountText = styled.div``;
const DiscountAmount = styled.div``;
const DeliveryFeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DeliveryFeeText = styled.div``;
const DeliveryFeeAmount = styled.div``;
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
`;
const PlaceOrder = styled.button``;
const GrandTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const GrandTotalText = styled.div``;
const GrandTotalAmount = styled.div``;
const ContinueShopping = styled.button``;

const ItemImage = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 0.5rem;
`;
const ItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemName = styled.div``;
const ItemDescription = styled.div``;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Price = styled.div``;
const MoveToWishlist = styled.div``;
const Qty = styled.div``;
const QtyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemSubtotal = styled.div``;
const Remove = styled.div``;

const items: any = [
  {
    name: "Couch",
    description: "Leather Coach Bag",
    price: "54.69",
    qty: 2,
  },
  {
    name: "Couch",
    description: "Leather Coach Bag",
    price: "54.69",
    qty: 2,
  },
];

const cart = () => {
  return (
    <>
      <Header />
      <Container>
        <NavInfo>Home &gt; My Cart</NavInfo>
        <MyCartHeading>My Cart</MyCartHeading>
        <ItemsOrderSummaryContainer>
          <Items>
            <ItemsHeadingProductName>Product Name</ItemsHeadingProductName>
            <ItemsHeadingPrice>Price</ItemsHeadingPrice>
            <ItemsHeadingQty>Qty</ItemsHeadingQty>
            <ItemsHeadingSubtotal>Subtotal</ItemsHeadingSubtotal>
            {items.map((item: any) => (
              <>
                <ItemImage></ItemImage>
                <ItemDetailsContainer>
                  <ItemName>{item.name}</ItemName>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemDetailsContainer>
                <PriceContainer>
                  <Price>${item.price}</Price>
                  <MoveToWishlist>Move To Wishlist</MoveToWishlist>
                </PriceContainer>
                <QtyContainer>
                  <Qty>{item.qty}</Qty>
                  <Remove>Remove</Remove>
                </QtyContainer>
                <ItemSubtotal>{item.qty * Number(item.price)}</ItemSubtotal>
              </>
            ))}
          </Items>
          <OrderSummary>
            <OrderSummaryHeading>Order Summary</OrderSummaryHeading>
            <SubTotalContainer>
              <SubTotalText>Sub Total</SubTotalText>
              <SubTotalAmount>$119</SubTotalAmount>
            </SubTotalContainer>
            <DiscountContainer>
              <DiscountText>Discount</DiscountText>
              <DiscountAmount>-$13</DiscountAmount>
            </DiscountContainer>
            <DeliveryFeeContainer>
              <DeliveryFeeText>Delivery Free</DeliveryFeeText>
              <DeliveryFeeAmount>-$0.00</DeliveryFeeAmount>
            </DeliveryFeeContainer>
            <GrandTotalContainer>
              <GrandTotalText>Grand Total</GrandTotalText>
              <GrandTotalAmount>$119</GrandTotalAmount>
            </GrandTotalContainer>
            <Buttons>
              <PlaceOrder>Place Order</PlaceOrder>
              <ContinueShopping>Continue Shopping</ContinueShopping>
            </Buttons>
          </OrderSummary>
        </ItemsOrderSummaryContainer>
        <Coupon />
      </Container>
      <AppFooter />
    </>
  );
};

export default cart;
