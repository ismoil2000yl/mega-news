// import React from "react";
// import { Input } from "antd";

// const TextInput = ({
//   field,
//   label,
//   className,
//   type,
//   required = false,
//   placeholder,
//   errorMessage = "Это обизателно поля",
//   form: { setFieldValue, setFieldTouched, errors, touched },
// }) => {
//   return (
//     <div className={`${className}`}>
//       {label ? <h2 className="text-sm">{label}</h2> : null}
//       <Input
//         name={field.name}
//         type={type}
//         size="large"
//         value={field.value}
//         onBlur={() => !field.value && setFieldTouched(field.name, true)}
//         onChange={(e) => setFieldValue(field.name, e.target.value)}
//         placeholder={placeholder}
//         status={
//           !field.value && touched[field.name] && errors[field.name] && "error"
//         }
//       />
//       {!field.value && touched[field.name] && errors[field.name] && (
//         <small className="text-red-500 font-semibold text-xs">
//           {errorMessage}
//         </small>
//       )}
//     </div>
//   );
// };

// export default TextInput;

import React from 'react'

const index = ({
    label = "Label",
    type = "text",
    placeholder = "placeholder"
}) => {
    return (
        <div className='input'>
            {label ? <h2 className="input-label">{label}</h2> : null}
            <input
                className="input-item"
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default index
