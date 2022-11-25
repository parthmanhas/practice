import { BiHeart } from "react-icons/bi";
import { BsBag, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { addToCart, addToWishlist } from "../../shared/StateManagement";
import Offer from "../offer/Offer";
import StarRating from "../stars/StarRating";
import Stepper from "../stepper/Stepper";
import Toast from "../Toast";
import { useState } from "react";

const Product = styled.div`
  margin-bottom: 2rem;
`;

const ProductTop = styled.div`
  height: calc(100vw / 5);
  width: calc(100vw / 5);
  background-color: ${(props) => props.theme.colors.grey};
  margin-bottom: 0.5rem;
`;

const ProductBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductBottomLeft = styled.div``;

const ProductName = styled.p`
  color: ${(props) => props.theme.colors.dark};
`;

const ProductDescription = styled.p`
  color: ${(props) => props.theme.colors.lightText};
`;

const ProductAmount = styled.p`
  color: ${(props) => props.theme.colors.dark};
`;

const ProductBottomRight = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    padding: 1rem;
    margin: 0.75rem;
    margin-top: 0;
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

// const ProductName = styled.div``;
// const ProductDescription = styled.div``;
const ProductAmounts = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.grey};
  width: 100%;
`;
const ProductDiscountedAmount = styled.h1`
  margin-right: 1rem;
`;
const ProductOriginalAmount = styled.h1`
  margin-right: 1rem;
`;
const ProductDiscountText = styled.h3``;
const DeliveryDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
`;
const DeliveryDetails = styled.div`
  width: 50%;
`;
const DeliveryDetailsHeading = styled.h3``;
const DeliveryDetailsText = styled.h4`
  color: ${(props) => props.theme.colors.lightText};
`;
const DeliveryPincodeContainer = styled.div`
  display: flex;
  width: 50%;
  position: relative;
`;

const DeliveryPincodeInput = styled.input`
  font-size: 1rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 0.25rem;
`;

const DeliveryPincodeCheckButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 30%;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;
const Quantity = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
const Offers = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const AddToBag = styled.button`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  width: 49.5%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.bright};
  border: none;
  border-radius: 0.5rem;
`;
const AddToWishlist = styled.button`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  width: 49.5%;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 0.5rem;
`;

export interface IProductItem {
  id: string;
  name: string;
  description: string;
  price: string | number;
  quantity: number;
}

const ProductItem = ({
  product,
  stars,
  layout,
}: {
  product: IProductItem;
  stars?: number;
  layout: number;
}) => {
  const [displayToast, setDisplayToast] = useState(false);

  const handleAddToBag = () => {
    addToCart(product);
    setDisplayToast(true);
    setTimeout(() => setDisplayToast(false), 1000);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  const layoutOne = (
    <StyledLink to="/product">
      <Product>
        <ProductTop></ProductTop>
        <ProductBottom>
          <ProductBottomLeft>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <StarRating stars={3} />
            <ProductAmount>${product.price}</ProductAmount>
          </ProductBottomLeft>
          <ProductBottomRight>
            <BsHeart></BsHeart>
          </ProductBottomRight>
        </ProductBottom>
      </Product>
    </StyledLink>
  );

  const layoutTwo = (
    <>
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <StarRating stars={3} />
      <ProductAmounts>
        <ProductDiscountedAmount>$56.67</ProductDiscountedAmount>
        <ProductOriginalAmount>${product.price}</ProductOriginalAmount>
        <ProductDiscountText>50% OFF</ProductDiscountText>
      </ProductAmounts>
      <DeliveryDetailsContainer>
        <DeliveryDetails>
          <DeliveryDetailsHeading>Delivery Details</DeliveryDetailsHeading>
          <DeliveryDetailsText>
            Check Estimated delivery date/pickup option.
          </DeliveryDetailsText>
        </DeliveryDetails>
        <DeliveryPincodeContainer>
          <DeliveryPincodeInput placeholder="Apply Valid Pincode"></DeliveryPincodeInput>
          <DeliveryPincodeCheckButton>Check</DeliveryPincodeCheckButton>
        </DeliveryPincodeContainer>
      </DeliveryDetailsContainer>
      <Quantity>
        <h3>Quantity:</h3>
        <Stepper fontSize={1} />
      </Quantity>
      <Offers>
        <Offer />
        <Offer />
      </Offers>
      <ButtonContainer>
        <AddToBag onClick={handleAddToBag}>
          <BsBag />
          Add To Bag
        </AddToBag>
        <AddToWishlist onClick={handleAddToWishlist}>
          <BiHeart /> Add To Wishlist
        </AddToWishlist>
      </ButtonContainer>
      {displayToast && (
        <Toast
          alwaysDisplay={true}
          content={"Added To Bag"}
        ></Toast>
      )}
    </>
  );

  if (layout === 1) return layoutOne;
  if (layout === 2) return layoutTwo;

  return null;
};

export default ProductItem;
