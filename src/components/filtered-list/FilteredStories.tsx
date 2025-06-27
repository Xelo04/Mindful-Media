// The FilteredStories component displays a paginated, filterable list of user-submitted stories.
// Users can filter stories by demographic fields using the Filters component, and expand/collapse each story's long description.
// The component manages pagination, filter state, and which stories have their full description visible.
// It receives selectOptions and storiesData as props, and is styled with SCSS.

import { useState, useMemo } from "react";
import Filters from "../filters/Filters";
import "./filteredStories.scss";

const storiesPerPage = 3;

interface Story {
  id: number;
  age: string;
  gender: string;
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
    sexuality: null,
    nationality: null,
    shortDescription: null,
    longDescription: null,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [visibleDescriptions, setVisibleDescriptions] = useState<Set<number>>(
    new Set()
  ); // Track visible descriptions by story ID

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

  // Toggle visibility of longDescription for a specific story
  const toggleDescription = (storyId: number) => {
    setVisibleDescriptions((prev) => {
      const updated = new Set(prev);
      if (updated.has(storyId)) {
        updated.delete(storyId);
      } else {
        updated.add(storyId);
      }
      return updated;
    });
  };

  return (
    <div className="filteredlist">
      <Filters
        selectOptions={selectOptions}
        onFiltersChange={handleFiltersChange}
      />
      <div className="stories">
        {filteredStories.length === 0 ? (
          <span className="no-stories">No stories found</span>
        ) : (
          paginatedStories.map((story) => (
            <div key={story.id} className="story">
              <div className="info-container">
                <p>AGE</p>
                <p>{story.age}</p>
                <p>SEXUALITY</p>
                <p>{story.sexuality}</p>
                <p>GENDER</p>
                <p>{story.gender}</p>
                <p>NATIONALITY</p>
                <p>{story.nationality}</p>
              </div>
              <p className="short-description-title">Short message:</p>
              <p className="short-description">{story.shortDescription}</p>
              <div
                className={`long-description${
                  visibleDescriptions.has(story.id) ? " open" : ""
                }`}
              >
                <div className="title">
                  <p>Their story</p>
                </div>
                <p>{story.longDescription}</p>
              </div>
              <button onClick={() => toggleDescription(story.id)}>
                {visibleDescriptions.has(story.id) ? "COLLAPSE" : "READ MORE"}
              </button>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {filteredStories.length > 0 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="arrow"
          >
            <span className="material-icons">arrow_left</span>
          </button>
          <div className="pages">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="arrow"
          >
            <span className="material-icons">arrow_right</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FilteredStories;
