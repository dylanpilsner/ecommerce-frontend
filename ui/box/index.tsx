import styled from "styled-components";

type ColumnDirectionBoxProps = {
  gap?: string;
  width?: string;
};

export const ColumnDirectionBox = styled.div<ColumnDirectionBoxProps>`
  /* height: 100%; */
  width: ${(props) => (props.width ? props.width : "100%")};
  gap: ${(props) => (props.gap ? props.gap : 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const RowDirectionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColumnBoxForm = styled(ColumnDirectionBox).attrs({ as: "form" })``;
