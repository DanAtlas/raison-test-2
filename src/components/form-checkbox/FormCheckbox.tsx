import type React from "react";
import type { CheckBoxProps } from "./FormCheckbox.types";

const FormCheckbox: React.FC<CheckBoxProps> = ({ ...props }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-start gap-2">
        <input type="checkbox" className="checkbox checkbox-primary" { ...props } />
        <span className="label-text">I agree</span>
      </label>
    </div>
  )
};

export default FormCheckbox;