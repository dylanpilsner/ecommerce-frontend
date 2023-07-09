import styled from "styled-components";
import { RegularBody } from "@/ui/typography";
import { RegularLarge } from "@/ui/typography";
import { ColumnDirectionBox } from "@/ui/box";

export const StyledFooter = styled.footer`
  display: flex;
  height: 648px;
  width: 100%;
  background-color: black;
  margin-top: auto;
  @media (min-width: 769px) {
    height: 408px;
  }
`;

export const WhiteRegularBody = styled(RegularBody)`
  color: white;
`;

export const WhiteRegularLarge = styled(RegularLarge)`
  color: white;
`;

export const FooterContainer = styled(ColumnDirectionBox)`
  justify-content: flex-start;
  align-items: flex-start;
  padding: 100px 20px;
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 100px 120px;
  }
`;

export const NavigationBox = styled(ColumnDirectionBox)`
  align-items: flex-start;
  justify-content: space-between;
`;
