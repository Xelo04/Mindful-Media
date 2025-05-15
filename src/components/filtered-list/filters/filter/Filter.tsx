// The Filter component is a reusable multi-select dropdown built using the react-select library.
// It allows users to select multiple (up to maxOptions) options from a list and passes the selected options back
// to the parent component via a callback function. The component is styled using SCSS
// Props are: options - an array of objects with value and label properties - example: const options = [{ value: "chocolate", label: "Chocolate" }]
// onSelectionChange - a callback function to handle the selected options
// placeholderName - a string to display as a placeholder in the select input - example: placeholderName={"flavour"}

import { useState } from "react";
import Select from "react-select";
import "./filter.scss";

const maxOptions = 5;

interface Option {
  value: string;
  label: string;
}

interface FilterProps {
  options: Option[];
  onSelectionChange: (selectedOptions: Option[] | null) => void;
  placeholderName: string;
}

function Filter({ options, onSelectionChange, placeholderName }: FilterProps) {
  const [selectedOptions, setSelectedOptions] = useState<Option[] | null>(null);

  const handleChange = (newValue: unknown) => {
    if (Array.isArray(newValue)) {
      if (newValue.length > maxOptions) {
        alert(`You can select up to ${maxOptions} options only.`);
        return;
      }
      setSelectedOptions(newValue);
      onSelectionChange(newValue);
    } else if (newValue === null) {
      setSelectedOptions(null);
      onSelectionChange(null);
    }
  };
  // const customStyles = {
  //   control: (provided: any) => ({
  //     ...provided,
  //     backgroundColor: "red",
  //     border: "1px solid #ccc",
  //     boxShadow: "none",
  //     "&:hover": {
  //       border: "1px solid #aaa",
  //     },
  //   }),
  // };

  return (
    <div className="filter-container">
      <Select
        isMulti
        classNamePrefix="filter"
        // styles={customStyles}
        options={options}
        placeholder={`Select ${placeholderName}`}
        value={selectedOptions}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
