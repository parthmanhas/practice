import { BiHeart } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import styled from "styled-components";
import AppFooter from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Offer from "../../components/offer/Offer";
import ProductItem from "../../components/product/ProductItem";
import StarRating from "../../components/stars/StarRating";
import Stepper from "../../components/stepper/Stepper";
import Tabs from "../../components/tabs/Tabs";

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
            <ProductItem product={{id: '1', description: 'Leather Coach Bag', name: 'Coach', price: '232', quantity: 1}} layout={2}/>
          </ProductContainerRight>
        </ProductContainer>
        <ProductDetailedInfoContainer>
          <ProductDetailsTabs>
            <Tabs />
          </ProductDetailsTabs>
        </ProductDetailedInfoContainer>
      </Container>
      <AppFooter />
    </>
  );
};

export default Product;
