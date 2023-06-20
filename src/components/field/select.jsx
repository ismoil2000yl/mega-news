import { Select } from "antd";
import React from "react";

const select = ({
  options,
  placeholder,
  label,
  field: { value, name },
  optionLabelProp = "label",
  form: { setFieldValue, errors, touched, setFieldTouched },
}) => {
  return (
    <div className="mb-5">
      {label ? <h2 className="text-sm">{label}</h2> : null}

    <Select
      rootClassName="w-full"
      options={options}
      defaultValue={value}
      placeholder={placeholder}
      optionLabelProp={optionLabelProp}
      onChange={(e) => setFieldValue(name, e)}
      />
      </div>
  );
};

export default select;
