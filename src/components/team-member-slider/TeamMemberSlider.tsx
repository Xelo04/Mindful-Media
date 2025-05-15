// TeamMemberSlider component is using teamMembers array from data.ts to render
// a slider of team members. The component uses useState to manage the current index of the displayed team member.
// The component renders the current team member's image, name, surname, and description.
// The component also includes left and right arrow buttons to navigate through the team members (arrows are svg files).
// teamMembers = [{id, name, surname, image, description}]

import "./teamMemberSlider.scss";
import { useState } from "react";
import { teamMembers } from "../../data";

const TeamMemberSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="team-member-slider">
      <button onClick={handlePrev}>
        <span className="material-icons">arrow_left</span>
      </button>
      <img
        className="team-member-image"
        src={teamMembers[currentIndex].image}
        alt={`${teamMembers[currentIndex].name} ${teamMembers[currentIndex].surname}`}
      />
      <div className="team-member-info">
        <h3>
          {teamMembers[currentIndex].name} {teamMembers[currentIndex].surname}
        </h3>
        <p>{teamMembers[currentIndex].description}</p>
      </div>
      <button onClick={handleNext}>
        <span className="material-icons">arrow_right</span>
      </button>
    </div>
  );
};

export default TeamMemberSlider;
