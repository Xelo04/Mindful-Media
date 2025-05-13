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
      <button className="arrow-left" onClick={handlePrev}>
        <img src="arrow_left.svg" alt="Previous" />
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
      <button className="arrow-right" onClick={handleNext}>
        <img src="arrow_right.svg" alt="Next" />
      </button>
    </div>
  );
};

export default TeamMemberSlider;
