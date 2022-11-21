import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StarRating from "../stars/StarRating";

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

const ProductBottomLeft = styled.div`
`;

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
    border: 1px solid ${props => props.theme.colors.primary};
  }
`;

export interface IProductItem {
  name: string;
  description: string;
  price: string | number;
}

const ProductItem = ({
  product,
  stars,
}: {
  product: IProductItem;
  stars?: number;
}) => {
  return (
    <StyledLink to="/product">
      <Product>
        <ProductTop></ProductTop>
        <ProductBottom>
          <ProductBottomLeft>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <StarRating stars={3}/>
            <ProductAmount>${product.price}</ProductAmount>
          </ProductBottomLeft>
          <ProductBottomRight>
            <BsHeart></BsHeart>
          </ProductBottomRight>
        </ProductBottom>
      </Product>
    </StyledLink>
  );
};

export default ProductItem;
