import { useGet } from "crud";
import { get } from "lodash";
import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { api, queryBuilder } from "services";

const index = ({
  placeholder,
  label,
  optionLabel,
  optionValue,
  loadOptionsUrl,
  menuPlacement = "bottom",
  isDisabled,
  isMulti = false,
  onChange = () => {},
  loadOptionsParams = () => {},
  field: { value, name },
  form: { setFieldValue, errors, touched, setFieldTouched },
}) => {
  async function loadOptions(search, loadedOptions, { page }) {
    const { data } = await api.get(
      queryBuilder(loadOptionsUrl, {
        page,
        ...loadOptionsParams(search),
      })
    );
    return {
      options: get(data, "data", []),
      hasMore: get(data, "current_page") < get(data, "last_page", 1),
      additional: {
        page: get(data, "current_page", 1) + 1,
      },
    };
  }

  const styles = {
    control: (props) => {
      return {
        ...props,
      };
    },
  };

  return (
    <div className="flex flex-col w-full">
      {label ? <h2 className="text-sm">{label}</h2> : null}

      <AsyncPaginate
        styles={styles}
        className="w-full"
        name={name}
        isDisabled={isDisabled}
        value={value}
        isMulti={isMulti}
        menuPlacement={menuPlacement}
        loadOptions={loadOptions}
        placeholder={placeholder}
        getOptionLabel={(option) =>
          typeof optionLabel === "function"
            ? optionLabel(option)
            : option[optionLabel]
        }
        getOptionValue={(option) =>
          typeof optionValue === "function"
            ? optionValue(option)
            : option[optionValue]
        }
        onChange={(e) => {
          onChange(e);
          setFieldValue(name, e);
        }}
        additional={{
          page: 1,
        }}
      />
    </div>
  );
};

export default index;
