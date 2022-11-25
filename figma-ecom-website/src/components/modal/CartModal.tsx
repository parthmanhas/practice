import styled from "styled-components/macro";
import Stepper from "../stepper/Stepper";
import { MdCancel } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import Coupon from "../coupon/Coupon";
import { getItemsFromCart } from "../../shared/StateManagement";

const Container = styled.div``;

const CartModalContainer = styled.div<{ emptyCart?: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  z-index: 99;
  width: 25vw;
  opacity: 1;
  padding: 1rem;
  margin: 1rem;
  background-color: ${(props) =>
    props.emptyCart ? props.theme.colors.grey : props.theme.colors.bright};
    border: 1px solid ${props => props.theme.colors.primary};
`;

const Top = styled.div<ITop>`
  display: flex;
  justify-content: ${(props) => (props.emptyCart ? "space-between" : "end")};
  background-color: ${(props) => props.emptyCart ? props.theme.colors.accent : 'inherit'};
`;

interface ITop {
  emptyCart?: boolean;
}
const Items = styled.div``;
const Total = styled.div`
  margin: 1rem 0;
`;
const PlaceOrder = styled.button`
  border: none;
  margin-top: 1rem;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.bright};
  background-color: ${(props) => props.theme.colors.primary};
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
const Item = styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightText};
`;
const ItemImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.grey};
  margin-right: 1rem;
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ItemContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const ProductName = styled.div``;
const Cross = styled.div``;
const ItemContentMiddle = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 0.5rem;
`;
const ProductDescription = styled.div``;
const ItemContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Quantity = styled.div`
  font-size: 0.5rem;
`;
const Price = styled.div``;
const SubTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SubTotalext = styled.div``;
const SubTotalAmount = styled.div``;
const TaxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TaxText = styled.div``;
const TaxAmount = styled.div``;
const TotalAmount = styled.div``;
const TotalText = styled.div``;
const TotalAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Modal = ({ setShowModal }: { setShowModal: any }) => {
  const items = getItemsFromCart();

  const itemsPresent = items.length > 0;

  if (itemsPresent) {
    return (
      <Container>
        <CartModalContainer>
          <Top>
            <GrClose onClick={() => setShowModal(false)} />
          </Top>
          <Items>
            {items.map((item) => (
              <Item>
                <ItemImage></ItemImage>
                <ItemContent>
                  <ItemContentTop>
                    <ProductName>{item.name}</ProductName>
                    <Cross onClick={() => setShowModal(false)}>
                      <MdCancel />
                    </Cross>
                  </ItemContentTop>
                  <ItemContentMiddle>
                    <ProductDescription>{item.description}</ProductDescription>
                  </ItemContentMiddle>
                  <ItemContentBottom>
                    <Quantity>
                      <Stepper fontSize={0.75} />
                    </Quantity>
                    <Price>{item.price}</Price>
                  </ItemContentBottom>
                </ItemContent>
              </Item>
            ))}
          </Items>
          <Total>
            <SubTotalContainer>
              <SubTotalext>Subtotal:</SubTotalext>
              <SubTotalAmount>$54.69</SubTotalAmount>
            </SubTotalContainer>
            <TaxContainer>
              <TaxText>Tax:</TaxText>
              <TaxAmount>$54.69</TaxAmount>
            </TaxContainer>
            <TotalAmountContainer>
              <TotalText>Total:</TotalText>
              <TotalAmount>$54.69</TotalAmount>
            </TotalAmountContainer>
          </Total>
          <Coupon></Coupon>
          <PlaceOrder>Place Order</PlaceOrder>
          <Bottom>Continue Shopping</Bottom>
        </CartModalContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <CartModalContainer emptyCart>
          <Top emptyCart>
            <h2>Shopping Cart Empty!</h2>
            <GrClose onClick={() => setShowModal(false)} />
          </Top>
        </CartModalContainer>
      </Container>
    );
  }
};

export default Modal;
