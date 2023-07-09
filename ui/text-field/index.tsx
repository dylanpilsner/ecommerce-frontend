import { StyledInput, StyledLabel, StyledSearchBarInput } from "./styled";

type InputComponent = {
  placeholder: string;
  name: string;
  type?: string;
  required?: boolean;
};

export function Input({
  placeholder,
  name,
  type = "text",
  required,
}: InputComponent) {
  const isRequired = required ? true : false;

  return (
    <StyledInput
      placeholder={placeholder}
      name={name}
      type={type}
      required={isRequired}
    />
  );
}
export function SearchBarInput({
  placeholder,
  name,
  type = "text",
}: InputComponent) {
  return (
    <StyledSearchBarInput placeholder={placeholder} name={name} type={type} />
  );
}

type TextField = {
  placeholder: string;
  name: string;
  type: string;
  text?: string;
  display?: string | undefined;
  required?: boolean;
};

export function TextField({
  text,
  name,
  placeholder,
  type = "text",
  display = "initial",
  required,
}: TextField) {
  return (
    <StyledLabel style={{ width: "100%", display }}>
      <div style={{ marginBottom: 5 }}>{text}</div>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </StyledLabel>
  );
}
