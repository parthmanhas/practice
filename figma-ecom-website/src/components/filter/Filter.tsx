import { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey};
  margin-top: 0.5rem;
`;

const FilterInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  font-size: 1.5rem;
`;

const FilterHeading = styled.div``;

const FilterOptions = styled.div``;

const FilterOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
    margin-right: 0.5rem;
`;

export interface IFilter {
  heading: string;
  options: string[];
}

const Filter = ({ data }: { data: IFilter }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <FilterContainer>
      <FilterInfoContainer>
        <FilterHeading>{data.heading}</FilterHeading>
        <IconContainer onClick={() => setExpanded(!expanded)}>
          {expanded ? <BiMinus /> : <BsPlus />}
        </IconContainer>
      </FilterInfoContainer>
      {expanded ? (
        <FilterOptions>
          {data.options.map((option) => (
            <FilterOption>
              <Input type="checkbox"/>
              <label>{option}</label>
            </FilterOption>
          ))}
        </FilterOptions>
      ) : (
        ""
      )}
    </FilterContainer>
  );
};

export default Filter;
