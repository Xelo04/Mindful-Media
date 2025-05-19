import "./userStoryForm.scss";
import FormFilter from "./form-filter/FormFilter";
import { filtersData } from "../../data.ts";

const extraQuestion = [
  { value: "Less than an hour", label: "Less than an hour" },
  { value: "Less than 2 hours", label: "Less than 2 hours" },
  { value: "Less than 3 hours", label: "Less than 3 hours" },
  { value: "More than 3 hours", label: "More than 3 hours" },
];

const UserStoryForm = () => {
  return (
    <div className="userStoryForm">
      <span>UserStoryForm</span>
      <FormFilter options={extraQuestion} />
      <FormFilter options={filtersData.age} />
      <FormFilter options={filtersData.gender} />
      <FormFilter options={filtersData.sexuality} />
      <FormFilter options={filtersData.nationality} />
    </div>
  );
};

export default UserStoryForm;
