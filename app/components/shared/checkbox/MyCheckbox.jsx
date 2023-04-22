import { useState } from "react";
import s from "./MyCheckbox.module.scss";
import CheckboxMark from "../../ui/icons/CheckboxMark";

const MyCheckbox = ({value, setValue}) => {

  return value === true ? (
    <div
      className={[s.checkbox, s.checked].join(" ")}
      onClick={() => setValue(false)}
    >
      <CheckboxMark />
    </div>
  ) : (
    <div
      className={[s.checkbox, s.notChecked].join(" ")}
      onClick={() => setValue(true)}
    ></div>
  );
};

export default MyCheckbox;
