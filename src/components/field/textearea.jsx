// import React from "react";
// import { Input } from "antd";

// const { TextArea } = Input;

// const TextInput = ({
//   field,
//   label,
//   required = false,
//   placeholder,
//   rows = 6,
//   errorMessage = "Это обизателно поля",
//   form: { setFieldValue, setFieldError, setFieldTouched, errors, touched },
// }) => {
//   return (
//     <div className="mb-2">
//       {label ? <h2 className="text-sm">{label}</h2> : null}
//       <TextArea
//         rows={rows}
//         name={field.name}
//         value={field.value}
//         onBlur={() => {
//           setFieldTouched(field.name, true);
//         }}
//         onChange={(e) => setFieldValue(field.name, e.target.value)}
//         placeholder={placeholder}
//         status={
//           !field.value && touched[field.name] && errors[field.name] && "error"
//         }
//       />

//       {touched[field.name] && errors[field.name] && (
//         <small className="text-red-500 font-semibold text-xs">
//           {errors[field.name]}
//         </small>
//       )}
//     </div>
//   );
// };

// export default TextInput;

import React from 'react'

const index = ({
    label="Label", 
    type="text",
    placeholder="placeholder"
}) => {
  return (
    <div className='textarea'>
        {label ? <h2 className="textarea-label">{label}</h2> : null}
        <textarea 
            className="textarea-item" 
            type={type}
            placeholder={placeholder}
        />
    </div>
  )
}

export default index
