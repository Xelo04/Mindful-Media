import { useState, useMemo } from "react";
import Filters from "./filters/Filters";
// import './filteredlist.scss';

interface FilteredStoriesProps {
  selectOptions: {
    [key: string]: { value: string; label: string }[];
  };
  storiesData: {
    id: number;
    age: string;
    gender: string;
    race: string;
    sexuality: string;
    nationality: string;
    shortDescription: string;
    longDescription: string;
  }[];
}

const FilteredStories = ({
  selectOptions,
  storiesData,
}: FilteredStoriesProps) => {
  const [filters, setFilters] = useState<Record<string, any>>({}); // State to store active filters

  // Handle filter changes from the Filters component
  const handleFiltersChange = (updatedFilters: Record<string, any>) => {
    setFilters(updatedFilters);
  };

  // Filter stories based on active filters
  const filteredStories = useMemo(() => {
    return storiesData.filter((story) =>
      Object.entries(filters).every(([key, value]) => {
        if (!value || value.length === 0) return true; // Skip if no filter is applied for this key
        if (Array.isArray(value)) {
          // Handle multi-select filters
          return value.some((filterValue) => story[key] === filterValue.value);
        }
        return story[key] === value;
      })
    );
  }, [filters, storiesData]);

  return (
    <div className="filteredlist">
      <span>---</span>
      <Filters
        selectOptions={selectOptions}
        onFiltersChange={handleFiltersChange}
      />
      <span>---</span>
      <div className="stories-list">
        <h2>Stories:</h2>
        {filteredStories.map((story) => (
          <div key={story.id} className="story-item">
            <p>{story.age}</p>
            <p>{story.gender}</p>
            <p>{story.race}</p>
            <p>{story.sexuality}</p>
            <p>{story.nationality}</p>
            <p>{story.shortDescription}</p>
            <p>{story.longDescription}</p>
            <p>-----------------------------------</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredStories;
