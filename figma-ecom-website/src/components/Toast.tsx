import styled from "styled-components/macro";
import { useState } from "react";

const Container = styled.div<{ showToast: boolean, duration?: number }>`
  position: absolute;
  left: calc(90vw / 2);
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.bright};
  padding: 1rem;
  border-radius: 3px;
  display: ${(props) => (props.showToast ? "block" : "none")};
`;

const Toast = ({
  content,
  duration,
  alwaysDisplay = false,
}: {
  content: string;
  duration?: number;
  alwaysDisplay?: boolean;
}) => {
  const [showToast, setShowToast] = useState(alwaysDisplay);
  if (!alwaysDisplay) {
    setTimeout(() => {
      setShowToast(false);
    }, duration);
  }
  return <Container showToast={showToast}><h4>{content}</h4></Container>;
};

export default Toast;
