import styled from "styled-components";
import { RegularBody, RegularLarge } from "../typography";

export const SignOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const StyledSignOut = styled(RegularLarge)`
  color: var(--fucsia);

  :hover {
    text-decoration: underline;
  }
`;

export const User = styled(RegularBody)`
  color: white;
`;

type SignOutContainerDesktopProps = {
  display: "flex" | "none";
};

export const SignOutContainerDesktop = styled(
  SignOutContainer
)<SignOutContainerDesktopProps>`
  display: none;

  @media (min-width: 769px) {
    cursor: pointer;
    display: ${(props) => (props.display ? props.display : "none")};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }
`;
