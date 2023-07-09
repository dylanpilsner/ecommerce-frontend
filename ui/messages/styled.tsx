import styled from "styled-components";

type StyledErrorMessageProps = {
  display: null | "initial";
};

export const StyledErrorMessage = styled.div<StyledErrorMessageProps>`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  border: 1px solid;
  margin: 10px 0px;
  padding: 15px 10px 15px 50px;
  background-repeat: no-repeat;
  background-position: 10px center;
  color: #d8000c;
  background-color: #ffbaba;
  background-image: url("https://i.imgur.com/GnyDvKN.png");
  position: absolute;
  width: 80%;
  top: 80px;
  z-index: -1;
  display: ${(props) => (props.display ? props.display : "none")};
`;
