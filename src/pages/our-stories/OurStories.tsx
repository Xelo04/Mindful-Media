import FilteredStories from "../../components/filtered-list/FilteredStories";
import { filtersData } from "../../data";
import { storiesData } from "../../data";
import "./ourStories.scss";

const OurStories = () => {
  return (
    <div className="ourStories">
      <h1>Our Stories</h1>
      <FilteredStories selectOptions={filtersData} storiesData={storiesData} />
    </div>
  );
};

export default OurStories;
