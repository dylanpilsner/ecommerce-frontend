import { DotSpinner, DotSpinnerDot } from "./styled";

type Loader = {
  visible: boolean;
};

export function Loader({ visible }: Loader) {
  const isVisible = visible ? "flex" : "none";

  return (
    <DotSpinner style={{ margin: "auto" }} display={isVisible}>
      <DotSpinnerDot></DotSpinnerDot>
      <DotSpinnerDot></DotSpinnerDot>
      <DotSpinnerDot></DotSpinnerDot>
      <DotSpinnerDot></DotSpinnerDot>
      <DotSpinnerDot></DotSpinnerDot>
      <DotSpinnerDot></DotSpinnerDot>
      <DotSpinnerDot></DotSpinnerDot>
      <DotSpinnerDot></DotSpinnerDot>
    </DotSpinner>
  );
}
