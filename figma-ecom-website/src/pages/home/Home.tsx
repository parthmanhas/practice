import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components/macro";
import AppFooter from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductItem from "../../components/product/ProductItem";
import { productItems, collections, brands } from "../../Mocks";

const Delays = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.colors.grey};
`;

const Hero = styled.div`
  margin: 1.5rem;
  height: 50vh;
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const HeroOverlay = styled.div`
  width: 70%;
  height: 90%;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: ${(props) => props.theme.colors.bright};
`;

const HeroOverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 2rem;
  height: calc(100% - 4rem);
`;

const HeroOverlayHeading = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
`;

const HeroOverlayText = styled.h2`
  color: ${(props) => props.theme.colors.primary};
`;

const HeroOverlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  padding: 0.5rem 2rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.bright};
  font-size: 1rem;
  width: 17%;
`;

const NewArrivals = styled.div`
  margin: 1.5rem;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HandpickedCollectionsContainer = styled.div`
  width: calc(100% - 3rem);
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
`;

const HandpickedCollectionsHeading = styled.h1`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.bright};
`;

const CollectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Collection = styled.div`
  width: calc(100vw / 5);
  height: calc(100vw / 5);
  background-color: ${(props) => props.theme.colors.grey};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const CollectionText = styled.h2`
  margin: 1rem;
  color: ${(props) => props.theme.colors.dark};
`;

const ShopByBrandsContainer = styled.div`
  margin: 1.5rem;
`;
const ShopByBrandsHeading = styled.h1`
  margin: 1rem 0;
`;
const BrandsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Brand = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  height: calc(100vw / 7);
  width: calc(100vw / 7);
  border-radius: 1rem;
`;

const BannerContainer = styled.div`
  height: 100vh;
  margin: 4rem 1.5rem;
`;

const TopBanner = styled.div`
  height: 70%;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grey};
`;

const BottomBanner = styled.div`
  height: 30%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const BottomBannerLeft = styled.div`
  height: 100%;
  width: 49.5%;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grey};
`;
const BottomBannerRight = styled.div`
  height: 100%;
  width: 49.5%;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grey};
`;

const Home = () => {
  return (
    <>
      <Header></Header>
      <Delays>
        We are currently experiencing local customs clearance delays. For the
        latest updates, please check your order status here
      </Delays>
      <Hero>
        <HeroOverlay>
          <HeroOverlayContainer>
            <HeroOverlayHeading>Carry your Funk</HeroOverlayHeading>
            <HeroOverlayText>
              Trendy handbags collection for your party animal
            </HeroOverlayText>
            <HeroOverlayButton>
              <BsArrowRight></BsArrowRight>See more
            </HeroOverlayButton>
          </HeroOverlayContainer>
        </HeroOverlay>
      </Hero>
      <NewArrivals>
        <TopContainer>
          <h3>New Arrivals</h3>
          <h3>View All &gt;</h3>
        </TopContainer>
        <BottomContainer>
          {productItems.map((productItem, index) => (
            <ProductItem layout={2} key={index} product={productItem} />
          ))}
        </BottomContainer>
      </NewArrivals>
      <HandpickedCollectionsContainer>
        <HandpickedCollectionsHeading>
          Handpicked Collections
        </HandpickedCollectionsHeading>
        <CollectionContainer>
          {collections.map((collection) => (
            <Collection>
              <CollectionText>{collection}</CollectionText>
            </Collection>
          ))}
        </CollectionContainer>
      </HandpickedCollectionsContainer>
      <ShopByBrandsContainer>
        <ShopByBrandsHeading>Shop By Brands</ShopByBrandsHeading>
        <BrandsContainer>
          {brands.map((brand) => (
            <Brand></Brand>
          ))}
        </BrandsContainer>
      </ShopByBrandsContainer>
      <BannerContainer>
        <TopBanner></TopBanner>
        <BottomBanner>
          <BottomBannerLeft></BottomBannerLeft>
          <BottomBannerRight></BottomBannerRight>
        </BottomBanner>
      </BannerContainer>
      <AppFooter></AppFooter>
    </>
  );
};

export default Home;
