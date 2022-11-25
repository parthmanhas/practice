import { BsStarFill, BsStar } from "react-icons/bs";
import styled from "styled-components/macro";

const StarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Stars = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
`;

const Rating = styled.div``;

const StarRating = ({ stars }: {stars: number}) => {
  return (
    <StarsContainer>
      <Stars>
        {stars &&
          [0, 0, 0, 0, 0].map((val, index) => {
            if (index < stars) return <BsStarFill key={index} />;
            return <BsStar key={index} />;
          })}
      </Stars>
      <Rating>43 Rating</Rating>
    </StarsContainer>
  );
};

export default StarRating;
