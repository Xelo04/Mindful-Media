import "./teammemberslider.scss";
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
    <div className="teammemberslider">
      <button className="arrow-left" onClick={handlePrev}>
        <img src="arrow_left.svg" alt="Previous" />
      </button>
      <div className="team-member">
        <img
          src={teamMembers[currentIndex].image}
          alt={`${teamMembers[currentIndex].name} ${teamMembers[currentIndex].surname}`}
        />
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
