import { BiHeart } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import styled from "styled-components";
import AppFooter from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Offer from "../../components/offer/Offer";
import StarRating from "../../components/stars/StarRating";
import Stepper from "../../components/stepper/Stepper";

const Container = styled.div`
  margin: 1.5rem;
`;

const NavigationInfo = styled.div``;

const ProductContainer = styled.div`
  display: flex;
`;
const ProductContainerLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 50%;
  height: calc(50vw - 3rem);
`;
const ProductImage = styled.div`
  width: calc(50vw - 3rem);
  height: calc(40vw - 3rem);
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 0.5rem;
`;
const ProductImageSlider = styled.div`
  width: calc(50vw - 3rem);
  height: calc(10vw - 3rem);
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 0.5rem;
`;
const ProductName = styled.div``;
const ProductDescription = styled.div``;
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
const ProductDetailedInfoContainer = styled.div``;
const ProductDetailsTabs = styled.div``;

const Product = () => {
  return (
    <>
      <Header />
      <Container>
        <NavigationInfo>Home &gt; Handbags &gt; Coach</NavigationInfo>
        <ProductContainer>
          <ProductContainerLeft>
            <ProductImage></ProductImage>
            <ProductImageSlider></ProductImageSlider>
          </ProductContainerLeft>
          <ProductContainerRight>
            <ProductName>Coach</ProductName>
            <ProductDescription>
              Leather Bag with adjustable straps
            </ProductDescription>
            <StarRating stars={3} />
            <ProductAmounts>
              <ProductDiscountedAmount>$56.67</ProductDiscountedAmount>
              <ProductOriginalAmount>$70.00</ProductOriginalAmount>
              <ProductDiscountText>50% OFF</ProductDiscountText>
            </ProductAmounts>
            <DeliveryDetailsContainer>
              <DeliveryDetails>
                <DeliveryDetailsHeading>
                  Delivery Details
                </DeliveryDetailsHeading>
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
              <Stepper />
            </Quantity>
            <Offers>
              <Offer />
              <Offer />
            </Offers>
            <ButtonContainer>
              <AddToBag>
                <BsBag />
                Add To Bag
              </AddToBag>
              <AddToWishlist>
                <BiHeart /> Add To Wishlist
              </AddToWishlist>
            </ButtonContainer>
          </ProductContainerRight>
        </ProductContainer>
        <ProductDetailedInfoContainer>
          <ProductDetailsTabs></ProductDetailsTabs>
        </ProductDetailedInfoContainer>
      </Container>
      <AppFooter />
    </>
  );
};

export default Product;
