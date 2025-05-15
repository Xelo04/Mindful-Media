import { useState, useMemo } from "react";
import Filters from "./filters/Filters";
// import './filteredlist.scss';

const storiesPerPage = 3;

interface Story {
  id: number;
  age: string;
  gender: string;
  race: string;
  sexuality: string;
  nationality: string;
  shortDescription: string;
  longDescription: string;
}

interface FilteredStoriesProps {
  selectOptions: {
    [key: string]: { value: string; label: string }[];
  };
  storiesData: Story[];
}

const FilteredStories = ({
  selectOptions,
  storiesData,
}: FilteredStoriesProps) => {
  const [filters, setFilters] = useState<Record<keyof Story, any>>({
    id: null,
    age: null,
    gender: null,
    race: null,
    sexuality: null,
    nationality: null,
    shortDescription: null,
    longDescription: null,
  });

  const [currentPage, setCurrentPage] = useState(1);

  const handleFiltersChange = (updatedFilters: Record<keyof Story, any>) => {
    setFilters(updatedFilters);
    setCurrentPage(1);
  };

  // Filter stories based on active filters
  const filteredStories = useMemo(() => {
    return storiesData.filter((story) =>
      Object.entries(filters).every(([key, value]) => {
        if (!value || value.length === 0) return true;
        if (Array.isArray(value)) {
          return value.some(
            (filterValue) => story[key as keyof Story] === filterValue.value
          );
        }
        return story[key as keyof Story] === value;
      })
    );
  }, [filters, storiesData]);

  // Calculate the stories to display on the current page
  const paginatedStories = useMemo(() => {
    const startIndex = (currentPage - 1) * storiesPerPage;
    const endIndex = startIndex + storiesPerPage;
    return filteredStories.slice(startIndex, endIndex);
  }, [filteredStories, currentPage]);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredStories.length / storiesPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="filteredlist">
      <Filters
        selectOptions={selectOptions}
        onFiltersChange={handleFiltersChange}
      />
      <div className="stories-list">
        <h2>Stories:</h2>
        {paginatedStories.map((story) => (
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

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src="arrow_left.svg" alt="Previous Page" />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src="arrow_right.svg" alt="Next Page" />
        </button>
      </div>
    </div>
  );
};

export default FilteredStories;
