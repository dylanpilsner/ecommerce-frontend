import {
  StyledHeaderButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledTertiaryButton,
} from "./styled";

type Button = {
  text: string;
  callback?: () => void;
};

export function PrimaryButton({ text, callback }: Button) {
  function handleClick() {
    if (callback) {
      callback();
    }
  }

  return (
    <StyledPrimaryButton onClick={handleClick}>{text}</StyledPrimaryButton>
  );
}

export function SecondaryButton({ text, callback }: Button) {
  function handleClick() {
    if (callback) {
      callback();
    }
  }
  return (
    <StyledSecondaryButton onClick={handleClick}>{text}</StyledSecondaryButton>
  );
}
export function TertiaryButton({ text, callback }: Button) {
  function handleClick() {
    if (callback) {
      callback();
    }
  }
  return (
    <StyledTertiaryButton onClick={handleClick}>{text}</StyledTertiaryButton>
  );
}

type HeaderButton = {
  text: string;
  callback?: () => void;
  display: "initial" | "none";
};

export function HeaderButton({ text, callback, display }: HeaderButton) {
  function handleClick() {
    if (callback) {
      callback();
    }
  }
  return (
    <StyledHeaderButton onClick={handleClick} display={display}>
      {text}
    </StyledHeaderButton>
  );
}
