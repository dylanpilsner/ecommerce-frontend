import { BurgerContainer, BurgerPiece } from "./styled";

export function Burger({ handleClick }: any) {
  return (
    <BurgerContainer onClick={handleClick}>
      <BurgerPiece />
      <BurgerPiece />
      <BurgerPiece />
    </BurgerContainer>
  );
}
