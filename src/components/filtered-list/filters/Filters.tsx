import { useState } from "react";
import Filter from "./filter/Filter";
import "./filters.scss";

// Props for Filters
interface FiltersProps {
  selectOptions: {
    [key: string]: { value: string; label: string }[]; // Dynamic keys for filters
  };
  onFiltersChange: (filters: Record<string, any>) => void; // Callback to pass selected filters to the parent
}

const Filters = ({ selectOptions, onFiltersChange }: FiltersProps) => {
  // State to manage selected options for all filters
  const [selectedFilters, setSelectedFilters] = useState<Record<string, any>>(
    Object.keys(selectOptions).reduce((acc, key) => {
      acc[key] = null; // Initialize each filter's state as null
      return acc;
    }, {} as Record<string, any>)
  );

  // Generic handler for filter changes
  const handleFilterChange = (filterKey: string, selected: any) => {
    const updatedFilters = {
      ...selectedFilters,
      [filterKey]: selected, // Update the state for the specific filter
    };
    setSelectedFilters(updatedFilters);

    // Notify the parent about the updated filters
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
      <div className="selected-filters">
        <h2>Selected Filters:</h2>
        <pre>{JSON.stringify(selectedFilters, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Filters;
