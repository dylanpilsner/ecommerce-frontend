import styled from "styled-components";
import { TinySpan } from "../typography";

export const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  border: 3px solid;
  border-radius: 8px;
  font-family: "Inter";
  font-weight: 700;
  font-size: 16px;
  text-align: center;

  ::placeholder {
    color: #c1c1c1;
  }

  @media (min-width: 769px) {
    height: 42px;
  }
`;

export const StyledSearchBarInput = styled(StyledInput)`
  background-color: rgba(0, 0, 0, 0);
  border-color: white;
  color: white;
`;

export const StyledLabel = styled(TinySpan).attrs({ as: "label" })``;
