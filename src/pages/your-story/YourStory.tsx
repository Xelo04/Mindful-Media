import UserStoryForm from "../../components/user-story-form/UserStoryForm";
import "./yourStory.scss";

const YourStory = () => {
  return (
    <div className="yourStory">
      <h1>Your Story</h1>
      <UserStoryForm />
    </div>
  );
};

export default YourStory;
