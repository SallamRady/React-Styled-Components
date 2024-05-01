import styled from "styled-components";

export const StyledButton = styled.button<StyledButtonType>`
  background-color: ${(props) =>
    props?.variant == "oulined" ? "#fff" : "#bf4f74"};
  color: white;
  font-size: 1em;
  font-weight: 600;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
`;

type StyledButtonType = {
  variant?: string;
};
