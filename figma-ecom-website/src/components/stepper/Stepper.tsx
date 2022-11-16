import { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.div<IStepper>`
  border: 2px solid ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontSize}rem;
  border-radius: 0.25rem;
`;

const CurrentStep = styled.h3`
  margin-bottom: 0.25rem;
`;

const MinusButton = styled.button<IStepper>`
  background-color: transparent;
  border: none;
  font-size: ${(props) => props.fontSize}rem;
  margin: 0.1rem 0.25rem;
  cursor: pointer;
`;

const PlusButton = styled.button<IStepper>`
  background-color: transparent;
  border: none;
  font-size: ${(props) => props.fontSize}rem;
  margin: 0.1rem 0.25rem;
  cursor: pointer;
`;

interface IStepper {
  fontSize: number;
}

const Stepper = ({ fontSize }: { fontSize: number }) => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <Container fontSize={fontSize}>
      <MinusButton
        fontSize={fontSize * 2}
        onClick={() =>
          setCurrentStep(currentStep - 1 < 0 ? 0 : currentStep - 1)
        }
      >
        <BiMinus />
      </MinusButton>
      <CurrentStep>{currentStep}</CurrentStep>
      <PlusButton
        fontSize={fontSize * 2}
        onClick={() => setCurrentStep(currentStep + 1)}
      >
        <BsPlus />
      </PlusButton>
    </Container>
  );
};

export default Stepper;
