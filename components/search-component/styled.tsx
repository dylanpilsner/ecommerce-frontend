import styled from "styled-components";
import { ColumnDirectionBox } from "@/ui/box";
import { RegularLarge } from "@/ui/typography";

export const SearchBox = styled(ColumnDirectionBox)``;

export const SeeMore = styled(RegularLarge)`
  :hover {
    cursor: pointer;
    color: var(--azul-oscuro);
    text-decoration: underline;
  }
`;
