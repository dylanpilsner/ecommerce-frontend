import { StyledErrorMessage } from "./styled";

export function ErrorMessage({ text }: any) {
  const isVisible = text ?? "initial";

  return <StyledErrorMessage display={isVisible}>{text}</StyledErrorMessage>;
}
