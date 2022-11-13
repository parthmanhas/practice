import { BsGrid3X3GapFill } from "react-icons/bs";
import { GrSort } from "react-icons/gr";
import styled from "styled-components";
import Filter from "../../components/filter/Filter";
import AppFooter from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductItem from "../../components/product/ProductItem";
import { filters, productItems } from "../../Mocks";

const Banner = styled.div`
  margin: 1.5rem;
  width: calc(100% - 3rem);
  height: 80vh;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.grey};
`;
const CategoryInfo = styled.div`
  margin: 1.5rem;
`;
const CategoryNavigation = styled.div``;
const CategoryName = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;
const MainContainer = styled.div`
  display: flex;
  width: calc(100% - 3rem);
  margin: 1.5rem;
`;
const MainLeft = styled.div`
  width: 30%;
`;
const MainRight = styled.div`
  width: 70%;
`;
const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Icon = styled.div`
    margin: 0.25rem;
    font-size: 1.75rem;
`;
const ShowingItemsInfo = styled.div`
  margin-left: 0.5rem;
`;
const MainRightTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;
const ToShowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ToShow = styled.select`
  background-color: ${(props) => props.theme.colors.grey};
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  margin-left: 0.25rem;
`;
const SortBy = styled.select`
  background-color: ${(props) => props.theme.colors.grey};
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  margin-left: 0.25rem;
`;
const SortByContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainRightBottom = styled.div``;
const Pagination = styled.ul`
  display: flex;
  background-color: ${(props) => props.theme.colors.grey};
  list-style: none;
  border-radius: 0.5rem;
`;

interface CategoryProps {
  primary?: boolean;
}

const PaginationItem = styled.li<CategoryProps>`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : "inherit"};
  color: ${(props) => (props.primary ? props.theme.colors.bright : "inherit")};
  border-radius: 0.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainRightMiddle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Category = () => {
  return (
    <>
      <Header />
      <Banner></Banner>
      <CategoryInfo>
        <CategoryNavigation>Home &gt; Handbags</CategoryNavigation>
        <CategoryName>Handbags</CategoryName>
      </CategoryInfo>
      <MainContainer>
        <MainLeft>
          {filters.map((filter) => (
            <Filter data={filter} />
          ))}
        </MainLeft>
        <MainRight>
          <MainRightTop>
            <Layout>
              <Icon>
                <BsGrid3X3GapFill />
              </Icon>
              <Icon>
                <GrSort />
              </Icon>
              <ShowingItemsInfo>Showing 1-40 of 145 items</ShowingItemsInfo>
            </Layout>
            <ToShowContainer>
              <p>To Show:</p>
              <ToShow>
                <option value="9">9</option>
                <option value="18">18</option>
                <option value="27">27</option>
              </ToShow>
            </ToShowContainer>
            <SortByContainer>
              <p>Sort By</p>
              <SortBy>
                <option value="ratings">Ratings</option>
                <option value="stars">Stars</option>
                <option value="trending">Trending</option>
              </SortBy>
            </SortByContainer>
          </MainRightTop>
          <MainRightMiddle>
            {productItems.map((productItem) => (
              <ProductItem stars={3} product={productItem} />
            ))}
          </MainRightMiddle>
          <MainRightBottom>
            <Pagination>
              <PaginationItem primary>1</PaginationItem>
              <PaginationItem>2</PaginationItem>
              <PaginationItem>3</PaginationItem>
              <PaginationItem>4</PaginationItem>
              <PaginationItem>5</PaginationItem>
            </Pagination>
          </MainRightBottom>
        </MainRight>
      </MainContainer>
      <AppFooter />
    </>
  );
};

export default Category;
