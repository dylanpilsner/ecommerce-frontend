import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  width: 100%;
  height: 100%;
  top: 0;
`;

export const HeaderContainer = styled.div`
  background-color: black;
  width: 100%;
  padding: 20px 20px;
  position: sticky;
  z-index: 2;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DesktopSearchBarContainer = styled.div`
  display: none;
  width: 100%;

  @media (min-width: 769px) {
    display: flex;
  }
`;

export const MobileSearchBarContianer = styled.div`
  width: 100%;
  @media (min-width: 769px) {
    display: none;
  }
`;
