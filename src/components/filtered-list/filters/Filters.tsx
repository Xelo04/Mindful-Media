// The Filters component is a reusable filter container that dynamically renders multiple filter dropdowns
// using Filter component based on the selectOptions prop. It manages the selected filter values and notifies
// the parent component of any changes via the onFiltersChange callback.
// Props are: selectOptions - an object where keys are filter names and values are arrays of options - example: const options = [{ value: "chocolate", label: "Chocolate" }]
// onFiltersChange - a callback function to handle the selected options

import { useState } from "react";
import Filter from "./filter/Filter";
import "./filters.scss";

interface FiltersProps {
  selectOptions: {
    [key: string]: { value: string; label: string }[];
  };
  onFiltersChange: (filters: Record<string, any>) => void;
}

const Filters = ({ selectOptions, onFiltersChange }: FiltersProps) => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, any>>(
    Object.keys(selectOptions).reduce((acc, key) => {
      acc[key] = null;
      return acc;
    }, {} as Record<string, any>)
  );

  const handleFilterChange = (filterKey: string, selected: any) => {
    const updatedFilters = {
      ...selectedFilters,
      [filterKey]: selected,
    };
    setSelectedFilters(updatedFilters);

    onFiltersChange(updatedFilters);
  };

  return (
    <div className="filters-container">
      <div className="filters">
        {Object.entries(selectOptions).map(([filterKey, options]) => (
          <Filter
            options={options}
            onSelectionChange={(selected) =>
              handleFilterChange(filterKey, selected)
            }
            placeholderName={
              filterKey.charAt(0).toUpperCase() + filterKey.slice(1)
            }
          />
        ))}
      </div>

      {/* Display selected options */}
      {/* <div className="selected-filters">
        <h2>Selected Filters:</h2>
        <pre>{JSON.stringify(selectedFilters, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default Filters;
