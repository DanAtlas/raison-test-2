import FormCheckbox from '../form-checkbox/FormCheckbox';
import FormInput from '../form-input/FormInput';
import type { StepOneFormProps } from './StepOneForm.types';

const StepOneForm = ({ 
  inputValue,
  checkboxValue,
  onFormInputChange, 
  onCheckboxChange, 
  onTouchStartEvent,
  onTouchEndEvent,
  onMouseDownEvent, 
  onMouseUpEvent, 
  onMouseLeaveEvent,
  enabled
}: StepOneFormProps) => {
  return (
    <>
      <FormInput onChange={onFormInputChange} defaultValue={inputValue} />
      <div className="p-1"></div>
      <FormCheckbox onClick={onCheckboxChange} defaultChecked={checkboxValue} />
      <button
        onTouchStart={onTouchStartEvent} 
        onTouchEnd={onTouchEndEvent} 
        onMouseDown={onMouseDownEvent}
        onMouseUp={onMouseUpEvent}
        onMouseLeave={onMouseLeaveEvent}
        disabled={enabled} 
        className="btn btn-primary mt-auto"
      >
        Hold to proceed
      </button>
    </>
  )
}

export default StepOneForm;