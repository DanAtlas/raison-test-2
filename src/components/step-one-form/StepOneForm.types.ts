export type StepOneFormProps = {
  inputValue: string;
  checkboxValue: boolean;
  onFormInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onCheckboxChange: React.MouseEventHandler<HTMLInputElement>;
  onTouchStartEvent: React.TouchEventHandler<HTMLButtonElement>;
  onTouchEndEvent: React.TouchEventHandler<HTMLButtonElement>;
  onMouseDownEvent: React.MouseEventHandler<HTMLButtonElement>;
  onMouseUpEvent: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeaveEvent: React.MouseEventHandler<HTMLButtonElement>;
  enabled: boolean;
}