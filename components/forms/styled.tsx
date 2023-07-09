import styled from "styled-components";
import { ColumnBoxForm } from "@/ui/box";

type SearchBoxProps = {
  visible: boolean;
};

export const SearchBox = styled(ColumnBoxForm)<SearchBoxProps>`
  display: ${(props) => (props?.visible ? "flex" : "none")};
  margin: 20px auto;
  gap: 10px;
  width: 100%;
  @media (min-width: 769px) {
    flex-direction: row;
    margin: 0;
  }
`;

export const ProfileBox = styled(ColumnBoxForm)`
  gap: 20px;
  max-width: 330px;
  margin: auto;

  @media (min-width: 769px) {
    max-width: 460px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  @media (min-width: 769px) {
    max-width: 150px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  @media (min-width: 769px) {
    max-width: 300px;
  }
`;
