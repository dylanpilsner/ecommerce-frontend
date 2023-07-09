import styled from "styled-components";

export const StyledPrimaryButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 42px;
  /* height: 37px; */
  background-color: var(--azul);
  color: #fff;
  font-family: "Inter", sans-serif;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
`;

export const StyledSecondaryButton = styled(StyledPrimaryButton)`
  background-color: var(--naranja);
  color: black;
`;

export const StyledTertiaryButton = styled(StyledPrimaryButton)`
  background-color: var(--fucsia);
`;

type StyledHeaderButtonProps = {
  display?: string;
};

export const StyledHeaderButton = styled(
  StyledTertiaryButton
)<StyledHeaderButtonProps>`
  height: 37px;
  width: 163px;
  display: none;
  @media (min-width: 769px) {
    display: ${(props) => (props.display ? props.display : "none")};
  }
`;
