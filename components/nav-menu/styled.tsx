import { Subtitle, RegularLarge, RegularBody } from "@/ui/typography";
import styled, { keyframes } from "styled-components";

const showsUp = keyframes`
  100%{
    top:0px;
  }
`;
const disappears = keyframes`
0%{
  top:84px;
}
  100%{
    top:-1000px;
  }
`;

export const NavMenuContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  justify-content: center;
  background-color: black;
  height: 100%;
  width: 100%;
  top: -1000px;
  left: 0;
  right: 0;
  animation-duration: 0.3s;
  animation-name: ${({ className }: any) =>
    className === "opened"
      ? showsUp
      : className === "closed"
      ? disappears
      : null};
  /* ${showsUp}; */
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  z-index: 1;
`;

export const Nav = styled(Subtitle).attrs({ as: "nav" })`
  color: var(--grey-50);

  :hover {
    text-decoration: underline;
  }
`;
