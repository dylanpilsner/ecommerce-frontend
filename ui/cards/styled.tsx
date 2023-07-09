import styled from "styled-components";

export const ProductCardContainer = styled.div`
  cursor: pointer;
  height: 321px;
  width: 315px;
  border: 4px solid;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    :hover {
      box-shadow: 0 0 10px 4px rgba(76, 73, 73, 0.5);
      transition: 0.3s;
    }
  }
`;

export const ImgContainer = styled.div`
  height: 237px;
  width: 100%;
`;

export const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ProductDataContainer = styled.div`
  width: 100%;
  height: 85px;
  background-color: var(--fucsia);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
