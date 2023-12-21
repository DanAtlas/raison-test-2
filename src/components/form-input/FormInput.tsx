import React from "react";
import type { InputProps } from './FormInput.types';

const FormInput: React.FC<InputProps> = ({ ...props }) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">Email</span>
      </div>
      <input type="email" placeholder="Type here" className="input" {...props} />
      {/* <div className="label">
        <span className="label-text-alt">Helper text</span>
      </div> */}
    </label>
  )
}

export default FormInput;