import styled from "styled-components";

export const BurgerContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  height: 40px;
  width: 52px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const BurgerPiece = styled.div`
  width: 52px;
  height: 6px;
  border-radius: 2px;
  background-color: var(--grey-50);
`;
