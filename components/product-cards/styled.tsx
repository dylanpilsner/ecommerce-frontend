import styled from "styled-components";
import { ColumnDirectionBox } from "@/ui/box";

type ProductCardsContainerProps = {
  margin?: string;
};

export const ProductCardsContainer = styled.div<ProductCardsContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : "0")};

  @media (min-width: 769px) {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px 10px;
  }
`;
