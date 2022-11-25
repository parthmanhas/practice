import { RiArrowRightSLine } from "react-icons/ri";
import styled from "styled-components/macro";

const Container = styled.div``;
const OrdersHeadingContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  padding: 1rem 0;
  margin: 1rem 0;
  display: flex;
`;
const OrderHeadingItem = styled.div`
  padding-left: 1rem;
  flex: 1;
`;
const OrderItemContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.grey};
  padding: 1rem 0;
  margin: 1rem 0;
`;
const OrderId = styled.div`
  padding-left: 1rem;
  flex: 1;
`;
const OrderDate = styled.div`
  padding-left: 1rem;
  flex: 1;
`;
const OrderPrice = styled.div`
  padding-left: 1rem;
  flex: 1;
`;

const OrderStatusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding-left: 1rem;
`;

const OrderStatus = styled.div`
`;

const Arrow = styled.div`
    padding-right: 1rem;
`;

const orders = [
  {
    id: "745738999573",
    datePlaced: "September 5, 2022",
    price: "216.45",
    status: "paid",
  },
  {
    id: "745738999573",
    datePlaced: "September 5, 2022",
    price: "216.45",
    status: "delivered",
  },
  {
    id: "745738999573",
    datePlaced: "September 5, 2022",
    price: "216.45",
    status: "cancelled",
  },
  {
    id: "745738999573",
    datePlaced: "September 5, 2022",
    price: "216.45",
    status: "paid",
  },
];

const FulfilledOrders = () => {
  return (
    <Container>
      <OrdersHeadingContainer>
        <OrderHeadingItem>Order Id</OrderHeadingItem>
        <OrderHeadingItem>Date</OrderHeadingItem>
        <OrderHeadingItem>Price</OrderHeadingItem>
        <OrderHeadingItem>Status</OrderHeadingItem>
      </OrdersHeadingContainer>
      {orders.map((order) => (
        <OrderItemContainer>
          <OrderId>#{order.id}</OrderId>
          <OrderDate>{order.datePlaced}</OrderDate>
          <OrderPrice>${order.price}</OrderPrice>
          <OrderStatusContainer>
            <OrderStatus>{order.status}</OrderStatus>
            <Arrow>
              <RiArrowRightSLine />
            </Arrow>
          </OrderStatusContainer>
        </OrderItemContainer>
      ))}
    </Container>
  );
};

export default FulfilledOrders;
