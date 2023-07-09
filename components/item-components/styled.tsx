import styled from "styled-components";
import { ColumnDirectionBox } from "@/ui/box";

export const ItemBox = styled(ColumnDirectionBox)`
  padding: 20px;

  @media (min-width: 769px) {
    flex-direction: row;
    padding: 100px;
  }
`;

export const ItemImgContainer = styled.div`
  width: 330px;
  height: 240px;
  border-radius: 3px;

  @media (min-width: 769px) {
    width: 810px;
    height: 385px;
  }
`;

export const ItemInformationContainer = styled(ColumnDirectionBox)`
  max-width: 330px;
  margin: 20 0;

  @media (min-width: 769px) {
    max-width: 400px;
  }
`;

export const ItemImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const CardImg = styled.img``;
