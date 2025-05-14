// The FiltersList component is a reusable and generic filterable list.
// It dynamically generates filter dropdowns based on the provided filtersData and applies those filters to the data array.
// The filtered results are rendered using a custom renderItem function provided by the parent component.
// What needs to be implemented in the FiltersList component:
// 1. data - The dataset array to be filtered - example: const data = [{ id: 1, name: "John"}];
// 2. filtersData - An object containing filter categories as keys and their respective options as values - example: const filtersData = { age: ["0-18", "19-25"] };
// 3. renderItem - A function that takes an item from the filtered data and returns a JSX element to render it - example: const renderItem = (item) => <div>{item.name}</div>;
import { useState, useMemo } from "react";

// Props for the FiltersList component.
interface FiltersListProps<T> {
  data: T[];
  filtersData: Record<string, string[]>; // Filter categories and their options.
  renderItem: (item: T) => JSX.Element; // Function to render each filtered item.
}

const FiltersList = <T extends Record<string, any>>({
  data,
  filtersData,
  renderItem,
}: FiltersListProps<T>) => {
  // State to track the currently selected filter values.
  const [filters, setFilters] = useState<Record<string, string>>(
    Object.keys(filtersData).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
  );

  // State to track the search input for the last dropdown.
  const [searchTerm, setSearchTerm] = useState("");

  // Updates the filter value for a specific key.
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Filters the data based on the currently selected filter values.
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.entries(filters).every(([key, value]) =>
        value === "" ? true : item[key] === value
      )
    );
  }, [filters, data]);

  return (
    <div>
      {/* Render filter dropdowns dynamically based on `filtersData`. */}
      {Object.entries(filtersData).map(([key, options], index, array) => {
        const isLastFilter = index === array.length - 1; // Check if it's the last filter.

        return (
          <div key={key} style={{ position: "relative" }}>
            {isLastFilter ? (
              <>
                {/* Searchable dropdown for the last filter */}
                <input
                  type="text"
                  placeholder={`Search ${key}`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ marginBottom: "5px", width: "100%" }}
                />
                <select
                  value={filters[key]}
                  onChange={(e) => handleFilterChange(key, e.target.value)}
                >
                  <option value="">All {key}</option>
                  {options
                    .filter((option) =>
                      option.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </select>
              </>
            ) : (
              // Regular dropdown for other filters
              <select
                value={filters[key]}
                onChange={(e) => handleFilterChange(key, e.target.value)}
              >
                <option value="">All {key}</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        );
      })}

      {/* Render the filtered data using the `renderItem` function. */}
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FiltersList;
