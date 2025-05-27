import React, { useEffect, useState } from "react";
import "./poppingStar.scss";

interface PoppingStarProps {
  width?: number;
  height?: number;
}

const PoppingStar: React.FC<PoppingStarProps> = ({
  width = 100,
  height = 100,
}) => {
  const [pop, setPop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPop(true);
      setTimeout(() => setPop(false), 500);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src="star.svg"
      alt="star"
      className={`star ${pop ? "pop" : ""}`}
      width={width}
      height={height}
    />
  );
};

export default PoppingStar;
