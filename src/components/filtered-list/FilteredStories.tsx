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

const handleFiltersChange = (filters: Record<string, any>) => {
  console.log("Updated filters:", filters);
};

const FilteredStories = ({
  selectOptions,
  storiesData,
}: FilteredStoriesProps) => {
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
        {storiesData.map((story) => (
          <div key={story.id} className="story-item">
            <h3>{story.shortDescription}</h3>
            <p>{story.longDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredStories;
