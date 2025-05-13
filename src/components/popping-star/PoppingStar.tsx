import React, { useEffect, useState } from "react";
import "./poppingStar.scss";

const PoppingStar: React.FC = () => {
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
      width={100}
      height={100}
    />
  );
};

export default PoppingStar;
