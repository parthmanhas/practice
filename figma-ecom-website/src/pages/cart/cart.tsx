import styled from "styled-components";
import Coupon from "../../components/coupon/Coupon";
import AppFooter from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const NavInfo = styled.div``;
const MyCartHeading = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const ItemsOrderSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto)
`;
const OrderSummary = styled.div``;
const OrderSummaryHeading = styled.div``;
const SubTotal = styled.div``;
const Discount = styled.div``;
const DeliveryFee = styled.div``;
const Buttons = styled.div``;
const PlaceOrder = styled.div``;
const GrandTotal = styled.div``;
const ContinueShopping = styled.div``;

const ItemImage = styled.div``;
const ItemDetailsContainer = styled.div``;
const ItemName = styled.div``;
const ItemDescription = styled.div``;
const PriceContainer = styled.div``;
const Price = styled.div``;
const MoveToWishlist = styled.div``;
const Qty = styled.div``;
const QtyContainer = styled.div``;
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
      <NavInfo>Home &gt; My Cart</NavInfo>
      <MyCartHeading>My Cart</MyCartHeading>
      <ItemsOrderSummaryContainer>
        <Items>
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
                <Qty></Qty>
                <Remove>Remove</Remove>
              </QtyContainer>
              <ItemSubtotal>{item.qty * Number(item.price)}</ItemSubtotal>
            </>
          ))}
        </Items>
        <OrderSummary>
          <OrderSummaryHeading></OrderSummaryHeading>
          <SubTotal></SubTotal>
          <Discount></Discount>
          <DeliveryFee></DeliveryFee>
          <GrandTotal></GrandTotal>
          <Buttons>
            <PlaceOrder>Place Order</PlaceOrder>
            <ContinueShopping>Continue Shopping</ContinueShopping>
          </Buttons>
        </OrderSummary>
      </ItemsOrderSummaryContainer>
      <Coupon />
      <AppFooter />
    </>
  );
};

export default cart;
