import FormInput from '../form-input/FormInput';
import type { StepTwoFormProps } from './StepTwoForm.types';

const StepTwoForm = ({ inputValue, onButtonClickBack, onSubmit }: StepTwoFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <FormInput value={inputValue} readOnly />
      <div className="p-10"></div>
      <div className="p-10"></div>
      <div className="p-10"></div>
      <div className="p-10"></div>
      <div className="p-10"></div>
      <div className="p-4"></div>
      <div className="flex justify-between">
        <button onClick={onButtonClickBack} className="btn bg-gray-800 mt-auto w-5/12">Back</button>
        <button type="submit" className="btn btn-primary mt-auto w-5/12">Confirm</button>
      </div>
    </form>
  )
}

export default StepTwoForm;