import FiltersList from "./filters/Filters";
// import './filteredlist.scss';

interface FiltersListProps {
  selectOptions: {
    [key: string]: { value: string; label: string }[]; // Dynamic keys for filters
  };
}

const handleFiltersChange = (filters: Record<string, any>) => {
  console.log("Updated filters:", filters);
};

const FilteredList = ({ selectOptions }: FiltersListProps) => {
  return (
    <div className="filteredlist">
      {" "}
      <span>---</span>
      <FiltersList
        selectOptions={selectOptions}
        onFiltersChange={handleFiltersChange}
      />
      <span>---</span>
    </div>
  );
};

export default FilteredList;
