// The Filter component is a reusable multi-select dropdown built using the react-select library.
// It allows users to select multiple options from a list and passes the selected options back
// to the parent component via a callback function. The component is styled using SCSS
// Props are: options - an array of objects with value and label properties - example: const options = [{ value: "chocolate", label: "Chocolate" }]
// onSelectionChange - a callback function to handle the selected options
// placeholderName - a string to display as a placeholder in the select input - example: placeholderName={"flavour"}

import { useState } from "react";
import Select from "react-select";
import "./filter.scss";

interface Option {
  value: string;
  label: string;
}

// Props for the Filter component
interface FilterProps {
  options: Option[];
  onSelectionChange: (selectedOptions: Option[] | null) => void;
  placeholderName: string;
}

function Filter({ options, onSelectionChange, placeholderName }: FilterProps) {
  const [selectedOptions, setSelectedOptions] = useState<Option[] | null>(null);

  const handleChange = (newValue: unknown) => {
    if (Array.isArray(newValue) || newValue === null) {
      setSelectedOptions(newValue);
      onSelectionChange(newValue);
    }
  };

  return (
    <div>
      <Select
        isMulti
        classNamePrefix="select-filter"
        options={options}
        placeholder={`Select ${placeholderName}`}
        value={selectedOptions}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
