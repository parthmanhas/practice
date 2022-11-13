import { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import styled from "styled-components";


const Container = styled.div`
    border: 2px solid ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border-radius: 0.5rem;
    margin-left: 1rem;
`;

const CurrentStep = styled.h3`
    margin-bottom: 0.25rem;
`;

const MinusButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 2rem;
    margin: 0.1rem 0.25rem;
    cursor: pointer;
`;

const PlusButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 2rem;
    margin: 0.1rem 0.25rem;
    cursor: pointer;
`;

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <Container>
      <MinusButton onClick={() => setCurrentStep(currentStep - 1 < 0 ? 0 : currentStep - 1)}>
        <BiMinus />
      </MinusButton>
      <CurrentStep>{currentStep}</CurrentStep>
      <PlusButton onClick={() => setCurrentStep(currentStep + 1)}>
        <BsPlus />
      </PlusButton>
    </Container>
  );
};

export default Stepper;
