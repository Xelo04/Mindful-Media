// The FormDropdownInput component is a reusable multi-select dropdown built using the react-select library.
// It allows users to select multiple (up to maxOptions) options from a list and passes the selected options back
// to the parent component via a callback function. The component is styled using SCSS
// Props are: options - an array of objects with value and label properties - example: const options = [{ value: "chocolate", label: "Chocolate" }]
// onSelectionChange - a callback function to handle the selected options
// placeholderName - a string to display as a placeholder in the select input - example: placeholderName={"flavour"}

import { useEffect, useState } from "react";
import Select from "react-select";
import "./formDropdownInput.scss";

interface Option {
  value: string;
  label: string;
}

interface FormDropdownInputProps {
  name: string;
  options: Option[];
  onChange?: (value: string) => void;
}

function FormDropdownInput({
  name,
  options,
  onChange,
}: FormDropdownInputProps) {
  const [selected, setSelected] = useState<Option | null>(null);

  useEffect(() => {
    if (onChange) {
      onChange(selected ? selected.value : "");
    }
  }, [selected, onChange]);

  return (
    <div className="input-container">
      <Select
        options={options}
        onChange={(option) => setSelected(option)}
        placeholder="Your Answer"
        classNamePrefix="input-dropdown"
      />
      <input type="hidden" name={name} value={selected ? selected.value : ""} />
    </div>
  );
}

export default FormDropdownInput;
