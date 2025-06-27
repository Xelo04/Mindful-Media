// The PoppingStar component displays an animated star SVG with a "popping" looping animation.
// It accepts optional width, height, and delayPercent props to control the star's size and animation delay.
// The animation is handled via SCSS, and the component is reusable for decorative or animated star effects.

import "./poppingStar.scss";

const ANIMATION_DURATION = 1.5; // sekundy

const PoppingStar = ({ width = 50, height = 50, delayPercent = 0 }) => {
  const delaySeconds = (delayPercent / 100) * ANIMATION_DURATION;

  const style = {
    width,
    height,
    animationDelay: `${delaySeconds}s`,
  };

  return (
    <div className="pop-star-wrapper" style={{ width, height }}>
      <img src="/star.svg" alt="star" className="looping-pop" style={style} />
    </div>
  );
};

export default PoppingStar;
