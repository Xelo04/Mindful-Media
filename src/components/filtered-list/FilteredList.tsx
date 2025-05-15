import { useState, useEffect } from "react";
import Filter from "./filter/Filter";
// import "./filterslist.scss";

// Props for FiltersList
interface FiltersListProps {
  selectOptions: {
    [key: string]: { value: string; label: string }[]; // Dynamic keys for filters
  };
  onFiltersChange: (filters: Record<string, any>) => void; // Callback to pass selected filters to the parent
}

const FiltersList = ({ selectOptions, onFiltersChange }: FiltersListProps) => {
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
    <div className="filterslist">
      <h1>Reusable Filters Component</h1>

      {/* Dynamically render filters */}
      {Object.entries(selectOptions).map(([filterKey, options]) => (
        <div key={filterKey} className="filter-container">
          <h2>{filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}</h2>
          <Filter
            options={options}
            onSelectionChange={(selected) =>
              handleFilterChange(filterKey, selected)
            }
          />
        </div>
      ))}

      {/* Display selected options */}
      <div className="selected-filters">
        <h2>Selected Filters:</h2>
        <pre>{JSON.stringify(selectedFilters, null, 2)}</pre>
      </div>
    </div>
  );
};

export default FiltersList;
