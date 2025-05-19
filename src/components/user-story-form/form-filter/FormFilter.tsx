// The Filter component is a reusable multi-select dropdown built using the react-select library.
// It allows users to select multiple (up to maxOptions) options from a list and passes the selected options back
// to the parent component via a callback function. The component is styled using SCSS
// Props are: options - an array of objects with value and label properties - example: const options = [{ value: "chocolate", label: "Chocolate" }]
// onSelectionChange - a callback function to handle the selected options
// placeholderName - a string to display as a placeholder in the select input - example: placeholderName={"flavour"}

import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

interface FilterProps {
  options: Option[];
}

function Filter({ options }: FilterProps) {
  return (
    <div className="filter-container">
      <Select
        options={options}
        noOptionsMessage={() => "All options selected"}
        placeholder="Your answer"
      />
    </div>
  );
}

export default Filter;
